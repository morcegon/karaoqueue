<template>
  <div class="row">
    <div
      :key="index"
      v-for="(video, index) in videos"
      class="card">
        <div class="img-container">
          <img :src="video.snippet.thumbnails.medium.url">
        </div>

        <div class="card-body">
          <h5>{{ video.snippet.title }}</h5>
          <a
            class="btn btn-sm btn-info"
            @click="addToQueue(video)">Adicionar à Fila</a>
        </div>
      </div>
  </div>
</template>

<script>
import db from '../Database'

let videosRef = db.ref('videos')

export default {
  props: ['videos'],
  methods: {
    addToQueue (video) {
      let newItem = {
        videoId: video.id.videoId,
        title: video.snippet.title,
        thumb: video.snippet.thumbnails.medium.url
      }
      videosRef.push(newItem)
    }
  }
}
</script>

<style lang="sass" scoped>
  .row
    display: flex
    justify-content: space-around

  .card
    padding: 0
    margin-bottom: 15px
    width: 45%

  .card-body
    padding: 5px 10px

  .img-container
    align-content: center
    background-color: black
    display: flex
    height: 90px
    justify-content: center

    img
      max-height: 100%
      max-width: 100%

  h5
    font-size: 1rem

  a
    color: white !important
    width: 100%
</style>
