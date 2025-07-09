import {create} from "zustand"
import { toast } from "react-toastify"
import { persist } from "zustand/middleware"
import { Task,TaskStore } from "@/types"

const useTaskStore = create<TaskStore>()(
    persist(
            (set)=>({
                tasks: [{Id:"1",title: "task1",desc:"blahblah1",Status:"Done",DueDate:"2025-06-01"},{Id:"2",title: "task2",desc:"blahblah2",Status:"Pending",DueDate:"2025-06-03"}],

                addTask: (task:Task)=>set((state)=>({
                    tasks: [...state.tasks,task]
                })),
                removeTask: (id:string)=>set((state)=>{
                    const newtasks = state.tasks.filter((task) => task.Id !== id)
                    toast.error("Task removed");
                    return { tasks: newtasks };
                }),
                toggleTask: (id:string)=>set((state)=>({
                    tasks: state.tasks.map((task)=>
                        task.Id === id ? {...task,Status: task.Status === "Pending" ? "Done" : "Pending"}:task
                    )
                })),
            }),
            {
                name:'task-storage'
            }
    )
)


export default useTaskStore