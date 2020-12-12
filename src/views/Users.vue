<template>
  <v-card
    max-width="600px"
    class="mx-auto"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>Users</v-toolbar-title>

      <v-spacer></v-spacer>

      <UserForm />
    </v-toolbar>
    <v-list shaped>
      <v-list-item-group>
        <v-list-item
          v-for="user in getAllUsers"
          :key="user.id"
        >
          <v-list-item-icon>
            <EditUser :userId="user.id" />
          </v-list-item-icon>
          <v-list-item-content class="pl-12">
            <router-link :to="`/todo/${user.id}`">
              <v-list-item-title v-text="user.name"></v-list-item-title>
            </router-link>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn
              icon
              @click="handleDelete(user.id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { ActionTypes } from '../store/action-types'
import UserForm from '../components/UserForm.vue'
import EditUser from '../components/EditUser.vue'

export default Vue.extend({
  name: 'User',

  components: {
    UserForm,
    EditUser
  },

  computed: {
    ...mapGetters([
      'getAllUsers'
    ])
  },

  methods: {
    async getUsers () {
      await this.$store.dispatch(ActionTypes.GET_USERS)
    },
    async handleDelete (id: number) {
      await this.$store.dispatch(ActionTypes.DELETE_USER, id)
      await this.$store.dispatch(ActionTypes.GET_USERS)
    }
  },

  mounted () {
    this.getUsers()
  }

})
</script>
