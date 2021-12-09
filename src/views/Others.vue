<template>
  <div class="others w-screen h-screen">
    <router-link to="/"
                 class="absolute top-11 left-14">
      <img @click="toHome"
           src="https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/back.svg">
    </router-link>
    <p class="px-16 pt-44 text text-6xl">类似的植物</p>
    <div id="others"
         class="px-16 pt-16 flex flex-row justify-between items-top text text-3xl"></div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from '@/utils/md5'

export default {
  data() {
    return {
      baseUrl: '',
      plants: [],
      appid: '20211209001023739',
      key: 'XiXks8lt529b7TD_u7eG',
      from: 'en',
      to: 'zh'
    }
  },
  methods: {
    async translate(text) {
      let url = '/api'
      // let url = 'https://api.fanyi.baidu.com/api/trans/vip/translate'
      let salt = new Date().getTime()
      let str = this.appid + text + salt + this.key
      let sign = md5(str)
      let encodedText = encodeURIComponent(text)
      await axios
        .get(
          url +
            '?q=' +
            encodedText +
            '&from=' +
            this.from +
            '&to=' +
            this.to +
            '&appid=' +
            this.appid +
            '&salt=' +
            salt +
            '&sign=' +
            sign
        )
        .then(function (response) {
          console.log(response)
          text = response.data.trans_result[0].dst
        })
        .catch(function (error) {
          console.log(error)
        })
      return text
    },
    toHome() {
      this.$store.commit('reset')
      // console.log(this.image)
    }
  },
  async mounted() {
    this.baseUrl =
      'https://api.inaturalist.org/v1/identifications/similar_species?taxon_id='
    let that = this
    await axios
      .get(this.baseUrl + '410380')
      .then(function (response) {
        let results = response.data.results
        for (let i = 0; i < results.length; i++) {
          let result = { name: '', image: '' }
          result.name = results[i].taxon.preferred_common_name
          result.image = results[i].taxon.taxon_photos[0].photo.large_url
          that.plants.push(result)
        }
      })
      .catch(function (error) {
        console.log(error)
      })

    let count = this.plants.length >= 3 ? 3 : this.plants.length
    let desc = document.getElementById('others')
    for (let i = 0; i < count; i++) {
      let plantWrapper = document.createElement('div')
      let name = document.createElement('p')
      name.innerHTML = await this.translate(this.plants[i].name)
      let imageWrapper = document.createElement('div')
      let image = document.createElement('img')
      image.setAttribute('src', this.plants[i].image)
      image.setAttribute('style', 'transform: scale(2.2)')
      imageWrapper.setAttribute(
        'class',
        'w-64 h-64 overflow-hidden border-8 border-yellow-400 rounded-full'
      )
      imageWrapper.appendChild(image)
      plantWrapper.appendChild(name)
      plantWrapper.appendChild(imageWrapper)
      desc.appendChild(plantWrapper)
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

.others {
  background-color: rgba(255, 237, 181, 80);
}

.text {
  font-family: 'FZSJ-LXQWTJW', cursive;
}
</style>