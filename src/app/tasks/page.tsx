'use client'

import { addTask, markAsCompleted } from '@/lib/store/features/doubler/doublerSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'

function compenent() {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasker.task)
  const [newTaskName, setNewTaskName] = useState('')

  const sendTask = () => {
    console.log('sendTask invoked', newTaskName)
    dispatch(addTask(newTaskName));
  }
  const completeTask = (id: string) => {
    dispatch(markAsCompleted(id));
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value)
  }
  return (
    <>
      {tasks.map(t => (
        <button key={t.id} onClick={() => completeTask(t.id)}>
          <span>{t.name} - {t.status}</span>
        </button>
      ))}
      <h2>Anadir una tarea</h2>
      <input className="ring-1 ring-inset ring-slate-300 rounded-md" type="text" value={newTaskName} onChange={handleInputChange} />
      <button className='rounded-md bg-indigo-400' onClick={sendTask}>Enviar tarea</button>
    </>)
}

export default compenent