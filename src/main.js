import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components
import Home from './components/Home.vue';
import PostView from './components/PostView.vue';
import PostDetail from './components/PostDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/post', name: "posts", component: PostView },
    { path: '/post-detail/:id', name: "post-detail", component: PostDetail },
    // Add more routes as needed
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
