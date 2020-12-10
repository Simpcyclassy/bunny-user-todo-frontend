import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State, UserType, TaskType } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: UserType): void;
  [MutationTypes.SET_TASK](state: S, payload: TaskType): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER] (state, payload: UserType) {
    state.users = payload
  },
  [MutationTypes.SET_TASK] (state, payload: TaskType) {
    state.tasks = payload
  }
}
