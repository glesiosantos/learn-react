import { useEffect, useState } from 'react'
import {v4} from 'uuid'

import AddTasks from './components/AddTask'
import Tasks from './components/Task'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function onAddTaskToList(title, description) {
    const newTask = {
      id: v4().replaceAll('-',''),
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })

    setTasks(newTask)
  }

  function onDeleteTask(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskToList={onAddTaskToList}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  )
}

export default App
