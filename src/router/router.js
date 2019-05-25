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
import myuserjiaofei from'./../components/userjiaofei';
import myuseryijiaofei from'./../components/useryijiaofei';
import userdef from'./../components/userdef'

import guantousu from'./../components/guantousu';
import guanxinwen from'./../components/guanxinwen';
import guantongzhi from'./../components/guantongzhi';
import guanxinxi from'./../components/guanxinxi';
import guanbaoxiu from'./../components/guanbaoxiu';
import guandenglu from'./../components/guandenglu';
import guanjiaofei from'./../components/guanjiaofei';
import guanchewei from'./../components/guanchewei';
import guanzhuce from'./../components/guanzhuce';
import guanluru from'./../components/guanluru';
import guanluruchenggong from'./../components/guanluruchenggong';
import guandef from'./../components/guandef'


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
          path:'/user/userdef',
          component:userdef,
          name:'userdef'
        },
        {
          path:'/user/dengchu',
          component:dengchu,
          name:'mydengchu'
        },
        {
          path:'/user/jiaofei',
          component:myuserjiaofei,
          name:'myjiaofei'
        },
        {
          path:'/user/yijiaofei',
          component:myuseryijiaofei,
          name:'myyijiaofei'
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
        path:'/guan/guanluruchenggong',
        component:guanluruchenggong,
        name:'guanluruchenggong'
      },
      {
        path:'/guan/guandef',
        component:guandef,
        name:'guandef'
      },
      {
        path:'/guan/guanzhuce',
        component:guanzhuce,
        name:'guanzhuce'
      },
      {
        path:'/guan/guanluru',
        component:guanluru,
        name:'guanluru'
      },
      {
        path:'/guan/guanjiaofei',
        component:guanjiaofei,
        name:'guanjiaofei'
      },
      {
        path:'/guan/guanchewei',
        component:guanchewei,
        name:'guanchewei'
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