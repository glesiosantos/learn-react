import { useState } from 'react'
import AddTasks from './components/AddTask'
import Tasks from './components/Task'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      description: 'Aprender a usar o react para o dia a dia',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Estudar Mercado',
      description: 'Aprender as ferramentas do mercado financeiro',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Desenvolver sistema de orçamento de serviços',
      description: 'Elaborar o sistema de controle de orçamentos de serviços',
      isCompleted: false
    }
  ])

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
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks />
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
