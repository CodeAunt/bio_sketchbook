<template>
  <div class="w-full h-full flex flex-col justify-between items-center overflow-hidden">
    <div class="absolute flex flex-row justify-between items-center bg-white rounded-b-2xl">
      <VHeader></VHeader>
    </div>
    <canvas :style="cursor + canvasBg"
            ref="canvas"
            id="canvas"
            class="w-full h-screen"
            resize></canvas>
    <VDialogue class="absolute top-1/2 left-0 transform -translate-y-2/3 transition duration-500 ease-in-out"
               ref="sidebar"
               @click="toggleSideBar"
               @toggleMagnifier="toggleMagnifier"></VDialogue>
    <VContent class="absolute bottom-12"></VContent>
    <VNext class="absolute bottom-12 right-12 transition duration-500 ease-in-out transform hover:-translate-y-3"></VNext>
    <VTrump class="absolute bottom-10 left-12 transition duration-500 ease-in-out transform hover:-translate-y-3"></VTrump>
    <VMagnifier ref="magnifier"
                @click="toggleSideBar(); toggleMagnifier();"
                class="absolute top-8 left-16 border-4 border-yellow-400 rounded-full transition duration-500 ease-in-out transform -translate-y-64"></VMagnifier>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VDialogue from '@/components/VDialogue'
import VContent from '@/components/VContent'
import VNext from '@/components/VNext'
import VTrump from '@/components/VTrump'
import VMagnifier from '@/components/VMagnifier'
import setup from '@/utils/setup'
export default {
  components: {
    VHeader,
    VDialogue,
    VContent,
    VNext,
    VTrump,
    VMagnifier
  },
  data() {
    return {
      isInit: false,
      vdrawArgs: {
        size: {
          width: 0,
          height: 0
        },
        zoom: 0
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$refs['sidebar'].$el.classList.toggle('-translate-x-44')
    },
    toggleMagnifier() {
      this.$refs['magnifier'].$el.classList.toggle('-translate-y-64')
    }
  },
  computed: {
    cursor() {
      const tool = this.$store.state.toolName
      if (tool === null || tool === 'brush') return `cursor: auto;`
      if (tool !== 'select') return `cursor: none;`
      return `cursor: auto;`
    },
    canvasBg() {
      return `background-color: ${this.$store.state.canvasArgs.bgColor}fa;`
    },
    canvas() {
      return this.$refs.canvas
    }
  },
  mounted() {
    setup(this)
    this.$store.commit('setTool', 'pencil')
  },
  filters: {
    toFixed(value) {
      return value.toFixed(2)
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #f9f9f9;
  background-image: url('https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/png/1.png'),
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNScgaGVpZ2h0PScxNSc+CiAgPHJlY3Qgd2lkdGg9JzUwJyBoZWlnaHQ9JzUwJyBmaWxsPSIjRjlGOUY5IiAvPgogIDxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIwLjgiIGZpbGw9IiNDQUNBQ0IiLz4KPC9zdmc+');
  background-repeat: no-repeat, repeat;
  background-position: center, top;
}
</style>
