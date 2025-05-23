import {create} from "zustand"
import { toast } from "react-toastify"

const useTaskStore = create((set)=>({
    tasks: [{Id:1,title: "task1",desc:"blahblah1",Status:"Done",dueDate:"2025/06/01"},{Id:2,title: "task2",desc:"blahblah2",Status:"Pending",dueDate:"2025/06/03"}],

    addTask: (task)=>set((state)=>({
        tasks: [...state.tasks,task]
    })),
    rmTask: (id)=>set((state)=>{
        const newtasks = state.tasks.filter(task => task.Id !== id)
        toast.error("Task removed");
        return { tasks: newtasks };
    }),
    mrkTask: (id)=>set((state)=>({
        tasks: state.tasks.map((task)=>
            task.Id === id ? {...task,Status: task.Status === "Pending" ? "Done" : "Pending"}:task
        )
    })),
}))
export default useTaskStore