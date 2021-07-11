<template>
  <div class="dg-dialog__wrapper">
    <div class="dg-dialog">
      <div class="dg-dialog__header">
        <slot name="title">
          <span class="dg-dialog__title">{{ title }}</span>
        </slot>

        <button class="dg-dialog__headerbtn">
          <i class="dg-icon-close"></i>
        </button>
      </div>
      <div class="dg-dialog__body">
        <span>这是一段信息</span>
      </div>
      <div class="dg-dialog__footer">
        <dg-button>取消</dg-button>
        <dg-button type="primary">确定</dg-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DgDialog',
  props: {
    title: {
      type: String,
      deafult: '提示'
    }
  }
}
</script>

<style lang="scss"  scoped>
.dg-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .dg-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .dg-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .dg-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .dg-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
