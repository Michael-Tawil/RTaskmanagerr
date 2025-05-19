import {create} from "zustand"

const useTaskStore = create((set)=>({
    tasks: [{Id:1,title: "task 1",desc:"blah blah1",done:false},{Id:2,title: "task 2",desc:"blah blah2",done:false}],

    addTask: (task)=>set((state)=>({
        tasks: [...state.tasks,task]
    })),
    rmTask: (id)=>set((state)=>({
        tasks: state.tasks.filter(task => task.Id !== id)
    })),
    mrkTask: (id)=>set((state)=>({
        tasks: state.tasks.map((task)=>
            task.Id === id ? {...task,done:!task.done}:task
        )
    })),
    
}))

export default useTaskStore