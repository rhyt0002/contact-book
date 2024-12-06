import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactDetailsPage.vue';
import AddPage from '../pages/AddPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact/:id', component: ContactPage },
  { path: '/add', component: AddPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
