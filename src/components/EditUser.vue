<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon>mdi-border-color</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name"
                  required
                  v-model="name"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="handleSubmit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { ActionTypes } from '../store/action-types'

export default Vue.extend({
  name: 'EditUser',

  props: {
    userId: String
  },

  data: () => ({
    name: '',
    dialog: false
  }),

  methods: {
    async handleSubmit () {
      const name = this.name
      console.log(this.userId)
      const payload = {
        id: this.userId,
        name: { name }
      }
      console.log(payload)
      await this.$store.dispatch(ActionTypes.EDIT_USER, payload)
      this.dialog = false
      this.name = ''
      await this.$store.dispatch(ActionTypes.GET_USERS)
    }
  }

})
</script>
