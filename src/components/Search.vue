<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Busca"
            @input="searchMusic"
            v-model="keyword">
        </div>
      </div>
    </div>

    <app-results
      v-if="results"
      :videos="results"></app-results>
  </div>
</template>

<script>
import axios from 'axios'
import results from './Results'

export default {
  data() {
    return {
      keyword: null,
      results: null,
      karaokeOnly: true
    }
  },
  methods: {
    searchMusic () {
      const baseUrs = 'https://www.googleapis.com/youtube/v3/search'
      const apiKey = 'AIzaSyD5lcXLJGhyiRdRNPcfT8ZJyEkSUadEi6E'

      let keyword = (this.karaokeOnly ? this.keyword + ' + karaoke' : this.keyword)

      if (this.keyword !== null && this.keyword.length > 2) {
        axios
          .get(baseUrs, {
            params: {
              part: 'snippet',
              q: keyword,
              type: 'video',
              videoEmbeddable: 'true',
              maxResults: 20,
              key: apiKey
            }
          })
          .then(result => {
            this.results = result.data.items
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  },
  components: {
    appResults: results
  }
}
</script>

