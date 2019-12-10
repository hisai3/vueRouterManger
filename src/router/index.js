import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
// import module1 from "@/components/module1/module1.router.js";
// import module2 from "@/components/module2/module2.router.js";
let r = require.context('../components', true, /\.router\.js/)
var arr = []
r.keys().forEach(key => {
  arr = arr.concat(r(key).default)
 
  window.console.log(r(key).default,'index.default')
})

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...arr
  ]
})

Vue.use(VueRouter)
