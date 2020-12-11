<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
      <v-app-bar
      dark
      color="pink"
    >
      <v-toolbar-title>{{ getUser }}'s todo</v-toolbar-title>

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
            :color="colorClass(item.state)"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title v-text="item.description"></v-card-title>
                <v-list-item-icon>
                  <EditTask />
                </v-list-item-icon>
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
import { ActionTypes } from '../store/action-types'
import TaskForm from '../components/TaskForm.vue'
import EditTask from '../components/EditTask.vue'

export default Vue.extend({
  name: 'Tasks',

  components: {
    TaskForm,
    EditTask
  },

  computed: {
    ...mapGetters([
      'getTodo',
      'getUser'
    ])
  },
  methods: {
    colorClass (index) {
      let colorClass = ''

      if (index === 'todo') {
        colorClass = '#e67d21'
      } else {
        colorClass = 'grey'
      }

      return colorClass
    },

    async getTodos () {
      const userId = this.$route.params.id
      await this.$store.dispatch(ActionTypes.GET_TASKS, userId)
    },

    async getCurrentUser () {
      const userId = this.$route.params.id
      await this.$store.dispatch(ActionTypes.GET_USER, userId)
    }

  },

  watch: {
    '$route.params.id': {
      immediate: true,
      handler () {
        this.getTodos()
        this.getCurrentUser()
      }
    }
  }
})
</script>
