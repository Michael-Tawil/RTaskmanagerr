import useTaskStore from "../store/useTaskStore";
import TaskCard from "../components/TaskCard";
import { useState } from "react";
import AddTaskModal from "../components/ui/Modal";
import Button from "../components/ui/Button";

export default function Dashboard ({searchQuery}){

    const {tasks, rmTask,mrkTask} = useTaskStore();
    const [ismodal, setIsmodal] = useState(false)

    const filteredTasks = searchQuery ? tasks.filter((task)=>task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        task.desc.toLowerCase().includes(searchQuery.toLowerCase()) || task.Status.toLowerCase().includes(searchQuery.toLowerCase())) : tasks


    if(tasks.length === 0){
        return(
        
            <div className="p-6 text-center text-gray-500">
            🎉 No tasks yet—click “+” to add your first one!
            </div>
        )
    }

    return(
        <>
            <h2>My Tasks</h2>
            {filteredTasks.map((item) => (<TaskCard
                key={item.Id}
                ttitle={item.title}
                tdesc={item.desc}
                dueDate={item.dueDate}
                status={item.Status}
                deltask={()=> rmTask(item.Id)}
                mrkdone={()=> mrkTask(item.Id)}
            />))}
            <Button onClick={()=>setIsmodal(true)}
                    children={"Add Task"}/>

            {ismodal && <AddTaskModal onClose={() => setIsmodal(false)} />}
        </>
    )
}