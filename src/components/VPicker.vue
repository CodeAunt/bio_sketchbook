<template>
  <div class="flex pr-10">
    <v-popover :disabled="disabledColor"
               offset="16">
      <VIconBtn :disabled="disabledColor"
                title="颜色"
                :color="color"
                name="color"></VIconBtn>
      <template slot="popover">
        <CompactPicker v-model="color"></CompactPicker>
      </template>
    </v-popover>
  </div>
</template>

<script>
import { Compact as CompactPicker } from 'vue-color'
import VIconBtn from '@/components/VIconBtn'
import { mapState } from 'vuex'
export default {
  components: {
    VIconBtn,
    CompactPicker
  },
  data() {
    return {
      color: '#000000'
    }
  },
  computed: {
    ...mapState(['toolName']),
    toolArgs() {
      return this.$store.state[this.toolName + 'Args'] || {}
    },
    disabledColor() {
      return this.toolName === null || this.toolName === 'eraser'
    }
  },
  watch: {
    toolName() {
      if (this.toolArgs.color) {
        this.color = this.toolArgs.color
      }
    },
    color() {
      if (this.toolArgs.color) {
        this.$store.commit('setArgs', {
          toolName: this.toolName,
          color: this.color.hex8
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
