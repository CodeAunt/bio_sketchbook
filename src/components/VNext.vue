<template>
  <div @click="handleClick">
    <i class="transition duration-500 ease-in-out transform hover:-translate-y-3">
      <img src='https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/next.svg'>
    </i>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$store.commit('setStep')
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
</style>