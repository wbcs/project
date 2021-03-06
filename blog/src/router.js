import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/homePage/Home';
import LogIn from '@/components/LogIn';
import SignUp from '@/components/SignUp';
import User from '@/components/user/User';
import NotFound from '@/components/NotFound';

import Query from '@/components/article/Query';

import ArticleCard from '@/article';

import Write from '@/components/article/modify/Write';
import Rewrite from '@/components/article/modify/Rewrite';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleCard
    },
    {
      path: '/write',
      name: 'write',
      component: Write
    },
    {
      path: '/edit/:id',
      name: 'rewrite',
      component: Rewrite
    },
    {
      path: '/search',
      name: 'Query',
      component: Query
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    },
  ]
});