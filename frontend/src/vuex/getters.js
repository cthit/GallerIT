// Vuex getters
const _getters = {
  getAlbum: (state) => (id) => {
    return state.albums.find(album => album.id === id)
  },
  getImage: (state) => (albumId, imageId) => {
    return state.albums.find(album => album.id === albumId).images.find(image => image.id === imageId)
  },
  getAlbums: (state) => {
    return state.albums
  }
}
export default _getters
