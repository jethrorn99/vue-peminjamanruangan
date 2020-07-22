import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app'
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip=false

firebase.initializeApp({
    apiKey: "AIzaSyDIjwMazTs87DxefkGu4PU7Kpa2Rlxpx54",
    authDomain: "vue-peminjamanlab.firebaseapp.com",
    databaseURL: "https://vue-peminjamanlab.firebaseio.com",
    projectId: "vue-peminjamanlab",
    storageBucket: "vue-peminjamanlab.appspot.com",
    messagingSenderId: "855356191598",
    appId: "1:855356191598:web:df25a04831259f85ac077f",
    measurementId: "G-L7Z7ZZ7K29"
});

export const db=firebase.firestore();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
