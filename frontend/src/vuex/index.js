import Vue from 'vue'
import Vuex from 'vuex'
// Use "vuex-persistedstate" for persistent state management

// Mock data
var _albums = {}
for (var i = 15 - 1; i >= 0; i--) {
  var _images = {}
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
    addAlbum (state, payload) {
      if (!state.albums.hasOwnProperty(payload.id)) {
        Vue.set(state.albums, payload.id, payload.album)
      }
    },
    addAlbums (state, payloads) {
      for (var payload in payloads) {
        if (!state.albums.hasOwnProperty(payload.id)) {
          Vue.set(state.albums, payload.id, payload.album)
        }
      };
    },
    removeAlbum (state, id) {
      if (state.albums.hasOwnProperty(id)) {
        Vue.delete(state.albums, id)
      }
    },
    removeAlbums (state, ids) {
      for (var id in ids) {
        if (state.albums.hasOwnProperty(id)) {
          Vue.delete(state.albums, id)
        }
      };
    },
    updateAlbum (state, payload) {
      if (state.albums.hasOwnProperty(payload.id)) {
        Vue.set(state.albums, payload.id, payload.album)
      }
    },
    updateAlbums (state, payloads) {
      for (var payload in payloads) {
        if (state.albums.hasOwnProperty(payload.id)) {
          Vue.set(state.albums, payload.id, payload.album)
        }
      };
    },
    clearAlbums (state) {
      Vue.set(state, 'albums', {})
    },
    addImage (state, payload) {
      if (state.albums.hasOwnProperty(payload.album_id)) {
        if (!state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
          Vue.set(state.albums[payload.album_id].images, payload.id, payload.image)
        }
      }
    },
    addImages (state, payloads) {
      for (var payload in payloads) {
        if (state.albums.hasOwnProperty(payload.album_id)) {
          if (!state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
            Vue.set(state.albums[payload.album_id].images, payload.id, payload.image)
          }
        }
      }
    },
    removeImage (state, payload) {
      if (state.albums.hasOwnProperty(payload.album_id)) {
        if (state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
          Vue.delete(state.albums[payload.album_id].images, payload.id)
        }
      }
    },
    removeImages (state, payloads) {
      for (var payload in payloads) {
        if (state.albums.hasOwnProperty(payload.album_id)) {
          if (state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
            Vue.delete(state.albums[payload.album_id].images, payload.id)
          }
        }
      }
    },
    updateImage (state, payload) {
      if (state.albums.hasOwnProperty(payload.album_id)) {
        if (state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
          Vue.set(state.albums[payload.album_id].images, payload.id, payload.image)
        }
      }
    },
    updateImages (state, payloads) {
      for (var payload in payloads) {
        if (state.albums.hasOwnProperty(payload.album_id)) {
          if (state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
            Vue.set(state.albums[payload.album_id].images, payload.id, payload.image)
          }
        }
      }
    },
    clearImages (state, albumId) {
      if (state.albums.hasOwnProperty(albumId)) {
        Vue.set(state.albums[albumId], 'images', {})
      }
    }
  }
})
export default store
