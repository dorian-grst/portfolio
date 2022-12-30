<template>
    <header>
        <router-link class="left" to='/'>
            <img src="@/assets/logo.png" alt="logo">
            <span>Portfolio</span>
        </router-link>
        <div class="right">
            <div class="container">
                <span 
                v-for="abbreviation in abbreviations.slice(0, 1)" 
                :key="abbreviation.id"
                @click="changeLanguage">
                    {{ abbreviation.text }}
                </span>
                <a href='cv.pdf' target="_blank">
                    <span 
                    v-for="abbreviation in abbreviations.slice(1, 2)" 
                    :key="abbreviation.id">
                        {{ abbreviation.text}}
                    </span>
                    <img src="@/assets/arrow.svg">
                </a>
            </div>
            <div class='dots'>
                <span class='dot'></span>
                <span class='dot'></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            abbreviations: [
                { id: 0, text: 'FR' },
                { id: 1, text: 'CV' }
            ]
        }
    },
    methods: {
        changeLanguage() {
            this.abbreviations[0].text = this.abbreviations[0].text === 'FR' ? 'EN' : 'FR';
            this.$i18n.locale = this.currentLocale === 'en' ? 'fr' : 'en';
            this.currentLocale = this.$i18n.locale;
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-left: 65px;
    padding-right: 65px;

    .left {
        display: flex;
        align-items: center;
        text-decoration: none;

        span {
            font-size: 25px;
            margin-left: 10px;
            color: black;
        }

        img {
            width: 40px;
        }
    }

    .right {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 100px;

        .container {
            display: flex;
            gap: 100px;
            font-size: 25px;
            color: black;
            text-decoration: none;

            a {
                text-decoration: none;
                color: black;
            }
        }

        .dots {
            display: flex;
            gap: 15px;

            .dot {
                height: 20px;
                width: 20px;
                background-color: black;
                border-radius: 50%;
                display: inline-block;
            }
        }
    }
}

@media (max-width: 767px) {
    header {
        padding-left: 30px;
        padding-right: 30px;

        .right {
            gap: 50px;

            .container {
                gap: 50px;
            }
        }
    }
}
</style>