<template>
  <q-page  class="row justify-center">
    <div justify-content: center >
      <div class="profile-container">
      <div class="avatar-container">
        <q-avatar size = "200px">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
        </q-avatar>
      </div>
      <div class="info-container">
      <div>userName</div>
      <div>follower</div>
      <div>following</div>
      </div>
      <div class="action-container">
        <q-btn label="Save"
               color="primary"
               @click="saveProfile" />
      </div>
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
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}

.avatar-container {
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
}

.info-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 50px;
}

.action-container {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
</style>
