<template>
  <div id="app">
    <dg-input placeholder="请输入用户名" v-model="username"></dg-input>
    <!-- v-model相当于一个语法糖 -->
    <!-- <input type="text" v-model="username"> -->
        <!-- <input type="text" :value="username"  @input="username=$event.target.value"> -->
    <!-- <dg-input placeholder="请输入用户名" ></dg-input>
    <dg-input
      placeholder="请输入用户名"
      type="password"
      disabled="disabled"
      name="name"
    ></dg-input> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      username: 'sss'
    }
  }
}
</script>

<style lang="scss">
#app {
  .dg-input {
    width: 180px;
  }
}
</style>
