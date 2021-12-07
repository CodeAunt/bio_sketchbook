<template>
  <div class="content-wrapper filter drop-shadow-md">
    <p class="content"><span>{{ content }}</span></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['drawSession', 'plant']),
    content() {
      if (this.plant.data !== {}) {
        if (this.drawSession.step === 0) {
          return this.plant.data.draw[0]
        } else if (this.drawSession.step === 1) {
          return this.plant.data.draw[0]
        } else if (this.drawSession.step === 2) {
          return this.plant.data.draw[1]
        } else if (this.drawSession.step === 3) {
          return this.plant.data.draw[2]
        }
      } else {
        return ''
      }
      // this.$store.commit('setDescription', s)
      // console.log(this.drawSession.description)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
@font-face {
  font-family: 'FZSJ-LXQWTJW';
  src: url('https://cdn.glitch.me/afbd793d-0eec-495f-95c4-cd3c5b188240%2FFZSJ-LXQWTJW.TTF?v=1638340978154');
}

.content-wrapper {
  height: 4rem /* 64px */;
  max-width: 640px;
  border-radius: 1rem /* 16px */;
  background-color: white;
  box-shadow: 0px 8px 0px #ffc000;
}

.content {
  font-weight: 600;
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffc000;
  padding: 10px 16px 16px 16px;
  font-family: 'FZSJ-LXQWTJW', cursive;
}
</style>