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
          v-for="(item, i) in getTodo"
          :key="i"
          cols="12"
        >
          <v-card
            :color="colorClass(i)"
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
import { mapGetters } from 'vuex'
import TaskForm from '../components/TaskForm.vue'
import EditTask from '../components/EditTask.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    TaskForm,
    EditTask
  },

  computed: {
    ...mapGetters([
      'getTodo'
    ])
  },
  methods: {
    colorClass (index: number) {
      let colorClass = ''

      if (this.getTodo[index].TaskState === 'todo') {
        colorClass = 'todo'
      } else {
        colorClass = 'done'
      }

      return colorClass
    }
  }
})
</script>

<style scoped>

.todo {
  color: lightblue;
}

.done {
  color: grey;
}
</style>
