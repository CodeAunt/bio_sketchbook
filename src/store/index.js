import Vue from 'vue'
import Vuex from 'vuex'
import tools from '@/tools/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image: '',
    capture: '',
    drawing: '',
    plant: { name: '', data: {} },
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
    reset(state) {
      state.image = ''
      state.capture = ''
      state.drawing = ''
      state.plant.name = ''
      state.plant.data = {}
      state.drawSession.step = 0
      state.drawSession.description = ''
    },
    setImage(state, s) {
      state.image = s
    },
    setCapture(state, s) {
      state.capture = s
    },
    setDrawing(state, s) {
      state.drawing = s
    },
    setPlant(state, s) {
      state.plant.name = s
    },
    setPlantData(state, s) {
      state.plant.data = s
    },
    setStep(state) {
      if (state.drawSession.step < 6) {
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
