<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ message }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import api from '@/api'
import { Toast } from 'vant'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.loading = false
  },
  created () {
    Toast('提示内容')
    api.hitokoto().then((res) => {
      this.message = res
    })
  }
}
</script>
