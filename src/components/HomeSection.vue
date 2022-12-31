<template>
    <section class="home-section">
        <generic-title class="text" :words="[$t('home-title.first'), $t('home-title.second'), $t('home-title.third')]" :marginForSecondLine="true" />
        <generic-arrow @click="goProfile()" :text="$t('arrow.who')" />
    </section>
</template>

<script>
import GenericTitle from './GenericTitle.vue';
import GenericArrow from './GenericArrow.vue';
export default {
    components: {
        GenericTitle,
        GenericArrow,
    },
    methods: {
        goProfile() {
            this.$router.push({ name: 'profile' });
        }
    }
} 
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
    .home-section {
        .text {
            font-size: 9vw;
        }
    }
}
</style>