<template>
  <div id="app">
    <div class="row">
      <dg-button>按钮</dg-button>
      <dg-button type="primary">按钮 </dg-button>
      <dg-button type="success">按钮 </dg-button>
      <dg-button type="info">按钮 </dg-button>
      <dg-button type="waring">按钮 </dg-button>
      <dg-button type="danger">按钮 </dg-button>
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
      <dg-button round>按钮</dg-button>
      <dg-button type="primary" round>按钮 </dg-button>
      <dg-button type="success" round>按钮 </dg-button>
      <dg-button type="info" round>按钮 </dg-button>
      <dg-button type="waring" round>按钮 </dg-button>
      <dg-button type="danger" round>按钮 </dg-button>
    </div>
     <div class="row">
      <dg-button  circle>龙</dg-button>
      <dg-button type="primary"  circle>龙 </dg-button>
      <dg-button type="success"  circle>龙 </dg-button>
      <dg-button type="info"  circle>龙 </dg-button>
      <dg-button type="waring"  circle>龙 </dg-button>
      <dg-button type="danger"  circle>龙 </dg-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

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
