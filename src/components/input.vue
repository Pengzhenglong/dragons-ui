<template>
  <div class="dg-input "  :class="{'dg-input--suffix':showSuffix}">
    <input
      class="dg-input__inner"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :name="name"
      :class="{ 'is-disabled': disabled }"
      :value="value"
      @input="handleInput"
    />
<span class="dg-input__suffix"  v-if="showSuffix">
  <i class="dg-input__icon dg-icon-circle-close" v-if="clearable" @click="clear"></i>
  <i class="dg-input__icon dg-icon-view" v-if="showPassword"></i>
</span>
  </div>
</template>

<script>
export default {
  name: 'DgInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // console.log('123')
      this.$emit('input', '')
    }
  }

}
</script>

<style  lang="scss"  scoped>
.dg-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .dg-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.dg-input--suffix {
  .dg-input__inner {
    padding-right: 30px;
  }
  .dg-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
