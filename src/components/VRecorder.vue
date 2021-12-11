<template>
  <div class="w-full absolute flex flex-row justify-between items-center px-48">
    <button ref="audio"
            @click="onAudioRecord()"
            class="absolute left-16">
      <img src="https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/audio.svg">
    </button>
    <div ref="play"
         @click="onAudioPlay()"
         class="absolute left-16 hidden">
      <img src='https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/trump.svg'>
    </div>
    <div class="slide-progress-bar">
      <div class="progress-bar"
           id="progress-bar"
           ref="progressBar"></div>
      <!--progress-bar-->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      audio: '',
      interval: 0,
      width: 1,
      progressBar: ''
    }
  },
  //   computed: {
  //     ...mapState(['audio'])
  //   },
  methods: {
    onAudioRecord() {
      let timeLength = 15
      // record this
      let that = this
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream)
        mediaRecorder.start()

        const audioChunks = []
        mediaRecorder.addEventListener('dataavailable', (event) => {
          audioChunks.push(event.data)
        })

        mediaRecorder.addEventListener('stop', () => {
          const audioBlob = new Blob(audioChunks)
          // that.audio = URL.createObjectURL(audioBlob)
          // that.$store.commit('setAudio', URL.createObjectURL(audioBlob))
          let reader = new FileReader()
          reader.readAsDataURL(audioBlob)
          reader.onload = () => {
            that.audio = reader.result
          }
        })

        setTimeout(() => {
          mediaRecorder.stop()
        }, timeLength * 1000) // 15s
      })

      this.progressBarAnimation(timeLength)
      // counting time
    },
    progressBarAnimation(timeLength) {
      this.resetProgressBar()
      this.interval = setInterval(frame, timeLength * 10)
      let that = this
      function frame() {
        if (that.width >= 100) {
          clearInterval(that.interval)
          that.$refs.audio.classList.toggle('hidden')
          that.$refs.play.classList.toggle('hidden')
        } else {
          that.width += 1
          that.progressBar.style.width = that.width + '%'
        }
      }
    },
    resetProgressBar() {
      this.width = 1
      clearInterval(this.interval)
      this.progressBar.style.width = this.width + '%'
    },
    onAudioPlay() {
      this.audio = this.audio.replace('data:;', 'data:audio/wav;')
      const sound = new Audio()
      sound.src = this.audio
      sound.play()
    }
  },
  mounted() {
    this.progressBar = this.$refs.progressBar
  }
}
</script>

<style scoped>
.slide-progress-bar {
  width: 810px;
  background-color: rgba(255, 237, 181, 80);
  transition: width 10s linear;
  display: inline-block;
  vertical-align: middle;
  border-radius: 9999px;
}

.progress-bar {
  height: 20px;
  border-radius: 9999px;
  background-color: #ffc000;
  width: 1%;
  position: relative;
  transition: linear;
}
</style>