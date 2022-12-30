<template>
    <section class="profile-section">
        <div class="container">
            <generic-title :words="['DORIAN', 'GRASSET']" :marginForSecondLine="false" />
            <img src="@/assets/profilepicture.jpeg" alt="profile-picture" />
        </div>
        <profile-presentation />
        <generic-arrow :text="$t('arrow.projects')" @click="goProject()" />
        <generic-arrow :text="$t('arrow.home')" :pointingRight="false" @click="goHome()" />
    </section>
</template>

<script>
import GenericTitle from './GenericTitle.vue';
import GenericArrow from './GenericArrow.vue';
import ProfilePresentation from './ProfilePresentation.vue';
export default {
    components: {
        GenericTitle,
        GenericArrow,
        ProfilePresentation
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
        goProject() {
            this.$router.push({ name: 'projects' });
        }
    }
} 
</script>

<style lang="scss" scoped>
.profile-section {
    padding-bottom: 65px;

    .container {
        display: flex;
        align-items: center;

        img {
            width: 20%;
            height: 20%;
            border-radius: 300px;
            margin-left: 10%;

        }
    }
}

@media (max-width: 767px) {
    img {
        top: 390px;
        left: 450px;
        width: 200px;
    }

}
</style>