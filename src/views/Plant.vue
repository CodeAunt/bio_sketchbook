<template>
  <div class="plant w-screen h-screen">
    <div class="absolute w-64 h-64 left-14 top-44 overflow-hidden border-8 border-yellow-400 rounded-full">
      <img class="image"
           :src="capture">
    </div>
    <div class="bg-white absolute w-80 h-80 left-36 top-80 overflow-hidden border-8 border-yellow-400 rounded-full">
      <div class="image absolute w-80 h-80">
        <img class="absolute top-0 contour"
             :src="image">
        <img class="absolute top-2"
             :src="drawing">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: { ...mapState(['image', 'capture', 'drawing']) }
}
</script>

<style scoped>
.plant {
  background-color: rgba(255, 237, 181, 80);
}
.image {
  transform: scale(1.7);
}
.contour {
  transform: scale(0.8);
}
</style>