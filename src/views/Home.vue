<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{message}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import api from '../api'
export default {
  name: 'home',
  data() {
    return {
      message: '',
    }
  },
  components: {
    HelloWorld,
  },
  created() {
    api.hitokoto().then(res => {
      this.message = res;
    });
  },
};
</script>
