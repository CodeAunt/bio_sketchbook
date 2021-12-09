<template>
  <div class="scroll"
       ref="scrollWrapper">
    <!-- 插槽用来放置我们的数据 -->
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  data() {
    return {}
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    data(val) {
      //当刷新队列的时候去不断监听data，刷新调用refresh方法
      this.$nextTick(() => {
        this.refresh()
      })
    }
  },
  mounted() {
    //当组件的所有dom部分渲染更新完成了之后再去调用initScroll方法
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll() {
      if (!this.$refs.scrollWrapper) return
      this.scroll = new BScroll(this.$refs.scrollWrapper, {
        //在这个添加一些配置参数
        click: true
      })
    },
    refresh() {
      //当dom结构更新的时候，调用refresh方法对dom高度进行一个重新计算
      this.scroll && this.scroll.refresh()
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    }
  }
}
</script>

<style scoped>
</style>