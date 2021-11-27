<template>
  <div @click="handleClick">
    <i>
      <img :src=src
           :alt=name>
    </i>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    disabled: Boolean,
    name: String
  },
  computed: {
    src() {
      return 'https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/' + this.name + '.svg'
    }
  },
  methods: {
    handleClick(e) {
      if (this.disabled) return
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
</style>
