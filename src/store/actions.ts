import { ActionTree, ActionContext } from 'vuex'
import axios from 'axios'
import { State, UserType, TaskType, UserPayload, TaskPayload } from './state'
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

  [ActionTypes.CREATE_NEW_USER](
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

  [ActionTypes.MARK_DONE](
    { commit }: AugmentedActionContext,
    payload: string
  ): Promise<string>;

  [ActionTypes.GET_USER](
    { commit }: AugmentedActionContext,
    payload: string
  ): Promise<string>;

  [ActionTypes.GET_TASKS](
    { commit }: AugmentedActionContext,
    payload: TaskType
  ): Promise<TaskType>;

  [ActionTypes.CREATE_NEW_TASK](
    { commit }: AugmentedActionContext,
    payload: TaskPayload
  ): Promise<TaskPayload>;

  [ActionTypes.EDIT_TASK](
    { commit }: AugmentedActionContext,
    payload: TaskPayload
  ): Promise<TaskPayload>;
}

const baseUsersUrl = 'https://bunny-user.herokuapp.com/'
const baseTaskssUrl = 'https://bunnystudio-task.herokuapp.com/'

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_USERS] ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.get(`${baseUsersUrl}api/v1/users/`)
          .then(response => {
            commit(MutationTypes.SET_USERS, response.data.data)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.CREATE_NEW_USER] ({ commit }, payload: UserPayload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.post(`${baseUsersUrl}api/v1/users/`, payload)
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
        axios.patch(`${baseUsersUrl}api/v1/users/${id}`, { name })
          .then(response => {
            commit(MutationTypes.SET_UPDATE_MESSAGE, `${name} updated successfully`)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.CREATE_NEW_TASK] ({ commit }, { userId, description }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.post(`${baseTaskssUrl}api/v1/tasks/${userId}`, { description })
          .then(response => {
            commit(MutationTypes.SET_NEW_TASK, { userId, description })
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.EDIT_TASK] ({ commit }, { id, description }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.patch(`${baseTaskssUrl}api/v1/tasks/${id}`, { description })
          .then(response => {
            console.log(response)
            commit(MutationTypes.SET_UPDATE_MESSAGE, `${description} updated successfully`)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.DELETE_USER] ({ commit }, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.delete(`${baseUsersUrl}api/v1/users/${id}`)
          .then(response => {
            commit(MutationTypes.SET_UPDATE_MESSAGE, `${response.data.data.name} deleted successfully`)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.MARK_DONE] ({ commit }, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.patch(`${baseTaskssUrl}api/v1/tasks/${id}/done`)
          .then(response => {
            console.log(response)
            commit(MutationTypes.SET_UPDATE_MESSAGE, `${response.data} is completed`)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.GET_USER] ({ commit }, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.get(`${baseUsersUrl}api/v1/users/${id}`)
          .then(response => {
            commit(MutationTypes.SET_USER, response.data.data.name)
            resolve(response.data)
          })
      }, 300)
    })
  },

  [ActionTypes.GET_TASKS] ({ commit }, userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios.get(`${baseTaskssUrl}api/v1/tasks/${userId}/all`)
          .then(response => {
            commit(MutationTypes.SET_TASKS, response.data.data)
            resolve(response.data)
          })
      }, 300)
    })
  }

}
