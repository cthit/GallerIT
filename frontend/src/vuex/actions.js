// Vuex actions
const actions = {
  async getAlbumList (context) {
    return new Promise((resolve, reject) => {
      // Get list of albums
      var albums = _mockNoImages
      // Mutate store
      if (albums === null || albums.length === 0) {
        throw new DataException('No albums were found')
      } else {
        context.commit('addAlbums', albums)
        resolve()
      }
    })
  },
  async updateAlbum (context, albumId) {
    return new Promise((resolve, reject) => {
      // Get Album
      var album = _mock.find((album) => album.id === albumId)
      // Mutate store
      if (album === null) {
        throw new DataException('Album was not found')
      } else {
        context.commit('updateAlbum', album)
        resolve()
      }
    })
  },
  async updateImage (context, payload) { // payload: {album_id:, id:}
    return new Promise((resolve, reject) => {
      // Get Image data
      var image = _mock.find((album) => album.id === payload.album_id).images.find((image) => image.id === payload.id)

      // Mutate store
      if (image === null) {
        throw new DataException('Image was not found')
      } else {
        context.commit('updateImage', {album_id: payload.album_id, image: image})
        resolve()
      }
    })
  }
}
export default actions

function DataException (message) {
  this.message = message
  this.name = 'DataException'
}

// Mock data
const _mock = []
for (var i = 15 - 1; i >= 0; i--) {
  var _images = []
  for (var j = 120 - 1; j >= 0; j--) {
    _images[j] = {
      id: j.toString(),
      picture_url: 'https://example.com/somepicture',
      thumbnail_url: 'https://example.com/somepicturethumbnail',
      photographer: ('someoneof' + i) + j,
      editor: 'someone',
      timestamp: 1324 + j
    }
  }

  _mock[i] = {
    id: i.toString(),
    title: 'A Funny Title' + i,
    thumbnail_url: 'https://example.com/somethumbnail',
    size: 4,
    timestamp: 111 + i,
    images: _images
  }
}

const _mockNoImages = []
for (i = 15 - 1; i >= 0; i--) {
  _images = []
  _mockNoImages[i] = {
    id: i.toString(),
    title: 'A Funny Title' + i,
    thumbnail_url: 'https://example.com/somethumbnail',
    size: 4,
    timestamp: 111 + i,
    images: _images
  }
}
