<template>
  <div class="flex items-center justify-center flex-wrap w-96 h-20">
    <VPicker class="transform -translate-y-2"></VPicker>
    <VTools class="transform -translate-y-2"></VTools>
  </div>
</template>

<script>
import VTools from '@/components/VTools'
import VPicker from '@/components/VPicker'
import VIconBtn from '@/components/VIconBtn'
import history from '@/utils/history'
import { clearProject, createLayer } from '@/utils/shared'
import hotkeys from 'hotkeys-js'
export default {
  components: {
    VTools,
    VIconBtn,
    VPicker
  },
  data() {
    return {
      history
    }
  },
  mounted() {
    hotkeys('ctrl+s', this.exportSvg)
    hotkeys('f1', this.help)
  },
  methods: {
    clear() {
      clearProject()
      createLayer()
    },
    undo() {
      history.undo()
    },
    redo() {
      history.redo()
    }
  }
}
</script>

<style scoped>
</style>
