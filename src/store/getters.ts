import { GetterTree } from 'vuex'
import { State, UserType, TaskType } from './state'

export type Getters = {
  getTodo(state: State): TaskType;
  getAllUsers(state: State): UserType;
  getMessage(state: State): string;
  getUser(state: State): string;
}

export const getters: GetterTree<State, State> & Getters = {
  getTodo: (state) => {
    return state.tasks
  },
  getAllUsers: (state) => {
    return state.users
  },
  getMessage: (state) => {
    return state.message
  },
  getUser: (state) => {
    return state.currentUser
  }
}
