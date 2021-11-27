import history from '@/utils/history'
import store from '@/store'
import hotkeys from 'hotkeys-js'
import { clearProject, createLayer } from '@/utils/shared'

export default function(app) {
  hotkeys('b', () => store.commit('setTool', 'brush')) // 刷子
  hotkeys('p', () => store.commit('setTool', 'pencil')) // 笔
  hotkeys('e', () => store.commit('setTool', 'eraser')) // 擦除
  hotkeys('a', () => store.commit('setTool', 'select')) // 选择
  hotkeys('ctrl+z', () => history.undo()) // 撤销
  hotkeys('ctrl+shift+z', () => history.redo()) // 重做
  hotkeys('ctrl+q', () => {
    clearProject()
    createLayer()
  })
}
