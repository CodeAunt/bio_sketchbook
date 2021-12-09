<template>
  <div class="plant w-screen h-screen">
    <router-link to="/"
                 class="absolute top-11 left-14">
      <img @click="toHome"
           src="https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/back.svg">
    </router-link>

    <div class="px-16 pt-32 flex flex-row justify-between items-top">
      <div class="relative">
        <div class="w-64 h-64 overflow-hidden border-8 border-yellow-400 rounded-full">
          <img class="image"
               :src="capture">
        </div>
        <div class="bg-white absolute w-80 h-80 left-24 top-40 overflow-hidden border-8 border-yellow-400 rounded-full">
          <div class="image absolute w-80 h-80 overflow-hidden">
            <img class="absolute top-0 contour"
                 :src="image">
            <img class="absolute top-2"
                 :src="drawing">
          </div>
        </div>
      </div>

      <div class="text pl-52 pr-24">
        <h1 class="text-5xl pb-6"
            style="color: #14B9F4">{{ plant.data.name }}</h1>
        <h2 class="text-3xl pb-10 text-gray-900">{{ plant.data.type }}</h2>
        <div id="desc"
             style="-webkit-overflow-scrolling: touch;"
             class="overflow-scroll h-72 text-gray-900">
          <p class="text-lg pb-3">杜鹃（学名：Rhododendron simsii Planch.）：是双子叶植物纲、杜鹃花科、杜鹃属的常绿灌木、落叶灌木。又名映山红、山石榴。相传，古有杜鹃鸟，日夜哀鸣而咯血，染红遍山的花朵，因而得名。杜鹃花一般春季开花，每簇花2-6朵，花冠漏斗形，有红、淡红、杏红、雪青、白色等，花色繁茂艳丽。生于海拔500-1200（-2500）米的山地疏灌丛或松林下，为中国中南及西南典型的酸性土指示植物。</p>
          <p class="text-lg pb-3">杜鹃（学名：Rhododendron simsii Planch.）：是双子叶植物纲、杜鹃花科、杜鹃属的常绿灌木、落叶灌木。又名映山红、山石榴。相传，古有杜鹃鸟，日夜哀鸣而咯血，染红遍山的花朵，因而得名。杜鹃花一般春季开花，每簇花2-6朵，花冠漏斗形，有红、淡红、杏红、雪青、白色等，花色繁茂艳丽。生于海拔500-1200（-2500）米的山地疏灌丛或松林下，为中国中南及西南典型的酸性土指示植物。</p>
          <p class="text-lg pb-3">杜鹃（学名：Rhododendron simsii Planch.）：是双子叶植物纲、杜鹃花科、杜鹃属的常绿灌木、落叶灌木。又名映山红、山石榴。相传，古有杜鹃鸟，日夜哀鸣而咯血，染红遍山的花朵，因而得名。杜鹃花一般春季开花，每簇花2-6朵，花冠漏斗形，有红、淡红、杏红、雪青、白色等，花色繁茂艳丽。生于海拔500-1200（-2500）米的山地疏灌丛或松林下，为中国中南及西南典型的酸性土指示植物。</p>
        </div>
      </div>

      <div class="absolute bottom-12 right-16">
        <router-link to="/others"
                     class="mx-6">
          <img src="https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/next.svg">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: { ...mapState(['image', 'capture', 'drawing', 'plant']) },
  methods: {
    toHome() {
      this.$store.commit('reset')
      // console.log(this.image)
    }
  },
  mounted() {
    let desc = document.getElementById('desc')
    for (let i = 0; i < this.plant.data.data.length; i++) {
      let element = document.createElement('p')
      element.innerHTML = this.plant.data.data[i]
      element.setAttribute('class', 'text-lg pb-3')
      desc.appendChild(element)
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

.plant {
  background-color: rgba(255, 237, 181, 80);
}

.image {
  transform: scale(1.7);
}

.contour {
  transform: scale(0.8);
}

.text {
  font-family: 'FZSJ-LXQWTJW', cursive;
}
</style>