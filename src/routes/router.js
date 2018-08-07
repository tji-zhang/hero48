import VueRouter from 'vue-router';
import Vue from 'vue';

import HeroesList from '../views/heroes/list.vue'
import EquipsList from '../views/equips/list.vue'
import WeaponsList from '../views/weapons/list.vue'
// 导入添加英雄的组件
import HeroesAdd from '../views/heroes/Add.vue';
import HeroesEdit from '../views/heroes/Edit.vue';


Vue.use(VueRouter);

var router = new VueRouter({
    // 配置激活的类样式
    linkActiveClass: 'active',
    routes:[
        { path: '/', redirect: '/heroes' },
        { name:'heroes', path:'/heroes', component:HeroesList},
        { name: 'heroadd', path: '/heroes/add', component: HeroesAdd },
        { name: 'heroedit', path: '/heroes/:id', component: HeroesEdit, props: true },
        { name:'equips', path:'/equips', component:EquipsList},
        { name:'weapons', path:'/weapons', component:WeaponsList}
    ]
});


export default router;