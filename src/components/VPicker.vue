<template>
  <div class="flex flex-row items-center">
    <v-popover :disabled="disabledColor"
               offset="16">
      <VIconBtn :disabled="disabledColor"
                title="颜色"
                :color="color"
                name="color"></VIconBtn>
      <template slot="popover">
        <!-- <SwatchesPicker v-model="color"></SwatchesPicker> -->
        <div class="bg-white pl-3 pt-5">
          <VSwatches v-model="color"
                     :swatches="swatches"
                     row-length="5"
                     inline></VSwatches>
        </div>
      </template>
    </v-popover>
  </div>
</template>

<script>
import { Compact as CompactPicker } from 'vue-color'
import { Swatches as SwatchesPicker } from 'vue-color'
import VIconBtn from '@/components/VIconBtn'
import { mapState } from 'vuex'
import VSwatches from 'vue-swatches'

// Import the styles too, typically in App.vue or main.js
import 'vue-swatches/dist/vue-swatches.css'

export default {
  components: {
    VIconBtn,
    CompactPicker,
    SwatchesPicker,
    VSwatches
  },
  data() {
    return {
      color: '#000000',
      swatches: [
        ['#FF6900', '#FCB900', '#7BDCB5', '#388E3C', '#1B5E20'],
        ['#8ED1FC', '#0693E3', '#EB144C', '#F78DA7', '#9900EF'],
        ['#5D4037', '#A1887F', '#ABB8C3', '#000000']
      ]
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
          // color: this.color.hex8
          color: this.color
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
