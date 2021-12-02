<template>
  <div class="content-wrapper filter drop-shadow-md">
    <p class="content"><span>{{ content }}</span></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['drawSession']),
    content() {
      let s = ''
      if (this.drawSession.step === 0) {
        s =
          '我是杜鹃花，一般在春季开花，每簇花2到6朵，花冠漏斗形。叶革质，常集生枝端，卵形、椭圆状卵形或倒卵形或倒卵形至倒披针形。'
      } else if (this.drawSession.step === 1) {
        s =
          '我是杜鹃花，一般在春季开花，每簇花2到6朵，花冠漏斗形。叶革质，常集生枝端，卵形、椭圆状卵形或倒卵形或倒卵形至倒披针形。'
      } else if (this.drawSession.step === 2) {
        s =
          '我有红、淡红、杏红、雪青、白色等不同颜色的品种，花色繁茂艳丽。我的花冠上往往会有一些斑点。我的分枝多而纤细，密被亮棕褐色扁平糙伏毛。'
      } else if (this.drawSession.step === 3) {
        s =
          '我主要生活在亚洲，常出现在山地疏灌丛或松林下，周围会有很多绿叶，也会有一些小昆虫会出现在我的身边。'
      }
      this.$store.commit('setDescription', s)
      // console.log(this.drawSession.description)
      return s
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