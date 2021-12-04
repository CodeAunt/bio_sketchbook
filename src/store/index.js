import Vue from 'vue'
import Vuex from 'vuex'
import tools from '@/tools/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image: '',
    toolName: null,
    canvasArgs: {
      bgColor: '#fff'
    },
    pencilArgs: {
      color: '#000000',
      size: 10,
      shake: true
    },
    eraserArgs: {
      size: 20
    },
    brushArgs: {
      color: '#000000',
      size: 20,
      shake: true
    },
    drawSession: {
      step: 0,
      description: ''
    }
  },
  mutations: {
    setImage(state, s) {
      state.image = s
    },
    setStep(state) {
      if (state.drawSession.step < 3) {
        state.drawSession.step++
      }
    },
    setDescription(state, s) {
      state.drawSession.description = s
    },
    setTool(state, toolName) {
      if (state.toolName && tools[state.toolName].onToggleOut) {
        tools[state.toolName].onToggleOut()
      }
      state.toolName = toolName
      if (tools[toolName]) {
        tools[toolName].activate()
        if (tools[toolName].onToggleIn) {
          tools[toolName].onToggleIn()
        }
      }
    },
    setArgs(state, { toolName, color, size, shake }) {
      const tool = state[toolName + 'Args']
      tool.color = color || tool.color
      tool.size = size || tool.size
      if (shake !== undefined) {
        tool.shake = shake
      }
    },
    setCanvasArgs(state, args) {
      Object.assign(state.canvasArgs, args)
    }
  },
  actions: {},
  modules: {}
})