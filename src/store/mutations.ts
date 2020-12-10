import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State, UserType, TaskType } from './state'

export type UserPayload = { name: string };

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: UserType): void;
  [MutationTypes.SET_TASK](state: S, payload: TaskType): void;
  [MutationTypes.SET_NEW_USER](state: S, payload: UserPayload): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER] (state, payload: UserType) {
    state.users = payload
  },
  [MutationTypes.SET_TASK] (state, payload: TaskType) {
    state.tasks = payload
  },
  [MutationTypes.SET_NEW_USER] (state, payload: UserPayload) {
    state.users.push(payload)
  }
}
