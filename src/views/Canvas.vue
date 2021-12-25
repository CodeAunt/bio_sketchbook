<template>
  <div class="canvas w-full h-full flex flex-col justify-between items-center overflow-hidden"
       :class="{ default: isDefault, image: !isDefault }"
       :style="{ backgroundImage: getBg }">
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
    <VContent v-if="drawSession.step < 4"
              class="absolute bottom-11"></VContent>
    <VRecorder v-if="drawSession.step === 4"
               class="absolute bottom-16"></VRecorder>
    <VNext class="absolute bottom-12 right-12"
           @click="exportSvg"></VNext>
    <VTrump v-if="drawSession.step < 4"
            class="absolute bottom-11 left-16"></VTrump>
    <VMagnifier ref="magnifier"
                @click="toggleMagnifier(); toggleSideBar();"
                class="absolute top-8 left-20 border-8 border-yellow-400 rounded-full transition duration-500 ease-in-out transform -translate-y-80"></VMagnifier>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VDialogue from '@/components/VDialogue'
import VContent from '@/components/VContent'
import VNext from '@/components/VNext'
import VTrump from '@/components/VTrump'
import VMagnifier from '@/components/VMagnifier'
import VRecorder from '@/components/VRecorder'
import setup from '@/utils/setup'
import potrace from '@/utils/potrace'
import { mapState } from 'vuex'
import { clearProject, createLayer } from '@/utils/shared'

export default {
  components: {
    VHeader,
    VDialogue,
    VContent,
    VNext,
    VTrump,
    VMagnifier,
    VRecorder
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
      },
      svg: '',
      Potrace: potrace()
    }
  },
  methods: {
    toggleSideBar() {
      this.$refs['sidebar'].$el.classList.toggle('-translate-x-44')
      let sidebarClassList = Array.from(this.$refs['sidebar'].$el.classList)
      let magnifierClassList = Array.from(this.$refs['sidebar'].$el.classList)
      if (
        sidebarClassList.indexOf('-translate-x-44') === -1 &&
        magnifierClassList.indexOf('-translate-y-80') === -1
      ) {
        this.$refs['magnifier'].$el.classList.add('-translate-y-80')
      }
    },
    toggleMagnifier() {
      this.$refs['magnifier'].$el.classList.toggle('-translate-y-80')
    },
    handleFiles() {
      this.Potrace.loadImageFromUrl(this.image)
      let that = this
      this.Potrace.process(function () {
        // console.log(that.Potrace.getSVG(1))
        // Create an HTML element from decoded SVG
        let wrapper = document.createElement('div')
        wrapper.innerHTML = that.Potrace.getSVG(1)
        let newSvg = wrapper.firstChild
        let paths = newSvg.getElementsByTagName('path')
        let changeSvg = [].forEach.call(paths, function (path) {
          path.setAttribute('fill', '#D3D3D3')
          // path.setAttribute('stroke', 'black')
          // path.setAttribute('stroke-width', '4')
          // path.setAttribute('stroke-dasharray', '10,10')
        })
        const encodedData = btoa(new XMLSerializer().serializeToString(newSvg))
        that.svg = 'data:image/svg+xml;base64,' + encodedData
        that.$store.commit('setImage', that.svg)
        // console.log('data:image/svg+xml;base64,' + encodedData)
      })
    },
    exportSvg() {
      if (this.drawSession.step === 6) {
        console.log('exportSvg')
        let newSvg = paper.project.exportSVG()
        let encodedData = btoa(new XMLSerializer().serializeToString(newSvg))
        let url = 'data:image/svg+xml;base64,' + encodedData
        this.$store.commit('setDrawing', url)
      }
    }
  },
  computed: {
    ...mapState(['image', 'drawSession', 'plant']),
    isDefault() {
      if (this.image === '') {
        return true
      } else {
        return false
      }
    },
    getBg() {
      const defaultBg =
        "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNScgaGVpZ2h0PScxNSc+CiAgPHJlY3Qgd2lkdGg9JzUwJyBoZWlnaHQ9JzUwJyBmaWxsPSIjRjlGOUY5IiAvPgogIDxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIwLjgiIGZpbGw9IiNDQUNBQ0IiLz4KPC9zdmc+')"
      return `url(${this.svg}), ${defaultBg}`
    },
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
    if (this.image !== '') {
      this.handleFiles()
    }

    setup(this)
    clearProject()
    createLayer()
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
.canvas {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #f9f9f9;
}

.default {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNScgaGVpZ2h0PScxNSc+CiAgPHJlY3Qgd2lkdGg9JzUwJyBoZWlnaHQ9JzUwJyBmaWxsPSIjRjlGOUY5IiAvPgogIDxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIwLjgiIGZpbGw9IiNDQUNBQ0IiLz4KPC9zdmc+');
  background-repeat: repeat;
  background-position: top;
}

.image {
  background-repeat: no-repeat, repeat;
  background-position: top, top;
  background-size: 80%, auto;
}
</style>