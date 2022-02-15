
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import TeamsMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams',
        },
        {
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
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
            components: {
                default: UsersList,
                footer: UsersFooter,
            },

            // Local navigation guard

            // beforeEnter(to, from, next){
            //     console.log(to);
            //     console.log(from);
            //     next();
            // },
        },
        {
            path: '/:notFound(.*)',
            redirect: '/teams',
        },
    ],
    scrollBehavior(_, _2, savedPosition){
        console.log(savedPosition);
        if(savedPosition){
            return savedPosition;
        }
        return{
            left: 0,
            top: 0,
        };
    }
});

// Global navigation gards

// router.beforeEach(function(to, from, next){
//     console.log(to);
//     console.log(from);
//     next();
// });

export default router;