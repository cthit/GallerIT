/*
  As we don't check that a certain data type (album or image) has the id
  attribute every time we loop trough the state array it's of outermost
  importance that all data is validated before being added to the global state.
*/

/*
  Finds the key of an object if property id in array.
  -1 is returned if the id wasn't found.
*/
function keyOfId (array, id) {
  for (var i = array.length - 1; i >= 0; i--) {
    // Does not check that it has id as proerty as every object is validated before it's added
    if (array[i].id === id) {
      return i
    }
  }
  return -1
}

/*
  Validators for datatypes used by the mutators
*/
function validateAlbum (album) {
  // check that album has id property
  if (!('id' in album)) {
    return false
  }

  // make sure album has a image array
  if (!('images' in album)) {
    return false
  }
  if (!(Array.isArray(album.images))) {
    return false
  }

  // validate all potential images
  for (var i = album.images.length - 1; i >= 0; i--) {
    if (!validateImage(album.images[i])) {
      return false
    }
  }

  return true
}
function validateImage (image) {
  // check that image has id property
  if (!('id' in image)) {
    return false
  }

  return true
}

// Vuex mutations
// REMEMBER! Always validate data before adding! (See top of document)
const mutations = {
  addAlbum (state, album) { // album object
    if (validateAlbum(album)) {
      if (keyOfId(state.albums, album.id) === -1) {
        state.albums.push(album)
      }
    }
  },
  addAlbums (state, albums) { // array off album objects
    for (var i = albums.length - 1; i >= 0; i--) {
      mutations.addAlbum(state, albums[i])
    }
  },
  removeAlbum (state, id) { // id of album
    var key = keyOfId(state.albums, id)
    if (key !== -1) {
      state.albums.splice(key, 1)
    }
  },
  removeAlbums (state, ids) { // array of id
    for (var i = ids.length - 1; i >= 0; i--) {
      mutations.removeAlbum(state, ids[i])
    }
  },
  updateAlbum (state, album) { // album object
    if (validateAlbum(album)) {
      var key = keyOfId(state.albums, album.id)
      if (key !== -1) {
        state.albums.splice(key, 1, album)
      }
    }
  },
  updateAlbums (state, albums) { // array off album objects
    for (var i = albums.length - 1; i >= 0; i--) {
      mutations.updateAlbum(state, albums[i])
    }
  },
  clearAlbums (state) { // noting
    state.albums.splice(0, state.albums.length)
  },
  addImage (state, payload) { // {album_id:, image:}
    // Validate payload
    if ('image' in payload &&
        validateImage(payload.image) &&
        'album_id' in payload) {
      // Find album
      var albumKey = keyOfId(state.albums, payload.album_id)
      if (albumKey !== -1) {
        // Make sure the image doesn't already exist
        if (keyOfId(state.albums[albumKey].images, payload.image.id) === -1) {
          state.albums[albumKey].images.push(payload.image)
        }
      }
    }
  },
  addImages (state, payloads) { // array off {album_id:, image:}
    for (var i = payloads.length - 1; i >= 0; i--) {
      mutations.addImage(state, payloads[i])
    }
  },
  removeImage (state, payload) { // {album_id:, id:}
    // Validate payload
    if ('id' in payload &&
        'album_id' in payload) {
      // Find album
      var albumKey = keyOfId(state.albums, payload.album_id)
      if (albumKey !== -1) {
        // Remove image
        var imageKey = keyOfId(state.albums[albumKey].images, payload.id)
        if (imageKey !== -1) {
          state.albums[albumKey].images.splice(imageKey, 1)
        }
      }
    }
  },
  removeImages (state, payloads) { // array off {album_id:, id:}
    for (var i = payloads.length - 1; i >= 0; i--) {
      mutations.removeImage(state, payloads[1])
    }
  },
  updateImage (state, payload) { // {album_id:, image:}
    // Validate payload
    if ('image' in payload &&
        validateImage(payload.image) &&
        'album_id' in payload) {
      // Find album
      var albumKey = keyOfId(state.albums, payload.album_id)
      if (albumKey !== -1) {
        // Update image
        var imageKey = keyOfId(state.albums[albumKey].images, payload.id)
        if (imageKey !== -1) {
          state.albums[albumKey].images.splice(imageKey, 1, payload.image)
        }
      }
    }
  },
  updateImages (state, payloads) { // array off {album_id:, image:}
    for (var i = payloads.length - 1; i >= 0; i--) {
      mutations.updateImage(state, payloads[i])
    }
  },
  clearImages (state, albumId) { // albumId
    var key = keyOfId(state.albums, albumId)
    if (key !== -1) {
      state.albums[key].images.splice(0, state.albums[key].images.length)
    }
  }
}
export default mutations
