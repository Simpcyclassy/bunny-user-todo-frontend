<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-toolbar-title class="title white--text pl-0">
              Users
            </v-toolbar-title>

            <v-spacer></v-spacer>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <UserForm />
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Users List
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="user in getAllUsers"
              :key="user.id"
              small
            >
              <div>
                <EditUser />
                <div class="font-weight-normal">
                  <strong>{{ user.name }}</strong> @{{ user.time }}
                </div>
                <v-btn>View todo</v-btn>
                <v-btn icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import UserForm from '../components/UserForm.vue'
import EditUser from '../components/EditUser.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    UserForm,
    EditUser
  },

  computed: {
    ...mapGetters([
      'getAllUsers'
    ])
  }
})
</script>
