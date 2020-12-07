export enum TaskState {
  Todo = 'todo',
  Done = 'done',
}

export type UserType = { id: string; name: string}[];
const users: UserType = []

export type TaskType = { id: string; description: string; state: TaskState; user; userId: string}[];
const tasks: TaskType = []

export const state = {
  users,
  tasks
}

export type State = typeof state
