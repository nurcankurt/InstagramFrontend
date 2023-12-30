<template>
  <q-page class="flex flex-center">
    <div class="profile-container">
      <div class="avatar-container">
          <q-img
            src='https://picsum.photos/500/300'
            ner-color="white"
            style="height: 140px; max-width: 150px"
          />
      </div>
      <div class="info-container">
        <q-input label="Username"
                 filled
                 v-model="username" />
        <q-input label="Name"
                 filled
                 v-model="name" />
        <q-input label="Bio"
                 filled
                 v-model="bio" />
      </div>
      <div class="action-container">
        <q-btn label="Save"
               color="primary"
               @click="saveProfile" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfilePage'
})
</script>

<style scoped>
.profile-container {
  width: 100%;
  max-width: 600px;
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.action-container {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
</style>
