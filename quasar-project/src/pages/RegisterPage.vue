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
              <q-input label="Username" v-model="username" />
            </div>
            <div class="input-box">
              <q-input label="Password" :type="isPwd ? 'password' : 'text'" v-model="password">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
              </q-input>
            </div>
            <div class="input-box">
              <q-input label="Confirm Password" :type="isPwd ? 'password' : 'text'" v-model="confirmPassword">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
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
export default {
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      isPwd: true
    }
  },
  methods: {
    register () {
      if (this.username && this.password && this.password === this.confirmPassword) {
        // Add your registration logic here
      } else {
        this.$q.notify({
          message: 'Please fill in all fields and make sure passwords match',
          color: 'negative'
        })
      }
    },
    goToLoginPage () {
      // Add navigation logic to the login page
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
