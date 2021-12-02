<template>
  <div @click="handleClick">
    <i class="transition duration-500 ease-in-out transform hover:-translate-y-3">
      <img src='https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/trump.svg'>
    </i>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import speak from '@/utils/voice'

export default {
  computed: {
    ...mapState(['drawSession'])
  },
  methods: {
    handleClick(e) {
      speak(this.drawSession.description)
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
</style>