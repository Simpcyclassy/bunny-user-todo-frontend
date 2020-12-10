import { ActionTree, ActionContext } from 'vuex'
import axios from 'axios'
import { State, UserType, UserPayload } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_USERS](
    { commit }: AugmentedActionContext,
    payload: UserType
  ): Promise<UserType>;

  [ActionTypes.GET_NEW_USER](
    { commit }: AugmentedActionContext,
    payload: UserPayload
  ): Promise<UserPayload>;

  [ActionTypes.EDIT_USER](
    { commit }: AugmentedActionContext,
    payload: UserPayload
  ): Promise<UserPayload>;

  [ActionTypes.DELETE_USER](
    { commit }: AugmentedActionContext,
    payload: string
  ): Promise<string>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_USERS] ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.get('http://localhost:4000/api/v1/users')
          .then(response => {
            commit(MutationTypes.SET_USERS, response.data.data)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.GET_NEW_USER] ({ commit }, payload: UserPayload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.post('http://localhost:4000/api/v1/users', payload)
          .then(response => {
            commit(MutationTypes.SET_NEW_USER, payload)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.EDIT_USER] ({ commit }, { id, name }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.patch(`http://localhost:4000/api/v1/users/${id}`, name)
          .then(response => {
            commit(MutationTypes.SET_UPDATE_MESSAGE, `${name} updated successfully`)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.DELETE_USER] ({ commit }, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.delete(`http://localhost:4000/api/v1/users/${id}`)
          .then(response => {
            commit(MutationTypes.SET_UPDATE_MESSAGE, `${response.data.data.name} deleted successfully`)
            resolve(response.data)
          })
      }, 300)
    })
  }

}
