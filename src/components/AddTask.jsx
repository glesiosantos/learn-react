import { Proportions } from "lucide-react"
import { useState } from "react"

function AddTasks({onAddTaskToList}) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col my-4">
      <input type="text"
        value={title} 
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digita o titulo da tarefa" 
        className="border border-slate-300 outline-slade-300 px-4 py-2 rounded-md" />
      <textarea 
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows="3" 
        placeholder="Descrição da tarefa" className="border border-slate-300 outline-slade-300 px-4 py-2 rounded-md"></textarea>
      <button 
        onClick={() => {

          if (!title.trim() || !description.trim()) {
            alert('Preencha o titulo ou a descrição da tarefa')
          } else {
            onAddTaskToList(title, description)
            setTitle('')
            setDescription('')
          }

        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
    </div>
  )
}

export default AddTasks
