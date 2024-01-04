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
          <q-item-label :style="{ 'font-weight': 'bold', 'font-size': '18px' }">{{ user.username || 'userNamePlaceholder' }}</q-item-label>
        </q-item-section>
      <q-item-section  >
        <q-btn class="absolute-right" style="background: #FF0080; color: white; width:fit-content; height:fit-content" label="Edit Profile"  @click="prompt = true" />
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
      <div style="font-weight: bold; font-size: 16px; display: flex;">
      <div>{{ user.name }}</div>
      <div style="margin-left: 5px;">{{ user.surname }}</div>
    </div>
      <div>{{user.bio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}}</div>
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
                <q-card class="my-card">
                  <img src="https://cdn.quasar.dev/img/parallax2.jpg">
              </q-card>
                <q-card class="my-card">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">
              </q-card>
              <q-card class="my-card">
                  <img src="https://cdn.quasar.dev/img/parallax1.jpg">
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
  <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
          <q-card-section>
          <q-form ref="myForm"
          class="q-gutter-md"
          >
          <q-avatar  size="150px">
            <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" />
          </q-avatar>
          <div>
          <q-btn
            style="position: relative; overflow: hidden; background: #FF0080; color: white; width: fit-content;"
            @click="handleButtonClick"
          >
            Change Picture
            <q-file v-model="model" style="position: absolute; top: 0; left: 0; opacity: 0; width: 100%; height: 100%;" />
          </q-btn>
        </div>
            <q-input
              filled
              v-model="user.username"
              label="Username"
            />
            <q-input
              filled
              v-model="user.name"
              label="Name"
            />
            <q-input
            filled
            v-model="user.surname"
            label="Surname"
            />
            <q-input
            v-model="user.bio"
            filled
            autogrow
            label="Biography"
          />
          </q-form>

        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Save" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'ProfilePage',
  setup () {
    // Define reactive variables using ref
    const tab = ref('posts')

    const user = ref({
      username: '',
      name: '',
      surname: '',
      bio: ''

    })
    const postsCount = ref(0)
    const followersCount = ref(0)
    const followingCount = ref(0)
    const photos = ref([])

    // Fetch data from the backend and update the counts
    const fetchDataFromBackend = () => {
      // Simulating a backend API call. Replace this with your actual API call.
      // For simplicity, using setTimeout to simulate an asynchronous call.
      setTimeout(() => {
        // Replace these values with the actual counts received from the backend
        postsCount.value = 100
        followersCount.value = 500
        followingCount.value = 200
        user.value.username = 'username'
        user.value.name = 'name'
        user.value.surname = 'surname'
        user.value.bio = 'bio'
      }, 1000) // Simulating a delay of 1 second
    }

    // Fetch photos asynchronously
    const fetchPhotos = async () => {
      try {
        const response = await fetch('')
        const data = await response.json()
        photos.value = data // Assuming data is an array of image URLs
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    // Use onMounted to execute code after the component is mounted
    onMounted(() => {
      fetchDataFromBackend()
      fetchPhotos()
    })

    // Return variables and methods for use in the template
    return {
      tab,
      user,
      postsCount,
      followersCount,
      followingCount,
      photos,
      fetchDataFromBackend,
      fetchPhotos,
      prompt: ref(false)
    }
  }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
