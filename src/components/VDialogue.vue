<template>
  <div class="dialogue-wrapper flex flex-row bg-white rounded-r-2xl"
       ref="test">
    <img src="https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/line.svg"
         class="pl-6">
    <div class="flex flex-col justify-between items-center"
         @click="handleClick">
      <div class="pt-6">
        <p class="dialogue"><span>{{ content }}</span></p>
      </div>
      <img src="https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/len.svg"
           class="m-12"
           @click="$emit('toggleMagnifier')">
    </div>
  </div>
</template>

<script>
import speak from '@/utils/voice'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['drawSession']),
    content() {
      if (this.drawSession.step === 0) {
        return '你好呀，小朋友! 我已经帮你绘制了我的轮廓，点击下一步让我们开始写生吧！'
      } else if (this.drawSession.step === 1) {
        return '小朋友! 你可以通过观察补充我的样子吗？比如我的花瓣，我的叶子等等。'
      } else if (this.drawSession.step === 2) {
        return '小朋友! 你可以给我涂上颜色和画出纹理吗？如果周围安全的话，试着摸摸看！'
      } else if (this.drawSession.step === 3) {
        return '小朋友! 周围环境有没有其他植物或者小昆虫？你可以将它们补充到画面中吗？'
      } else if (this.drawSession.step === 4) {
        return '小朋友! 发挥想象力，最后来丰富一下你的画面吧！'
      } else {
        return ''
      }
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  watch: {
    content(val) {
      speak(val)
    }
  },
  mounted() {
    this.$refs.test.click()
    speak(
      '你好呀，小朋友! 我已经帮你绘制了我的轮廓，点击下一步让我们开始写生吧！'
    )
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
@font-face {
  font-family: 'FZSJ-LXQWTJW';
  src: url('https://cdn.glitch.me/afbd793d-0eec-495f-95c4-cd3c5b188240%2FFZSJ-LXQWTJW.TTF?v=1638340978154');
}

.dialogue-wrapper {
  box-shadow: 0px 4px 30px rgba(108, 108, 108, 0.15);
}

.dialogue {
  width: 170px;
  height: 270px;
  padding: 8px 24px 24px 24px;
  font-weight: 600;
  font-size: 1.25rem /* 20px */;
  line-height: 2rem /* 32px */;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url(https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/dialogue.svg);
  font-family: 'FZSJ-LXQWTJW', cursive;
}
</style>