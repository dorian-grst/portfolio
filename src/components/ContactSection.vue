<template>
    <section class="contact-section">
        <generic-title :words="['CONTACT']" :marginFor2ndLine="false" />
        <div class="box">
            <contact-box />
            <contact-form />
        </div>
        <generic-arrow @click="goProjet()" :text="$t('arrow.projects')" :pointingRight="false" />
    </section>
</template>

<script>
import GenericTitle from '@/components/GenericTitle.vue';
import GenericArrow from '@/components/GenericArrow.vue';
import ContactBox from '@/components/ContactBox.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
    components: {
        GenericTitle,
        GenericArrow,
        ContactBox,
        ContactForm
    },
    methods: {
        goProjet() {
            this.$router.push({ name: 'projects' });
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-section {
    padding-bottom: 65px;

    .box {
        display: flex;
        flex-direction: row;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: space-between;
    }
}

@media (max-width: 767px) {
    .contact-section {
        .box {
            flex-direction: column;
        }
    }
}
</style>