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
          <span class="headline">Edit Todo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Description"
                  required
                  v-model="description"
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
            @click="handleUpdate"
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
  name: 'EditTask',

  props: {
    taskId: String
  },

  data: () => ({
    description: '',
    dialog: false
  }),

  methods: {
    async handleUpdate () {
      const description = this.description
      const userId = this.$route.params.id
      const payload = {
        id: this.taskId,
        description
      }
      await this.$store.dispatch(ActionTypes.EDIT_TASK, payload)
      this.dialog = false
      this.description = ''
      await this.$store.dispatch(ActionTypes.GET_TASKS, userId)
    }
  }

})
</script>
