<template>
    <section class="profile-section">
        <div class="container">
            <generic-title :words="['DORIAN', 'GRASSET']" :marginForSecondLine="false" />
            <img class="picture" src="@/assets/profilepicture.jpeg" alt="profile-picture" />
        </div>
        <profile-section-presentation />
        <generic-arrow :text="$t('arrow.projects')" @click="goProject()" />
        <generic-arrow :text="$t('arrow.home')" :pointingRight="false" @click="goHome()" />
    </section>
</template>

<script>
import GenericTitle from './GenericTitle.vue';
import GenericArrow from './GenericArrow.vue';
import ProfileSectionPresentation from './ProfileSectionPresentation.vue';
export default {
    components: {
        GenericTitle,
        GenericArrow,
        ProfileSectionPresentation
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

        .picture {
            width: 20%;
            height: 20%;
            border-radius: 300px;
            margin-left: 10%;

        }
    }
}

@media (max-width: 767px) {
    .picture {
        top: 390px;
        left: 450px;
        width: 200px;
    }

}
</style>