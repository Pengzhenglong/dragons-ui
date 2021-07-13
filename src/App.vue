<template>
  <div id="app">
    <!-- button按钮 -->
    <!-- <div class="row">
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
    </div> -->

    <dg-button type="primary" @click="visible = true">按钮</dg-button>
    <!-- dialog对话框   ，sync是一个语法糖-->
    <dg-dialog width="50%" top="20px" :visible.sync="visible" >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <dg-button @click="visible = false">取消</dg-button>
        <dg-button type="primary" @click="visible = false">确定</dg-button>
      </template>
    </dg-dialog>
    <dg-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </dg-dialog>
    <!-- 1.  :money="money"  @update:money -->
    <!-- <demo  :visible='visible'  :money="money"  @update:money="fn1"></demo> -->
    <!-- <demo :visible.sync="visible"  :money.sync="money"></demo> -->
    <!-- <transition  name="fade">
      <div v-show="visible">我是一个文本</div>
    </transition> -->
  </div>
</template>

<script>
// import demo from './demo/demo.vue'
export default {
  name: 'App',
  components: {
    // demo
  },
  data () {
    return {
      visible: false,
      money: 100
    }
  },
  methods: {
    // fn () {
    //   console.log(123)
    // }
    // 子传父
    close (value) {
      this.visible = value
    },
    fn1 (value) {
      this.money = value
    }
  }
}
</script>

<style lang="scss"  scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: all 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition:all .5s;
}
.row {
  margin-bottom: 20px;
  .dg-button {
    margin-right: 20px;
  }
}
</style>
