import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());

 // vue 3

 import { createApp } from 'vue';
 import hola from './hola.vue';
 import sch from './schedule.vue';
 const app = createApp({});

 app.component('hii', hola);
 app.component('sch', sch);
 app.mount("#app");
 window.Vue = app;