<template>
  <div @click="handleClick">
    <i>
      <img src='https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/next.svg'>
    </i>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['drawSession'])
  },
  methods: {
    handleClick(e) {
      this.$store.commit('setStep')
      if (this.drawSession.step === 6) {
        this.$router.push({ path: '/plant' })
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
</style>