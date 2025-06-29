import {create} from "zustand"
import { toast } from "react-toastify"
import { persist } from "zustand/middleware"

const useTaskStore = create(
    persist(
            (set)=>({
                tasks: [{Id:1,title: "task1",desc:"blahblah1",Status:"Done",dueDate:"2025-06-01"},{Id:2,title: "task2",desc:"blahblah2",Status:"Pending",dueDate:"2025-06-03"}],

                addTask: (task)=>set((state)=>({
                    tasks: [...state.tasks,task]
                })),
                removeTask: (id)=>set((state)=>{
                    const newtasks = state.tasks.filter(task => task.Id !== id)
                    toast.error("Task removed");
                    return { tasks: newtasks };
                }),
                toggleTask: (id)=>set((state)=>({
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