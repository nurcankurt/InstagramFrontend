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
              <q-input label="Username" v-model="username" />
            </div>
            <div class="input-box">
              <q-input label="Password" :type="isPwd ? 'password' : 'text'" v-model="password">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
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
export default {
  data () {
    return {
      username: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    login () {
      if (this.username && this.password) {
        // Add your login logic here
      } else {
        this.$q.notify({
          message: 'Please enter a valid username and password',
          color: 'negative'
        })
      }
    },
    goToRegisterPage () {
      // Add navigation logic to the register page
    }
  }
}
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
