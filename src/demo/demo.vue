<template>
  <div>sync--{{ money }}

      <button @click="fn">修改</button>
  </div>

</template>

<script>
export default {
  name: 'demo',
  props: {
    visible: {
      type: Boolean,
      default: false
    },

    money: null
  },
  methods: {
    fn () {
      // this.money = 200
      this.$emit('update:money', 200)
      this.$emit('update:visible', true)
    }
  }
}
</script>

<style>
</style>
