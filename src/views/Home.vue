<template>
  <div id="container">
    <div class="z-50 absolute bg-white bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col justify-between items-center">
      <a id="classification"
         ref="classification"></a>
      <div class="flex flex-row">
        <button @click="onCapture()"
                class="ml-6"> Capture </button>
        <button @click="onConfirm()"
                class="ml-6"> Confirm </button>
        <router-link to="/canvas"
                     class="mx-6">Canvas</router-link>
      </div>
    </div>
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
export default {
  data() {
    return {
      video: '',
      imgData: '',
      canvas: '',
      context: '',
      scale: 1,
      sketch: new Image()
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
    this.canvas.width = Math.floor(1024)
    this.canvas.height = Math.floor(768)
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
</style>