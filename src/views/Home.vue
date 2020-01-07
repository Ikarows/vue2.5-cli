<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ message }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import { hitokoto } from '@/api'
export default {
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
    hitokoto().then((res) => {
      this.message = res
    })
  }
}
</script>
