<template>
  <div id="container">
    <div class="z-50 absolute bottom-12 left-1/2 transform -translate-x-1/2">
      <a id="classification"
         ref="classification"
         class="text"></a>
    </div>
    <div ref="toCanvas"
         class="z-50 absolute bottom-6 right-9 hidden">
      <router-link to="/canvas"
                   class="mx-6">
        <img src='https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/next.svg'>
      </router-link>
    </div>
    <div class="z-50 absolute top-12 left-1/2 transform -translate-x-1/2">
      <p class="text">按下快门，和我一起写生吧！</p>
    </div>
    <VCapture @click="onCapture()"
              class="z-50 absolute top-1/2 right-5 transform -translate-y-1/2"></VCapture>
    <div class="z-40 absolute bottom-0">
      <img src="https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/png/cover.png">
    </div>
    <div @click="clear()"
         ref="clear"
         class="z-50 absolute w-80 h-80 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden">
    </div>
    <div ref="canvasWrapper"
         class="video z-0 overflow-hidden hidden absolute bottom-0">
      <canvas ref="canvas"
              id="canvas"></canvas>
    </div>
    <div class="video z-0 overflow-hidden absolute bottom-0">
      <video width="1194"
             height="760"
             ref="video"
             id="video"
             playsinline
             autoplay></video>
    </div>
  </div>
</template>

<script>
import VCapture from '@/components/VCapture'
import plantData from '@/utils/plant'
import { mapState } from 'vuex'

export default {
  components: {
    VCapture
  },
  data() {
    return {
      video: '', // video element
      imgData: '', // captured image
      canvas: '', // canvas to show captured image
      context: '', // context object
      scale: 1, // scale index
      sketch: new Image(), // image object
      windowWidth: 1194, // Safari iPad pro
      windowHeight: 897 // Safari iPad pro without top search tab
      // windowWidth: document.documentElement.clientWidth,
      // windowHeight: document.documentElement.clientHeight
    }
  },
  computed: {
    ...mapState(['capture', 'plant'])
  },
  methods: {
    errorHandler(error) {
      console.log('navigator.getUserMedia error: ', error)
    },
    gotStream(stream) {
      window.stream = stream // make stream available to console
      this.video.srcObject = stream
      // Refresh button list in case labels have become available
      return navigator.mediaDevices.enumerateDevices()
    },
    start() {
      if (window.stream) {
        window.stream.getTracks().forEach(function (track) {
          track.stop()
        })
      }
      let constraints = {
        // toggle back camera
        video: {
          facingMode: 'environment'
        }
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(this.gotStream)
        .catch(this.errorHandler)
    },
    onCapture() {
      document.getElementById('classification').innerHTML = ''
      this.$refs.canvasWrapper.classList.toggle('hidden')
      this.$refs.clear.classList.toggle('hidden')
      this.video.classList.toggle('hidden')
      this.context.drawImage(
        this.video,
        0,
        0,
        this.canvas.width / this.scale,
        this.canvas.height / this.scale
      ) // 500 375
      this.imgData = this.canvas.toDataURL('image/jpeg')
      this.$store.commit('setCapture', this.imgData)
      this.onConfirm()
    },
    onConfirm() {
      let xhr = new XMLHttpRequest()
      xhr.open('POST', 'https://ztodesign.cn:5000/photo2sketch', true)
      xhr.setRequestHeader('cache-control', 'no-cache')
      let form = new FormData()
      form.append('image', this.imgData)
      let that = this
      xhr.onreadystatechange = function () {
        // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Request finished. Do processing here.
          let result = JSON.parse(xhr.responseText)
          // console.log(result)
          that.$refs.toCanvas.classList.toggle('hidden')
          document.getElementById('classification').innerHTML =
            result.data.class
          if (result) {
            if (result.data.class === '非植物') {
              // reset to capture
              // that.clear()
              that.$store.commit('setImage', result.data.resImage)
              that.$store.commit('setPlant', '杜鹃花')
              for (let i = 0; i < plantData.length; i++) {
                if (that.plant.name === plantData[i].name) {
                  that.$store.commit('setPlantData', plantData[i])
                }
              }
            } else {
              // set the current plant and get relevent data
              that.$store.commit('setImage', result.data.resImage)
              that.$store.commit('setPlant', result.data.class)
              for (let i = 0; i < plantData.length; i++) {
                if (that.plant.name === plantData[i].name) {
                  // console.log(plantData[i])
                  that.$store.commit('setPlantData', plantData[i])
                }
              }
            }
          }
        }
      }
      xhr.send(form)
      // alert('sent!')
    },
    clear() {
      this.$refs.canvasWrapper.classList.toggle('hidden')
      this.$refs.toCanvas.classList.toggle('hidden')
      this.video.classList.toggle('hidden')
      this.$refs.clear.classList.toggle('hidden')
    }
  },
  mounted() {
    document.body.addEventListener(
      'touchmove',
      function (e) {
        e.preventDefault()
      },
      { passive: false }
    )
    this.video = this.$refs.video
    this.canvas = this.$refs.canvas
    // use this to ensure capture high-resolution image
    this.context = this.canvas.getContext('2d')
    this.scale = window.devicePixelRatio //2
    this.canvas.width = Math.floor(this.windowWidth)
    this.canvas.height = Math.floor(this.windowHeight)
    this.context.scale(this.scale, this.scale)
    let that = this
    this.sketch.onload = function () {
      that.context.drawImage(
        this,
        0,
        0,
        that.canvas.width / that.scale,
        that.canvas.height / that.scale
      )
    }
    navigator.mediaDevices.enumerateDevices().catch(this.errorHandler)
    this.start()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
@font-face {
  font-family: 'FZSJ-LXQWTJW';
  src: url('https://cdn.glitch.me/afbd793d-0eec-495f-95c4-cd3c5b188240%2FFZSJ-LXQWTJW.TTF?v=1638340978154');
}

.text {
  font-weight: 600;
  font-size: 2.25rem /* 30px */;
  line-height: 2.5rem /* 36px */;
  text-align: center;
  color: white;
  font-family: 'FZSJ-LXQWTJW', cursive;
}

.video {
  width: 1194px;
  height: 760px;
}
</style>