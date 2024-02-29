import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Task = {
  id: string,
  name: string,
  status: 'completed' | 'pending'
}

const taskSlice = createSlice({
  name: 'tasker',
  initialState: {
    task: [] as Task[],
    pending: [] as Task[]
  },
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.task.push({
        name: action.payload,
        id: crypto.randomUUID(),
        status: 'pending',
      })
    },
    markAsCompleted: (state, action: PayloadAction<string>) => {
      const taskToComplete = state.task.find(t => t.id === action.payload)
      if (!taskToComplete) {
        console.log(`No existe task con id ${action.payload}`)
        return
      }

      taskToComplete.status = 'completed'
    }
  }
})

export const { addTask, markAsCompleted } = taskSlice.actions


export default taskSlice.reducer