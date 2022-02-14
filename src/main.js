import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamsMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams',
        },
        {
            path: '/teams',
            component: TeamsList,
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamsMembers,
                    props: true,
                },
            ],
        },
        {
            path: '/users',
            component: UsersList,
        },
        {
            path: '/:notFound(.*)',
            redirect: '/teams',
        },
    ],
});

const app = createApp(App);

app.use(router);
app.mount('#app');
