<template>
  <div id="app">
    <div class="row">
      <dg-button @click="fn">按钮</dg-button>
      <dg-button type="primary">按钮 </dg-button>
      <dg-button type="success">按钮 </dg-button>
      <dg-button type="info">按钮 </dg-button>
      <dg-button type="waring">按钮 </dg-button>
      <dg-button type="danger">按钮 </dg-button>
    </div>
        <div class="row">
      <dg-button @click="fn"   disabled>按钮</dg-button>
      <dg-button type="primary"   disabled>按钮 </dg-button>
      <dg-button type="success"   disabled>按钮 </dg-button>
      <dg-button type="info"   disabled>按钮 </dg-button>
      <dg-button type="waring"   disabled>按钮 </dg-button>
      <dg-button type="danger"   disabled>按钮 </dg-button>
    </div>
    <div class="row">
      <dg-button plain>按钮</dg-button>
      <dg-button type="primary" plain>按钮 </dg-button>
      <dg-button type="success" plain>按钮 </dg-button>
      <dg-button type="info" plain>按钮 </dg-button>
      <dg-button type="waring" plain>按钮 </dg-button>
      <dg-button type="danger" plain>按钮 </dg-button>
    </div>
    <div class="row">
      <dg-button round icon="dg-icon-check">按钮</dg-button>
      <dg-button type="primary" round icon="dg-icon-check">按钮 </dg-button>
      <dg-button type="success" round icon="dg-icon-check">按钮 </dg-button>
      <dg-button type="info" round icon="dg-icon-check">按钮 </dg-button>
      <dg-button type="waring" round icon="dg-icon-check">按钮 </dg-button>
      <dg-button type="danger" round icon="dg-icon-check">按钮 </dg-button>
    </div>
    <div class="row">
      <dg-button circle plain>龙</dg-button>
      <dg-button type="primary" circle plain>龙 </dg-button>
      <dg-button type="success" circle plain>龙 </dg-button>
      <dg-button type="info" circle plain>龙 </dg-button>
      <dg-button type="waring" circle plain>龙 </dg-button>
      <dg-button type="danger" circle plain>龙 </dg-button>
    </div>
    <div class="row">
      <dg-button circle plain icon="dg-icon-delete"></dg-button>
      <dg-button type="primary" circle plain icon="dg-icon-delete"> </dg-button>
      <dg-button type="success" circle plain icon="dg-icon-delete"> </dg-button>
      <dg-button type="info" circle plain icon="dg-icon-delete"> </dg-button>
      <dg-button type="waring" circle plain icon="dg-icon-delete"> </dg-button>
      <dg-button type="danger" circle plain icon="dg-icon-delete"> </dg-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  methods: {
    fn () {
      console.log(123)
    }
  }
}
</script>

<style lang="scss"  scoped>
.row {
  margin-bottom: 20px;
  .dg-button {
    margin-right: 20px;
  }
}
</style>
