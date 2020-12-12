import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State, UserType, TaskType, UserPayload, TaskPayload } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_USERS](state: S, payload: UserType): void;
  [MutationTypes.SET_USER](state: S, payload: string): void;
  [MutationTypes.SET_UPDATE_MESSAGE](state: S, payload: string): void;
  [MutationTypes.SET_NEW_USER](state: S, payload: UserPayload): void;
  [MutationTypes.SET_TASKS](state: S, payload: TaskType): void;
  [MutationTypes.SET_NEW_TASK](state: S, payload: TaskPayload): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USERS] (state, payload: UserType) {
    state.users = payload
  },
  [MutationTypes.SET_USER] (state, payload: string) {
    state.currentUser = payload
  },
  [MutationTypes.SET_UPDATE_MESSAGE] (state, payload: string) {
    state.message = payload
  },
  [MutationTypes.SET_NEW_USER] (state, payload: UserPayload) {
    state.users.unshift(payload)
  },
  [MutationTypes.SET_TASKS] (state, payload: TaskType) {
    state.tasks = payload
  },
  [MutationTypes.SET_NEW_TASK] (state, payload: TaskPayload) {
    state.tasks.unshift(payload)
  }
}
