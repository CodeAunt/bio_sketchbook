<template>
  <div id="camera"
       @click="handleClick"
       class="w-72 h-72 overflow-hidden">
    <video ref="video"
           id="video"
           playsinline
           autoplay
           class="video absolute right-0 top-0 object-cover"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoElement: ''
    }
  },
  methods: {
    errorHandler(error) {
      console.log('navigator.getUserMedia error: ', error)
    },
    gotStream(stream) {
      window.stream = stream // make stream available to console
      this.videoElement.srcObject = stream
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
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  mounted() {
    this.videoElement = this.$refs.video
    navigator.mediaDevices.enumerateDevices().catch(this.errorHandler)
    this.start()
  }
}
</script>

<style scoped>
.video {
  width: 48rem;
  height: 28rem;
}
</style>
