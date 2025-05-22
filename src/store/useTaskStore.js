import {create} from "zustand"
import { toast } from "react-toastify"

const useTaskStore = create((set)=>({
    tasks: [{Id:1,title: "task1",desc:"blahblah1",done:false},{Id:2,title: "task2",desc:"blahblah2",done:false}],

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
            task.Id === id ? {...task,done:!task.done}:task
        )
    })),
}))
export default useTaskStore