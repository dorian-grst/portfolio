import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ControversyWebsitePage from '@/views/ProjectControversyWebsitePage.vue'
import ProjectAvendurierDuRailPage from '@/views/ProjectAventuriersDuRailPage.vue'
import ProjectScrabblePage from '@/views/ProjectScrabblePage.vue'
import ProjectMiraculumPage from '@/views/ProjectMiraculumPage.vue'
import ProjectForumApplicationPage from '@/views/ProjectForumApplicationPage.vue'

const routes = [
    {
        name : 'home',
        path : '/',
        component : HomePage
    }, {
        name : 'profile',
        path : '/profile',
        component : ProfilePage,
    }, {
        name : 'projects',
        path : '/projects',
        component : ProjectPage
    }, {
        name : 'contact',
        path : '/contact',
        component : ContactPage
    }, {
        name : 'controversy-website',
        path : '/controversy-website',
        component : ControversyWebsitePage
    }, {
        name : 'aventuriers-du-rail',
        path : '/aventuriers-du-rail',
        component : ProjectAvendurierDuRailPage
    }, {
        name: 'scrabble',
        path: '/scrabble',
        component : ProjectScrabblePage
    }, {
        name: 'miraculum',
        path: '/miraculum',
        component : ProjectMiraculumPage
    }, {
        name: 'forum-application',
        path: '/forum-application',
        component : ProjectForumApplicationPage
    }
]; 

const router = createRouter({
    history : createWebHashHistory(),
    routes,
});

export default router;