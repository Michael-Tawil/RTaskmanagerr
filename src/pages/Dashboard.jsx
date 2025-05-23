import useTaskStore from "../store/useTaskStore";
import TaskCard from "../components/TaskCard";
import { useState } from "react";
import AddTaskModal from "../components/ui/Modal";
import Button from "../components/ui/Button";

export default function Dashboard ({searchQuery}){

    const {tasks, rmTask,mrkTask} = useTaskStore();
    const [ismodal, setIsmodal] = useState(false)
    const [sortOrder, setsortOrder] = useState("")
    const [view,setView] = useState("default")

    const filteredTasks = searchQuery ? tasks.filter((task)=>task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        task.desc.toLowerCase().includes(searchQuery.toLowerCase()) || task.Status.toLowerCase().includes(searchQuery.toLowerCase())) : tasks

    const sortedtasks = sortOrder ? filteredTasks.slice().sort((a,b)=>{
        const da = new Date(a.dueDate), db = new Date(b.dueDate);
        return sortOrder==="asc" ? da - db : db - da
    }) : filteredTasks

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
            <select value={sortOrder}
            onChange={e=>setsortOrder(e.target.value)}>
                <option disabled value="">Select your option</option>
                <option value="asc">Due Date ↑</option>
                <option value="desc">Due Date ↓</option>
            </select>
            {sortedtasks.map((item) => (<TaskCard
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