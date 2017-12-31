<template>
  <div>

    <table class="table table-striped">
      <tr>
        <th>#</th>
        <th>Música</th>
        <th></th>
      </tr>
      <tr
        v-for="(video, index) in videos"
        :key="index">
        <td>{{ index+1 }}</td>
        <td>{{ video.title }}</td>
        <td>
          <a
            class="btn btn-sm btn-danger"
            @click="removeFromQueue(video)">X</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import db from '../Database.js'

let videosRef = db.ref('videos')

export default {
  firebase () {
    return {
      videos: videosRef
    }
  },
  methods: {
    removeFromQueue (video) {
      videosRef.child(video['.key']).remove()
    }
  }
}
</script>

