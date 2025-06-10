import {createRouter,createWebHistory} from 'vue-router'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:() => import( '@/components/MainPage.vue'),
            redirect:"home",
            children:[
                {
                    name:"login",
                    path:'login',
                    component:() => import('@/components/LoginPanel.vue')
                },
                {
                    name:'register',
                    path:'register',
                    component:() => import('@/components/RegisterPanel.vue')
                },
                {
                    name:"home",
                    path:'home',
                    component:() => import('@/components/Home.vue')
                },
                {
                    name:"workpage",
                    path:'workpage',
                    component:() => import('@/components/WorkPage.vue'),
                    redirect:{name:'HelpPage'},
                    children:[
                        {
                            name:"boxhouse",
                            path:'boxhouse',
                            component:() => import('@/components/boxstorehouse.vue'),
                        },
                        {
                            name:"modulehouse",
                            path:'modulehouse',
                            component:() => import('@/components/modulestorehouse.vue'),
                        },
                        {
                            name:"containerhouse",
                            path:'containerhouse',
                            component:() => import('@/components/containerstorehouse.vue'),
                        },
                        {
                            name:"HelpPage",
                            path:'helppage',
                            component:() => import('@/components/HelpPage.vue'),
                        },
                        {
                            name:"mainWorkPage",
                            path:'mainwork',
                            component:() => import('@/components/mainWorkPage.vue'),
                        },
                        {
                            name:"About",
                            path:'about',
                            component:() => import('@/views/AboutPage.vue'),
                        },
                        
                    ]
                }
                
            ]
        }
    ]
})

export default router