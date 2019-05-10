import Vue from 'vue';
import VueRouter from 'vue-router';

import myHomepage from './../components/homepage';
import myTest from'./../components/test';
import myliuyan from'./../components/liuyan';
import myuser from'./../components/user';
import myguan from'./../components/guan';
import aboutus from'./../components/aboutus';


import myceshi from'./../components/userzhuce';

import myusertousu from'./../components/usertousu';
import myuserxinwen from'./../components/userxinwen';
import myusertongzhi from'./../components/usertongzhi';
import myuserluru from'./../components/userluru';
import myuserxiugai from'./../components/userxiugai';
import myuserbaoxiu from'./../components/userbaoxiu';
import myuserzhuce from'./../components/userzhuce';
import myuserdenglu from'./../components/userdenglu';

import guantousu from'./../components/guantousu';
import guanxinwen from'./../components/guanxinwen';
import guantongzhi from'./../components/guantongzhi';
import guanxinxi from'./../components/guanxinxi';
import guanbaoxiu from'./../components/guanbaoxiu';
import guandenglu from'./../components/guandenglu';

import dengchu from'./../components/dengchu'


Vue.use(VueRouter);




export default new VueRouter({
    routes: [
      // luyouguize
      { path: '/', component: myHomepage,name:'homepage' },
      { path: '/aboutus', component: aboutus,name:'aboutus' },
      /* { path: '/goodslist', component: goodslist } */
      {path: '/myTest',component:myTest,name:'myTest'},
      {path: '/homepage',redirect:'/'},
      { path: '/liuyan', component: myliuyan,name:'myliuyan' },
      {path: '/0',redirect:'/'},
      {path:'/user',component:myuser,name:'myuser',
      children:[
        {
          path:'/user/usertousu',
          component:myusertousu,
          name:'myusertousu'
        },
        {
          path:'/user/userxinwen',
          component:myuserxinwen,
          name:'myuserxinwen'
        },
        {
          path:'/user/usertongzhi',
          component:myusertongzhi,
          name:'myusertongzhi'
        },
        {
          path:'/user/userluru',
          component:myuserluru,
          name:'myuserluru'
        },
        {
          path:'/user/userxiugai',
          component:myuserxiugai,
          name:'myuserxiugai'
        },
        {
          path:'/user/userbaoxiu',
          component:myuserbaoxiu,
          name:'myuserbaoxiu'
        },
  
        {
          path:'/user/userzhuce',
          component:myuserzhuce,
          name:'myuserzhuce'
        },
        {
          path:'/user/userdenglu',
          component:myuserdenglu,
          name:'myuserdenglu'
        },
        {
          path:'/user/dengchu',
          component:dengchu,
          name:'mydengchu'
        },
      
      ]
    },
     
      {path:'/guan',component:myguan,name:'myguan',
    children:[
      {
        path:'/guan/guantousu',
        component:guantousu,
        name:'guantousu'
      },
      {
        path:'/guan/guanxinwen',
        component:guanxinwen,
        name:'guanxinwen'
      },
  
      {
        path:'/guan/guantongzhi',
        component:guantongzhi,
        name:'guantongzhi'
      },
      {
        path:'/guan/guanxinxi',
        component:guanxinxi,
        name:'guanxinxi'
      },
      {
        path:'/guan/guanbaoxiu',
        component:guanbaoxiu,
        name:'guanbaoxiu'
      },
      {
        path:'/guan/guandenglu',
        component:guandenglu,
        name:'guandenglu'
      },
    ]
    },
      {path:'/ceshi',component:myceshi,name:'myceshi'},
    ]
  })