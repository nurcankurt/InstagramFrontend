<template>
  <q-page  class="row justify-center">
    <q-page-container class="q-pa-lg">
    <div style="width: 900px;">
      <q-item >
      <q-item-section side>
        <q-avatar  size="150px">
          <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item>
          <q-item-section >
          <q-item-label :style="{ 'font-weight': 'bold', 'font-size': '18px' }">{{ username || 'userNamePlaceholder' }}</q-item-label>
        </q-item-section>
      <q-item-section  >
        <q-btn class="absolute-right" style="background: #FF0080; color: white; width:fit-content; height:fit-content" label="Edit Profile"  @click="editProfile" />
      </q-item-section>
        </q-item>
        <q-item>
      <q-item-section >
        <q-item-label  >{{postsCount}} posts</q-item-label>
      </q-item-section>
      <q-item-section >
        <q-item-label >{{followersCount}} followers</q-item-label>
      </q-item-section>
      <q-item-section >
        <q-item-label >{{followingCount}} following</q-item-label>
      </q-item-section>
    </q-item>
    <q-item >
      <q-item-label>
      <div style="font-weight:bold; font-size: 16px;">{{NameSurname}}</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </q-item-label>
      </q-item>
      </q-item-section>

    </q-item>
    <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="accent"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="posts" icon="view_module" label="POSTS" />
          <q-tab name="saved" icon="bookmark" label="SAVED" />
          <q-tab name="tags" icon="person_pin" label="TAGS" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="posts">
            <div id="q-app" style="min-height: 100vh;">
              <div class="q-pa-md row items-start q-gutter-md">
                <q-card v-for="(photo, index) in photos" :key="index" class="my-card">
                  <q-img :src="photo"></q-img>
                </q-card>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="saved">
            <div class="text-h6">SAVED</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="tags">
            <div class="text-h6">TAGS</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

  </div>
  </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfilePage',
  data () {
    return {
      tab: 'posts',
      username: '',
      NameSurname: '',
      postsCount: 0,
      followersCount: 0,
      followingCount: 0,
      photos: []
    }
  },
  mounted () {
    // Fetch data from the backend and update the counts
    this.fetchDataFromBackend()
    this.fetchPhotos()
  },
  methods: {
    editProfile () {
      // Add logic for handling the "Edit Profile" button click
    },
    fetchDataFromBackend () {
      // Simulating a backend API call. Replace this with your actual API call.
      // For simplicity, using setTimeout to simulate an asynchronous call.
      setTimeout(() => {
        // Replace these values with the actual counts received from the backend
        this.postsCount = 100
        this.followersCount = 500
        this.followingCount = 200
        this.username = 'test1'
        this.NameSurname = 'Test Tests'
      }) // Simulating a delay of 1 second
    },
    async fetchPhotos () {
      try {
        const response = await fetch('YOUR_BACKEND_API_ENDPOINT')
        const data = await response.json()
        this.photos = data // Assuming data is an array of image URLs
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }
  }
})
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
