<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-search
      v-if="showSearch"></app-search>
    <app-queue
      v-else></app-queue>
  </div>
</template>

<script>
import Queue from './components/Queue.vue'
import Search from './components/Search.vue'
import Navbar from './components/Navbar.vue'
import { navbarBus } from './main'

export default {
  data() {
    return {
      showSearch: true,
      showQueue: false
    }
  },
  components: {
    appQueue: Queue,
    appSearch: Search,
    appNavbar: Navbar
  },
  created () {
    navbarBus.$on('showSearch', show => {
      this.showSearch = show,
      this.showQueue = !this.showSearch
    })
  }
}
</script>
