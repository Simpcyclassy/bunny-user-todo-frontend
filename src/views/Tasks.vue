<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
      <v-app-bar
      dark
      color="pink"
    >
      <v-toolbar-title>User X</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <TaskForm />
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-subtitle v-text="item.description"></v-card-subtitle>

                <v-card-actions>
                  <EditTask />
                </v-card-actions>
              </div>
              <v-checkbox></v-checkbox>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import TaskForm from '../components/TaskForm.vue'
import EditTask from '../components/EditTask.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    TaskForm,
    EditTask
  },

  data: () => ({
    items: [
      {
        id: 'hjcbreij',
        color: '#1F7087',
        description: 'Supermodel',
        state: 'todo',
        userId: 'jechei'
      },
      {
        id: 'hjcbreij',
        color: '#952175',
        description: 'Halcyon Days',
        state: 'todo',
        userId: 'jechei'
      },
      {
        id: 'hjcbreij',
        color: '#952175',
        description: 'Halcyon Days',
        state: 'todo',
        userId: 'jechei'
      }
    ]
  })
})
</script>
