import { GetterTree } from 'vuex'
import { State, UserType, TaskType } from './state'

export type Getters = {
  getTodo(state: State): TaskType;
  getAllUsers(state: State): UserType;
}

export const getters: GetterTree<State, State> & Getters = {
  getTodo: (state) => {
    return state.tasks
  },
  getAllUsers: (state) => {
    return state.users
  }
}
