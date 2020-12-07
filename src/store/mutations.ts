import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State, TaskState } from './state'

export type UserPayload = { id: string; name: string };

export type TaskPayload = { id: string; description: string; state: TaskState; user; userId: string};

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: UserPayload): void;
  [MutationTypes.SET_TASK](state: S, payload: TaskPayload): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER] (state, payload: UserPayload) {
    state.users.push(payload)
  },
  [MutationTypes.SET_TASK] (state, payload: TaskPayload) {
    state.tasks.push(payload)
  }
}
