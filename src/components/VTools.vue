<template>
  <div class="flex items-center gap-x-10">
    <v-popover :disabled="disabledSize"
               offset="6">
      <VIconBtn title="画笔(P)"
                :active="toolName === 'pencil'"
                @click="setTool('pencil')"
                name="pencil"
                ref="pencil"
                class="transform -translate-y-5 transition duration-300 ease-in-out"></VIconBtn>
      <template slot="popover">
        <div class="v-size-picker">
          <VueSlider v-model="size"
                     :min="1"></VueSlider>
        </div>
      </template>
    </v-popover>
    <v-popover :disabled="disabledSize"
               offset="6">
      <VIconBtn title="刷子(B)"
                :active="toolName === 'brush'"
                @click="setTool('brush')"
                name="brush"
                ref="brush"
                class="transform -translate-y-5 transition duration-300 ease-in-out"></VIconBtn>
      <template slot="popover">
        <div class="v-size-picker">
          <VueSlider v-model="size"
                     :min="1"></VueSlider>
        </div>
      </template>
    </v-popover>
    <v-popover :disabled="disabledSize"
               offset="16">
      <VIconBtn title="擦除(E)"
                :active="toolName === 'eraser'"
                @click="setTool('eraser')"
                name="eraser"></VIconBtn>
      <template slot="popover">
        <div class="v-size-picker">
          <VueSlider v-model="size"
                     :min="1"></VueSlider>
        </div>
      </template>
    </v-popover>
  </div>
</template>

<script>
import VIconBtn from '@/components/VIconBtn'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'

export default {
  components: {
    VIconBtn,
    VueSlider
  },
  data() {
    return {
      size: 1
    }
  },
  computed: {
    toolName() {
      return this.$store.state.toolName
    },
    toolArgs() {
      return this.$store.state[this.toolName + 'Args'] || {}
    },
    disabledSize() {
      return this.toolName === null
    }
  },
  watch: {
    toolName() {
      if (this.toolArgs.size) {
        this.size = this.toolArgs.size
      }
    },
    size() {
      if (this.toolArgs.size) {
        this.$store.commit('setArgs', {
          toolName: this.toolName,
          size: this.size
        })
      }
    }
  },
  methods: {
    setTool(toolName) {
      if (toolName === 'pencil') {
        this.$refs['brush'].$el.classList.remove('-translate-y-2')
        this.$refs['brush'].$el.classList.add('-translate-y-5')
        this.$refs['pencil'].$el.classList.remove('-translate-y-5')
        this.$refs['pencil'].$el.classList.add('-translate-y-2')
      } else if (toolName === 'brush') {
        this.$refs['pencil'].$el.classList.remove('-translate-y-2')
        this.$refs['pencil'].$el.classList.add('-translate-y-5')
        this.$refs['brush'].$el.classList.remove('-translate-y-5')
        this.$refs['brush'].$el.classList.add('-translate-y-2')
      } else if (toolName === 'eraser') {
        this.$refs['brush'].$el.classList.remove('-translate-y-2')
        this.$refs['brush'].$el.classList.add('-translate-y-5')
        this.$refs['pencil'].$el.classList.remove('-translate-y-2')
        this.$refs['pencil'].$el.classList.add('-translate-y-5')
      }

      this.$store.commit('setTool', toolName)
    }
  },
  mounted() {
    this.$refs['brush'].$el.classList.remove('-translate-y-2')
    this.$refs['brush'].$el.classList.add('-translate-y-5')
    this.$refs['pencil'].$el.classList.remove('-translate-y-5')
    this.$refs['pencil'].$el.classList.add('-translate-y-2')
  }
}
</script>

<style scoped>
.v-size-picker {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  background-color: #fff;
  padding: 12px;
  box-sizing: border-box;
  width: 110px;
}
</style>
