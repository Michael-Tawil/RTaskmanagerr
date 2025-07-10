import {create} from "zustand"
import { toast } from "react-toastify"
import { persist } from "zustand/middleware"
import { Task,TaskStore,TaskStatus } from '../types/index'

const useTaskStore = create<TaskStore>()(
    persist(
            (set)=>({
                tasks: [{Id:"1",title: "task1",desc:"blahblah1",Status:TaskStatus.DONE,dueDate:"2025-06-01"},{Id:"2",title: "task2",desc:"blahblah2",Status:TaskStatus.PENDING,dueDate:"2025-06-03"}],

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
                        task.Id === id ? {...task,Status: task.Status === TaskStatus.PENDING ? TaskStatus.DONE : TaskStatus.PENDING}:task
                    )
                })),
            }),
            {
                name:'task-storage'
            }
    )
)


export default useTaskStore