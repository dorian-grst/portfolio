<template>
    <div :class="{ backgroundColoredRight: isFirstColored() && !isMobile() }">
        <the-header :class="{ backgroundColoredHeader: isMobile() }" />
        <router-view v-if="!isMobile()" />
        <div v-else>
            <home-page class="backgroundColoredTop" />
            <profile-page />
            <projects-page class="backgroundColoredTop" />
            <contact-page />
        </div>
        <the-footer />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import HomePage from '@/views/HomePage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import ProjectsPage from '@/views/ProjectPage.vue';
import ContactPage from '@/views/ContactPage.vue';
export default {
    components: {
        TheHeader,
        TheFooter,
        HomePage,
        ProfilePage,
        ProjectsPage,
        ContactPage,
    },
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.handleResize);
        })
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        isFirstColored() {
            if (this.$route.name == 'home') {
                return true;
            }
            return false;
        },
        isMobile() {
            if (this.windowWidth <= 767) {
                return true;
            }
            return false;
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    overflow-x:hidden;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
}

.backgroundColoredRight {
    background: linear-gradient(to right, #A8C5EE 1.88%, #67B3DE 31%, #6DEEB5 60.12%, #C9F4DA 96.65%);
    height: 100vh;
}

.backgroundColoredTop {
    background: linear-gradient(to top, #A8C5EE 1.88%, #67B3DE 31%, #6DEEB5 60.12%, #C9F4DA 96.65%);
}

.backgroundColoredHeader {
    background-color: #C9F4DA;
}
</style>
