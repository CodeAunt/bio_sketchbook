<template>
  <div class="content-wrapper filter drop-shadow-md">
    <p class="content"><span>I am Rhododendron, found mainly in Asia. Most species have brightly colored flowers which bloom from late winter through to early summer.</span></p>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

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
  padding: 8px 16px 16px 16px;
  font-family: 'Mali', cursive;
}
</style>