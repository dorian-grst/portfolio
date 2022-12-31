<template>
    <form id="form" ref="form" @submit.prevent="sendEmail">
        <div class="name">
            <input type="text" :placeholder="$t('inputs.lastname')" v-model="nom" name="nom" id="nom" required>
            <input type="text" :placeholder="$t('inputs.firstname')" v-model="prenom" name="prenom" id="prenom"
                required>
        </div>
        <input type="text" :placeholder="$t('inputs.mail')" v-model="email" name="email" id="email" autocapitalize="off" required>
        <input type="text" :placeholder="$t('inputs.subject')" v-model="objet" name="objet" id="objet" required>
        <button class="button" v-bind:disabled="!formValid" type="submit">
            <span id="changeColor" class="text" v-bind:textContent="$t(text)"></span>
            <img v-if="showImage" class="arrow" src="@/assets/arrow.svg" alt="arrow">
        </button>

    </form>

</template>
<script>
import emailjs from '@emailjs/browser';
export default {
    data() {
        return {
            nom: '',
            prenom: '',
            email: '',
            objet: '',
            text: 'button.send',
            initialColor: '#787878',
            showImage: true,
        }

    },
    mounted() {
        this.span = document.getElementById('changeColor')
    },
    methods: {
        reset() {
            this.nom = "";
            this.prenom = "";
            this.email = "";
            this.objet = "";
        },
        modifieButton(state) {
            this.reset();
            this.span.style.color = 'black'
            this.text = this.$t('button.' + state);
            this.imageUrl = '';
            this.showImage = false;
            setTimeout(() => {
                this.text = this.$t('button.send');
                this.span.style.color = this.initialColor;
                this.showImage = true;
            }, 3000);
        },
        sendEmail() {
            emailjs.sendForm('mail_service', 'mail_template', this.$refs.form, 'xlgdAcKTfTCwj6JLV')
                .then((result) => {
                    console.log(result.text);
                    this.modifieButton('sent');
                }, (error) => {
                    console.log(error.text);
                    this.modifieButton('error');
                });
        },
    },
    computed: {
        formValid() {
            return this.nom !== '' && this.prenom !== '' && this.email !== '' && this.objet !== '';
        }
    }
}
</script>


<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    margin-left: 10%;

    .name {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }

    input {
        height: 50px;
        border: none;
        width: 98%;
        min-width: 100px;
        border-bottom: 2px solid #000000;
        margin-bottom: 20px;
        padding-left: 10px;
        font-size: 20px;
    }

    input::placeholder {
        color: #787878;
    }

    button {
        border: none;
        background: none;
        font-size: 20px;

        img {
            width: 15px;
            margin-left: 10px;
        }
    }
}

@media (max-width: 767px) {
    form {
        display: block;
        margin-top: 30px;
        margin-left: 0;

        .name {
            display: block;
            gap: 0;
        }

        button {
            display: block;
            margin: 0 auto;
        }
    }

    form:nth-last-child() {
        margin: 0 auto
    }
}

@media (max-width: 400px){
    form {
        input {
            height : 40px;
            font-size: 15px;

        }
        button {
            font-size: 15px;
            img {
                width: 10px;
            }
        }
    }
}
</style>