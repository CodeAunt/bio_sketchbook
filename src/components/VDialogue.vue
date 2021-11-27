<template>
  <div class="flex flex-row bg-white rounded-r-2xl"
       @click="handleClick">
    <img src="/assets/svg/line.svg"
         class="pl-6">
    <div class="flex flex-col justify-between items-center">
      <div class="pt-6">
        <p class="dialogue"><span>Hello dear friend! Can you draw my outline ?</span></p>
      </div>
      <img src="/assets/svg/len.svg"
           class="p-12">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

.dialogue {
  width: 170px;
  height: 270px;
  padding: 8px 24px 24px 24px;
  font-weight: 600;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url(/assets/svg/dialogue.svg);
  font-family: 'Mali', cursive;
}
</style>