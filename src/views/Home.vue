<template>
  <div id="container">
    <div class="z-50 absolute bg-white bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col justify-between items-center">
      <a id="classification"
         ref="classification"></a>
      <div class="flex flex-row">
        <button @click="onConfirm()"
                class="ml-6"> Confirm </button>
        <router-link to="/canvas"
                     class="mx-6">Canvas</router-link>
      </div>
    </div>
    <div class="z-50 absolute top-12 left-1/2 transform -translate-x-1/2">
      <p class="text">按下快门，和我一起写生吧！</p>
    </div>
    <VCapture @click="onCapture()"
              class="z-50 absolute top-1/2 right-5"></VCapture>
    <div class="absolute bottom-0"><img src="https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/png/cover.png"
           alt=""></div>
    <canvas ref="canvas"
            id="canvas"
            class="hidden"></canvas>
    <video ref="video"
           id="video"
           class="w-full z-0"
           playsinline
           autoplay></video>
  </div>
</template>

<script>
import VCapture from '@/components/VCapture'

export default {
  components: {
    VCapture
  },
  data() {
    return {
      video: '',
      imgData: '',
      canvas: '',
      context: '',
      scale: 1,
      sketch: new Image(),
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight
    }
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
      this.canvas.classList.toggle('hidden')
      this.video.classList.toggle('hidden')
      this.context.drawImage(
        this.video,
        0,
        0,
        this.canvas.width / this.scale,
        this.canvas.height / this.scale
      ) // 500 375
      this.imgData = this.canvas.toDataURL('image/jpeg')
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
          if (result) {
            that.$store.commit('setImage', result.data.resImage)
            // that.sketch.src = result.data.resImage // draw to sketch content
            // document.getElementById('classification').innerHTML =
            //   result.data.class
            // // document.getElementById('classification').innerText = result.data.class;
          }
        }
      }
      xhr.send(form)
      // alert('sent!')
    }
  },
  mounted() {
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
</style>