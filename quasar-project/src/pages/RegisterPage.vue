<template>
  <q-page>
    <div class="register-container">
      <div class="register-box">
        <div class="register-form">
          <div class="register-image">
              <img src="src/assets/instagram-logo.jpg" alt="Intagram Logo"/>
          </div>
          <h3 class="register-heading"> testbees </h3>
          <div class="input-box">
            <q-input label="First Name" v-model="user.firstname"
            lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please enter First Name']"/>
          </div>
          <div class="input-box">
            <q-input label="Second Name" v-model="user.secondname"
            lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please enter Second Name']"/>
          </div>
          <div class="input-box">
            <q-input label="Email Address" v-model="user.email"
            lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please enter Email']" suffix="@gmail.com"/>
          </div>
          <div class="input-box">
            <q-input label="Username" v-model="user.username"
            lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please enter Username']"/>
          </div>
          <div class="input-box">
            <q-input label="Password" :type="user.isPwd ? 'password' : 'text'" v-model="user.password">
              <template v-slot:append>
                <q-icon :name="user.isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="user.isPwd = !user.isPwd"  />
              </template>
            </q-input>
          </div>
          <div class="input-box">
            <q-input label="Confirm Password" :type="user.isPwd ? 'password' : 'text'" v-model="user.confirmPassword">
              <template v-slot:append>
                <q-icon :name="user.isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="user.isPwd = !user.isPwd"  />
              </template>
            </q-input>
          </div>
          <q-btn label="Register" color="primary" @click="register" />
        </div>
        <div class="login-section">
          <span class="login-text" @click="goToLoginPage">Already have an account? Login!</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from 'src/boot/axios'

export default defineComponent({
  setup () {
    const user = ref({
      username: '',
      firstname: '',
      secondname: '',
      email: '',
      password: '',
      confirmPassword: '',
      isPwd: true
    })

    const $router = useRouter()

    const register = async () => {
      try {
        if (user.value.username && user.value.password && user.value.password === user.value.confirmPassword) {
          const response = await api.post('/users', {
            username: user.value.username,
            firstname: user.value.firstname,
            lastname: user.value.secondname,
            email: user.value.email + '@gmail.com',
            password: user.value.password,
            bio: '', // Add any other fields you need to send to the backend
            profileImage: null, // Set the profile image as needed
            booleanAdmin: false // Adjust as needed based on your requirements
          })

          // Handle the success response
          console.log('User registered successfully:', response.data)

          // Redirect the user to another page
          $router.push({ path: '/profile' })
        } else {
          console.log('Please fill in all required fields and ensure passwords match.')
        }
      } catch (error) {
        // Handle the error response
        console.error('Error registering user')
      }
    }

    function goToLoginPage () {
      $router.push({ path: 'login' })
    }

    return {
      user,
      register,
      goToLoginPage
    }
  }
})
</script>

<style scoped>

@font-face {
font-family: 'InstagramFont';
src: url('src/font/GrandHotel-Regular.ttf') format('truetype');
}

.login-heading {
font-family: 'InstagramFont', sans-serif;
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-form {
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.register-image {
  margin-bottom: 20px;
}

.register-image img {
  max-width: 100%;
  height: auto;
}

.input-box {
  margin-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #eeeeee;
  border-radius: 5px;
}

.register-heading {
  font-family: 'InstagramFont', sans-serif;
}

.login-section {
  margin-top: 20px;
  text-align: center;
}

.login-text {
  color: #3498db;
  text-decoration: underline; /* Altı çizili */
  cursor: pointer;
}
</style>
