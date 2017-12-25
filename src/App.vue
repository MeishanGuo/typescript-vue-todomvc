<template>
  <div>
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <button @click="handelHello">Say Hello</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class App extends Vue {
    // 初始化数据
    msg: string = 'hello ts'
    // 方法
    handelHello () {
      this.msg = 'Say hello to ts!'
    }
  }
</script>
