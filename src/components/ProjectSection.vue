<template>
    <section class="project-section">
        <generic-title :words="[$t('projects-title')]" :marginFor2ndLine="false" />
        <project-section-list/>
        <generic-arrow :text="$t('arrow.contact')" @click="goContact()" />
        <generic-arrow :text="$t('arrow.who')" :pointingRight="false" @click="goProfile()" />
    </section>
</template>

<script>
import GenericTitle from '@/components/GenericTitle.vue';
import GenericArrow from '@/components/GenericArrow.vue';
import ProjectSectionList from '@/components/ProjectSectionList.vue';
export default {
    components: {
        GenericTitle,
        GenericArrow,
        ProjectSectionList
    },
    methods: {
        goProfile() {
            this.$router.push({ name: 'profile' });     
        },
        goContact() {
            this.$router.push({ name: 'contact' });
        }
    }
}

</script>

<style lang="scss" scoped>
    .project-section {
        padding-bottom: 65px;
    }
</style>