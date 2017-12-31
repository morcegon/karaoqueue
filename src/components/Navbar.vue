<template>
  <b-navbar
    toggleable="md">
    <b-navbar-toggle
      target="navCollapse"></b-navbar-toggle>
    <b-navbar-brand>Karaokleiton</b-navbar-brand>

    <b-collapse
      is-nav
      id="navCollapse">
        <b-navbar-nav>
          <b-nav-item
            @click="showSearch">Busca</b-nav-item>
          <b-nav-item
            @click="showQueue">Fila</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>

<script>
import { navbarBus } from '../main'

export default {
  methods: {
    showSearch () {
      navbarBus.$emit('showSearch', true)
    },
    showQueue () {
      navbarBus.$emit('showSearch', false)
    }
  }
}
</script>
