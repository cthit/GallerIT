// Vuex getters
const getters = {
  getAlbum: (state) => (id) => {
    return state.albums.find(album => album.id === id)
  },
  getImages: (state) => (id) => {
    return state.albums.find(album => album.id === id).images
  },
  getImage: (state) => (albumId, imageId) => {
    return state.albums.find(album => album.id === albumId).images.find(image => image.id === imageId)
  },
  getAlbums: (state) => {
    return state.albums
  }
}
export default getters
