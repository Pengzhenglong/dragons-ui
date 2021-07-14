<template>
  <div id="app">
   <dg-input   placeholder="请输入用户名"  ></dg-input>
    <dg-input   placeholder="请输入用户名" type="password"   disabled="disabled" name="name" ></dg-input>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }

}
</script>

<style lang="scss">
#app{
  .dg-input{
  width:180px;
}
}

</style>
