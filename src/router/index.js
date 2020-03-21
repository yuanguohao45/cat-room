import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件

import login from "../page/login.vue";
import home from "../page/home.vue";
import notFound from "../page/404.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: "/login",
    hidden: true
  },
  {
    path: "/login",
    component: login,
    name: "",
    hidden: true
  },
  {
    path: "/404",
    component: notFound,
    name: "",
    hidden: true
  },
  {
    path: "/wareMgt",
    name: "商品管理",
    component: home,
    iconCls: "el-icon-location",
    redirect: "/wareMgt/sub1",
    leaf: true, //只有一个节点
    children: [
      {
        path: "/wareMgt/sub1",
        component: () => import("@/page/wareMgt/sub1"),
        name: "商品管理",
        alwaysShow: true
      }
    ]
  },

  {
    path: "/orderMgt",
    component: home,
    name: "订单管理",
    iconCls: "el-icon-menu",
    redirect: "/orderMgt/sub1",
    leaf: true, //只有一个节点
    children: [
      {
        path: "/orderMgt/sub1",
        component: () => import("@/page/orderMgt/sub1"),
        name: "订单管理",
        alwaysShow: true
      }
    ]
  },
  {
    path: "/catRoomMgt",
    component: home,
    name: "猫舍管理",
    iconCls: "el-icon-document",
    redirect: "/catRoomMgt/sub1",
    leaf: true, //只有一个节点
    children: [
      {
        path: "/catRoomMgt/sub1",
        component: () => import("@/page/catRoomMgt/sub1"),
        name: "猫舍管理",
        alwaysShow: true
      }
    ]
  },
  {
    path: "/userAndWalletMgt",
    component: home,
    name: "用户&钱包管理",
    iconCls: "el-icon-setting",
    redirect: "/userAndWalletMgt/sub1",
    leaf: true, //只有一个节点
    children: [
      {
        path: "/userAndWalletMgt/sub1",
        component: () => import("@/page/userAndWalletMgt/sub1"),
        name: "用户&钱包管理",
        alwaysShow: true
      }
    ]
  },
  {
    path: "/integralSet",
    component: home,
    name: "积分设置",
    iconCls: "el-icon-message",
    leaf: true, //只有一个节点
    redirect: "/integralSet/sub1",
    children: [
      {
        path: "/integralSet/sub1",
        component: () => import("@/page/integralSet/sub1"),
        name: "积分设置",
        alwaysShow: true
      }
    ]
  },
  {
    path: "/noticeMgt",
    component: home,
    name: "通知管理",
    iconCls: "el-icon-message",
    leaf: true, //只有一个节点
    redirect: "/noticeMgt/sub1",
    children: [
      {
        path: "/noticeMgt/sub1",
        component: () => import("@/page/noticeMgt/sub1"),
        name: "通知管理",
        alwaysShow: true
      }
    ]
  }
];
var router = new VueRouter({
  routes
});
export default router;
