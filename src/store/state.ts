export enum TaskState {
  Todo = 'todo',
  Done = 'done',
}

export type UserType = { id?: string; name: string}[];
const users = [] as UserType

export type TaskType = { id: string; description: string; state: TaskState; user; userId: string}[];
const tasks = [] as TaskType

export type UserPayload = { id?: string; name: any };

export const state = {
  users,
  tasks,
  message: ''
}

export type State = typeof state
