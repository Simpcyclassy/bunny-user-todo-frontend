import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations, UserPayload } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_USER](
    { commit }: AugmentedActionContext,
    payload: UserPayload
  ): Promise<UserPayload>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_USER] ({ commit }, payload: UserPayload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(MutationTypes.SET_USER, payload)
        resolve(payload)
      }, 500)
    })
  }
}
