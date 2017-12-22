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
    addAlbum (state, payload) { // {id:, album:}
      if (!state.albums.hasOwnProperty(payload.id)) {
        Vue.set(state.albums, payload.id, payload.album)
      }
    },
    addAlbums (state, payloads) { // array off {id:, album:}
      for (var payload in payloads) {
        if (!state.albums.hasOwnProperty(payload.id)) {
          Vue.set(state.albums, payload.id, payload.album)
        }
      };
    },
    removeAlbum (state, id) { // id
      if (state.albums.hasOwnProperty(id)) {
        Vue.delete(state.albums, id)
      }
    },
    removeAlbums (state, ids) { // array of id
      for (var id in ids) {
        if (state.albums.hasOwnProperty(id)) {
          Vue.delete(state.albums, id)
        }
      };
    },
    updateAlbum (state, payload) { // {id:, album:}
      if (state.albums.hasOwnProperty(payload.id)) {
        Vue.set(state.albums, payload.id, payload.album)
      }
    },
    updateAlbums (state, payloads) { // array off {id:, album:}
      for (var payload in payloads) {
        if (state.albums.hasOwnProperty(payload.id)) {
          Vue.set(state.albums, payload.id, payload.album)
        }
      };
    },
    clearAlbums (state) { // noting
      Vue.set(state, 'albums', {})
    },
    addImage (state, payload) { // {album_id:, id:, image:}
      if (state.albums.hasOwnProperty(payload.album_id)) {
        if (!state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
          Vue.set(state.albums[payload.album_id].images, payload.id, payload.image)
        }
      }
    },
    addImages (state, payloads) { // array off {album_id:, id:, image:}
      for (var payload in payloads) {
        if (state.albums.hasOwnProperty(payload.album_id)) {
          if (!state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
            Vue.set(state.albums[payload.album_id].images, payload.id, payload.image)
          }
        }
      }
    },
    removeImage (state, payload) { // {album_id:, id:}
      if (state.albums.hasOwnProperty(payload.album_id)) {
        if (state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
          Vue.delete(state.albums[payload.album_id].images, payload.id)
        }
      }
    },
    removeImages (state, payloads) { // array off {album_id:, id:}
      for (var payload in payloads) {
        if (state.albums.hasOwnProperty(payload.album_id)) {
          if (state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
            Vue.delete(state.albums[payload.album_id].images, payload.id)
          }
        }
      }
    },
    updateImage (state, payload) { // {album_id:, id:, image:}
      if (state.albums.hasOwnProperty(payload.album_id)) {
        if (state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
          Vue.set(state.albums[payload.album_id].images, payload.id, payload.image)
        }
      }
    },
    updateImages (state, payloads) { // array off {album_id:, id:, image:}
      for (var payload in payloads) {
        if (state.albums.hasOwnProperty(payload.album_id)) {
          if (state.albums[payload.album_id].images.hasOwnProperty(payload.id)) {
            Vue.set(state.albums[payload.album_id].images, payload.id, payload.image)
          }
        }
      }
    },
    clearImages (state, albumId) { // albumId
      if (state.albums.hasOwnProperty(albumId)) {
        Vue.set(state.albums[albumId], 'images', {})
      }
    }
  }
})
export default store
