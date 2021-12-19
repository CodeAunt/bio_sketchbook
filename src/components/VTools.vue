<template>
  <div class="flex items-center">
    <div style="height:60px;"
         class="pr-10">
      <div :style="{ backgroundColor: pencilArgs.color }"
           class="color w-14 h-14 rounded-full transition duration-300 ease-in-out"></div>
    </div>
    <VPicker class="transform pr-10"></VPicker>
    <v-popover :disabled="true"
               offset="16">
      <VIconBtn title="画笔(P)"
                :active="toolName === 'pencil'"
                @click="setTool('pencil')"
                name="pencil"
                ref="pencil"
                class="transform -translate-y-5 transition duration-300 ease-in-out pr-10"></VIconBtn>
      <template slot="popover">
        <div class="v-size-picker">
          <VueSlider v-model="size"
                     :min="1"></VueSlider>
        </div>
      </template>
    </v-popover>
    <!-- <v-popover :disabled="disabledSize"
               offset="16">
      <VIconBtn title="刷子(B)"
                :active="toolName === 'brush'"
                @click="setTool('brush')"
                name="brush"
                ref="brush"
                class="transform -translate-y-5 transition duration-300 ease-in-out pr-10"></VIconBtn>
      <template slot="popover">
        <div class="v-size-picker">
          <VueSlider v-model="size"
                     :min="1"></VueSlider>
        </div>
      </template>
    </v-popover> -->
    <v-popover :disabled="true"
               offset="16">
      <VIconBtn title="擦除(E)"
                :active="toolName === 'eraser'"
                @click="setTool('eraser')"
                name="eraser"
                ref="eraser"
                class="transform transition duration-300 ease-in-out"></VIconBtn>
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
import VPicker from '@/components/VPicker'
import 'vue-slider-component/theme/material.css'
import { mapState } from 'vuex'

export default {
  components: {
    VIconBtn,
    VueSlider,
    VPicker
  },
  data() {
    return {
      size: 1
    }
  },
  computed: {
    ...mapState(['pencilArgs']),
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
        // this.$refs['brush'].$el.classList.remove('translate-y-2')
        // this.$refs['brush'].$el.classList.add('-translate-y-5')
        this.$refs['pencil'].$el.classList.remove('-translate-y-5')
        this.$refs['pencil'].$el.classList.add('translate-y-2')
        this.$refs['eraser'].$el.classList.remove('scale-110')
      } else if (toolName === 'brush') {
        this.$refs['pencil'].$el.classList.remove('translate-y-2')
        this.$refs['pencil'].$el.classList.add('-translate-y-5')
        // this.$refs['brush'].$el.classList.remove('-translate-y-5')
        // this.$refs['brush'].$el.classList.add('translate-y-2')
        this.$refs['eraser'].$el.classList.remove('scale-110')
      } else if (toolName === 'eraser') {
        // this.$refs['brush'].$el.classList.remove('translate-y-2')
        // this.$refs['brush'].$el.classList.add('-translate-y-5')
        this.$refs['pencil'].$el.classList.remove('translate-y-2')
        this.$refs['pencil'].$el.classList.add('-translate-y-5')
        this.$refs['eraser'].$el.classList.add('scale-110')
      }

      this.$store.commit('setTool', toolName)
    }
  },
  mounted() {
    // this.$refs['brush'].$el.classList.remove('translate-y-2')
    // this.$refs['brush'].$el.classList.add('-translate-y-5')
    this.$refs['pencil'].$el.classList.remove('-translate-y-5')
    this.$refs['pencil'].$el.classList.add('translate-y-2')
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

.color {
  border-width: 6px;
  border-color: #f1f1f1;
}
</style>
