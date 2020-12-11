export enum TaskState {
  Todo = 'todo',
  Done = 'done',
}

export type UserType = { id?: string; name: string}[];
const users = [] as UserType

export type TaskType = { id?: string; description: string; state?: TaskState; userId: string}[];
const tasks = [] as TaskType

export type UserPayload = { id?: string; name: any };

export type TaskPayload = { id?: string; description: any; userId: string };

export const state = {
  users,
  tasks,
  message: '',
  currentUser: ''
}

export type State = typeof state
