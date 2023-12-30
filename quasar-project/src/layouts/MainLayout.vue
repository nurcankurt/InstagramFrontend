<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-purple">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Instagram
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          TestBees Team
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home Page',
    icon: 'home',
    link: 'https://quasar.dev'
  },
  {
    title: 'Search',
    icon: 'search',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Explore',
    icon: 'explore',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Message',
    icon: 'chat',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Create',
    icon: 'add',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Profile',
    icon: 'person',
    link: 'https://forum.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
