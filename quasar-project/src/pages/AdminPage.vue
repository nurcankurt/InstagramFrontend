<template>
    <q-page>
      <!-- QTable kullanarak tablo oluşturulması -->
      <q-table
        :rows="users"
        row-key="id"
        v-model:pagination="pagination"
        :rows-per-page-options="[5, 10, 20]"
        :selection="selection"
        selection-label="Selected"
        @row-click="rowClick"
      >
      <!-- Tabloya görüntülenecek kullanıcı verileri atanıyor -->
      <!-- Kullanıcı verilerinin benzersiz anahtarının 'id' olduğu belirtiliyor -->
      <!-- Sayfalama özellikleri, tablo ile ilişkilendiriliyor -->
      <!-- Sayfa başına görüntülenecek satır sayısı seçenekleri belirleniyor -->
      <!-- Tablodaki seçili satırların saklandığı diziye bağlantı yapılıyor -->
      <!-- Seçili satırların etiketi belirleniyor -->

        <!-- Tablo gövdesi için slot -->
        <template v-slot:body="props">
          <q-tr :props="props">
            <!-- Kullanıcı fotoğrafını gösteren sütun -->
            <q-td :props="props" auto-width>
              <q-avatar :src="props.row.photo" :size="40" />
            </q-td>
            <!-- Kullanıcı adı, soyadı, email ve kullanıcı adını gösteren sütunlar -->
            <q-td :props="props">{{ props.row.firstname }} </q-td>
            <q-td :props="props">{{ props.row.secondname }}</q-td>
            <q-td :props="props">{{ props.row.email }}</q-td>
            <q-td :props="props">{{ props.row.username }}</q-td>
            <!-- Şifreyi gösteren sütun (gizleme özelliği)-->
            <q-td :props="props">
              <div>
                <div v-if="props.row.showPassword">
                  {{ props.row.password }}
                </div>
                <div v-else>
                  <q-icon
                    :name="props.row.showPassword ? 'visibility_off' : 'visibility'"
                    @click="togglePassword(props.row)"
                  />
                </div>
              </div>
            </q-td>
            <!-- Kullanıcı düzenleme ve silme işlemlerini içeren sütun -->
            <q-td :props="props">
              <div>
                <q-btn icon="edit" @click="editUser(props.row)" />
                <q-btn icon="delete" @click="deleteUser(props.row)" />
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <!-- Kullanıcı düzenleme dialog penceresi -->
      <q-dialog v-model="editDialog" persistent>
        <q-card>
          <q-card-section class="q-pt-none">
            <!-- Kullanıcı bilgilerini düzenlemek için giriş alanları -->
            <q-input v-model="editedUser.firstname" label="First Name" />
            <q-input v-model="editedUser.secondname" label="Second Name" />
            <q-input v-model="editedUser.email" label="Email" />
            <q-input v-model="editedUser.username" label="Username" />
            <q-input
              v-model="editedUser.password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :append="[
                {
                  icon: showPassword ? 'visibility' : 'visibility_off',
                  handler: togglePassword
                }
              ]"
            />
            <!-- Kullanıcı fotoğrafını seçmek için dosya yükleyici -->
            <q-uploader
              accept="image/*"
              label="Select Photo"
              v-model="editedUser.photo"
              @added="onPhotoAdded"
            />
            <!-- Admin yetkisi için bir anahtar anahtarını açma/kapama düğmesi -->
            <q-toggle v-model="editedUser.isAdmin" label="Admin" />
          </q-card-section>
          <!-- Dialog penceresindeki düğmeler -->
          <q-card-actions align="right">
            <q-btn label="Cancel" color="negative" @click="cancelEdit" />
            <q-btn label="Save" color="primary" @click="saveEdit" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- Yeni kullanıcı eklemek için düğme -->
      <div class="q-ma-md q-pa-md" style="text-align: center;">
        <q-btn
          fab
          color="primary"
          icon="add"
          class="q-fab-bottom q-mb-md q-mr-md"
          @click="addUser"
        >
          <q-tooltip>
            <span>Add New User</span>
          </q-tooltip>
        </q-btn>
      </div>
    </q-page>
  </template>

<script>
// Vue bileşeni başlangıcı
import { api } from 'src/boot/axios'
export default {
  data () {
    return {
      // Kullanıcı verileri, sayfalama, seçili satırlar ve düzenleme penceresi durumları
      users: [],
      pagination: { sortBy: 'username', descending: false, page: 1, rowsPerPage: 10 },
      selection: [],
      editDialog: false,
      editedUser: {},
      showPassword: false
    }
  },
  mounted () {
    // Fetch user list from the backend API
    this.fetchUserList()
  },
  methods: {
    rowClick () {
      // Satıra tıklama işlevi gerekiyorsa burada işlemler eklenir
    },
    fetchUserList () {
      // Make an HTTP GET request to your backend API endpoint
      api.get('/users')
        .then(response => {
          // Update the 'users' data property with the fetched user list
          this.users = response.data
        })
        .catch(error => {
          console.error('Error fetching user list:', error)
        })
    },
    deleteUser (user) {
    },
    editUser (user) {
      this.editedUser = { ...user }
      this.editDialog = true
    },
    // Düzenleme işlemi iptal edildiğinde çağrılan işlev
    cancelEdit () {
      this.editDialog = false
    },
    saveEdit () {
      this.editDialog = false
    },
    addUser () {
      this.editedUser = {
        firstname: '',
        secondname: '',
        email: '',
        username: '',
        password: '',
        photo: '/image/instagram-logo.jpg',
        showPassword: false,
        isAdmin: false
      }
      this.editDialog = true
    },
    // Şifreyi gösterme/gizleme anahtarını değiştirme işlevi
    togglePassword () {
      this.showPassword = !this.showPassword
    },
    // Fotoğraf eklendiğinde çağrılan işlev
    onPhotoAdded (files) {
      // Kullanıcının fotoğrafını güncelle
      if (files.length > 0) {
        this.editedUser.photo = URL.createObjectURL(files[0])
      }
    }
  }
}
</script>

  <style scoped>
  </style>
