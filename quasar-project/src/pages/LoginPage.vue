<template>
    <q-page>
      <div class="login-container">
        <div class="login-box">
          <div class="login-form">
            <div class="login-image">
              <img src="src/assets/instagram-logo.jpg" alt="Instagram Logo" />
            </div>
            <h3 class="login-heading"> testbees </h3>
            <div class="input-box">
              <q-input label="Username" v-model="user.username"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please enter Username']" />
            </div>
            <div class="input-box">
              <q-input label="Password" :type="user.isPwd ? 'password' : 'text'" v-model="user.password">
                <template v-slot:append>
                  <q-icon :name="user.isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="user.isPwd = !user.isPwd" />
                </template>
              </q-input>
            </div>
            <q-btn label="Login" color="primary" @click="login" />
          </div>
          <div class="register-section">
            <span class="register-text" @click="goToRegisterPage">Don't have an account? Register!</span>
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
      password: ''
    })

    const $router = useRouter()

    const login = async () => {
      try {
        if (user.value.username && user.value.password) {
          const response = await api.get('/users/login', {
            params: {
              username: user.value.username,
              password: user.value.password
            }
          })

          // Check the response from the server for successful login
          if (response.status === 200) {
            console.log('User logged in successfully:', response.data)

            // Redirect the user to another page
            $router.push({ path: '/profile' })
          } else {
            console.log('Invalid username or password.')
          }
        } else {
          console.log('Please fill in both username and password.')
        }
      } catch (error) {
        // Handle the error response
        console.error('Error during login:', error)
      }
    }

    function goToRegisterPage () {
      $router.push({ path: 'register' })
    }

    return {
      user,
      login,
      goToRegisterPage
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

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-form {
    max-width: 400px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .login-image {
    margin-bottom: 20px;
  }

  .login-image img {
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

  .small-register-btn {
    margin-top: 10px;
    padding: 8px 20px;
  }

  .register-section {
    margin-top: 20px;
    text-align: center;
  }

  .register-text {
    color: #3498db;
    text-decoration: underline; /* Altı çizili */
    cursor: pointer;
  }
  </style>
