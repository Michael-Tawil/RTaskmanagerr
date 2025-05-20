import useTaskStore from "../store/useTaskStore";
import TaskCard from "../components/TaskCard";
import { useState } from "react";
import AddTaskModal from "../components/ui/Modal";
import Button from "../components/ui/Button";

export default function Dashboard (){

    const {tasks, rmTask,mrkTask} = useTaskStore();
    const [ismodal, setIsmodal] = useState(false)

    return(
        <>
            <h2>My Tasks</h2>
            {tasks.map((item) => (<TaskCard
                key={item.Id}
                ttitle={item.title}
                tdesc={item.desc}
                deltask={()=> rmTask(item.Id)}
                mrkdone={()=> mrkTask(item.Id)}
            />))}
            <Button onClick={()=>setIsmodal(true)}
                    children={"Add Task"}/>

            {ismodal && <AddTaskModal onClose={() => setIsmodal(false)} />}
        </>
    )
}