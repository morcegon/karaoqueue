<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-search></app-search>
    <app-queue></app-queue>
  </div>
</template>

<script>
import Queue from './components/Queue.vue'
import Search from './components/Search.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    appQueue: Queue,
    appSearch: Search,
    appNavbar: Navbar
  }
}
</script>
