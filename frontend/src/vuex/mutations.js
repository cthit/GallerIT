import Vue from 'vue'

// Vuex mutations
const _mutations = {
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
export default _mutations
