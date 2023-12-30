<template>
    <q-page class="column justify-center">
      <div class="content-container">
        <q-btn @click="showPopup" icon="add" color="primary" size="100px" round></q-btn>

        <q-popup-edit
          v-model="popupModel"
          title="Add Post"
          ok-label="Add"
          cancel-label="Cancel"
          position="top"
          transition-show="slide-up"
          transition-hide="slide-down"
          class="custom-popup"
          @ok="onPopupOK"
          @cancel="onPopupCancel"
          >

          <template v-slot:title>
            <div class="popup-title">Add Post</div>
          </template>

          <q-uploader
            v-model="fileInput"
            label="Select Image"
            accept=".jpg, .jpeg, .png"
            :max-file-size="1024 * 1024 * 1024"
            :auto-upload="false"
            class="file-uploader"
          >
            <template v-slot:prepend>
              <q-btn color="primary" @click="uploadFile">Upload</q-btn>
            </template>
          </q-uploader>

          <q-input
            v-model="textInput"
            label="What are you thinking?"
            type="textarea"
            :rows="3"
            filled
            outlined
            square
            dense
            class="text-input"
          />

          <div v-if="fileInput.length > 0" class="file-preview">
            <img v-if="fileInput[0].url" :src="fileInput[0].url" alt="Uploaded Image" />
          </div>

          <div class="popup-buttons">
            <q-btn label="Cancel" @click="onPopupCancel" class="cancel-button" />
            <q-btn label="Add" @click="onPopupOK" class="add-button" />
          </div>
        </q-popup-edit>
      </div>
    </q-page>
  </template>

<script>
export default {
  data () {
    return {
      popupModel: false,
      textInput: '',
      fileInput: []
    }
  },

  watch: {
    fileInput (newFiles) {
      console.log('File uploaded:', newFiles)
    }
  },

  methods: {
    showPopup () {
      this.popupModel = true
    },

    onPopupOK () {
      console.log('Text Input:', this.textInput)
      console.log('Selected Files:', this.fileInput)

      // Backend ile iletişim sağlanacak
      this.popupModel = false
    },

    onPopupCancel () {
      this.popupModel = false
    },

    async uploadFile () {
      try {
        const fileInput = this.$refs.fileInput
        const file = fileInput.files[0]

        if (file) {
          // Simulating file upload using Fetch API
          const formData = new FormData()
          formData.append('file', file)

          const response = await fetch('YOUR_UPLOAD_API_ENDPOINT', {
            method: 'POST',
            body: formData
          })

          if (response.ok) {
            const result = await response.json()
            // Assuming the backend returns a URL for the uploaded file
            this.fileInput = [{ url: result.fileUrl, name: file.name }]
          } else {
            console.error('File upload failed')
          }
        } else {
          console.error('No file selected')
        }
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }
}
</script>

  <style scoped>
  .column {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Yatay eksende ortala */
    align-items: center; /* Dikey eksende ortala */
    width: 100%;
    height: 100vh;
  }

  .content-container {
    max-width: 1000px;
    width: 100%;
    margin: auto;
  }

  .custom-popup {
    max-width: 1000px;
    width: 100%;
    margin: auto;
  }

  .file-uploader {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .file-uploader q-btn {
    margin-left: 10px;
  }

  .file-preview {
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: space-around; /* Adjust the spacing between images */
  }

  .file-preview img {
    width: 45%; /* Set the width of each image */
    height: 100vh;
    object-fit: contain;
  }

  .text-input {
    margin-top: 20px;
  }

  .popup-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .popup-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .add-button,
  .cancel-button {
    color: white;
    margin-left: 10px;
  }

  .add-button {
    background-color: #4caf50; /* Green */
  }

  .cancel-button {
    background-color: #f44336; /* Red */
  }

  .cancel-button:hover,
  .add-button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  </style>
