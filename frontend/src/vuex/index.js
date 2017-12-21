import Vue from 'vue'
import Vuex from 'vuex'
// Use "vuex-persistedstate" for persistent state management

// Mock data
var _albums = []
for (var i = 15 - 1; i >= 0; i--) {
  var _images = []
  for (var j = 120 - 1; j >= 0; j--) {
    _images[j] = {
      picture_url: 'https://dig.it/somepicture',
      thumbnail_url: 'https://dig.it/somepicturethumbnail',
      photographer: ('someoneof' + i) + j,
      editor: 'someone',
      timestamp: 1324
    }
  }

  _albums[i] = {
    title: 'A Funny Title' + i,
    thumbnail_url: 'https://dig.it/somethumbnail',
    size: 4,
    timestamp: 111,
    images: _images
  }
}

// Setup global state
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    albums: _albums
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store
