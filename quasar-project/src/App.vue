<!-- src/App.vue -->
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const defaultLayout = 'MainLayout' // Set your default layout
import MainLayout from 'layouts/MainLayout.vue'
import LoginLayout from 'layouts/LoginLayout.vue'

export default {
  components: {
    MainLayout,
    LoginLayout
  },

  computed: {
    layout () {
      console.log('Route Path:', this.$route.path)
      if (this.$route.path.startsWith('/login/')) {
        console.log('Using LoginLayout')
        return 'LoginLayout'
      } else {
        console.log('Using Default Layout')
        return defaultLayout
      }
    }
  }
}
</script>
