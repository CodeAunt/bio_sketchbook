<template>
  <div @click="handleClick">
    <i>
      <img src='/assets/svg/next.svg'>
    </i>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>
</style>