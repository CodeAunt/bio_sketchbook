<template>
  <div @click="handleClick">
    <i>
      <img src='https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/next.svg'>
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