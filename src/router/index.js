import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import ContactPage from '@/views/ContactPage.vue'
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
    }
]; 

const router = createRouter({
    history : createWebHashHistory(),
    routes,
});

export default router;