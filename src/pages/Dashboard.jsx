import useTaskStore from "../store/useTaskStore";
import TaskCard from "../components/TaskCard";

export default function Dashboard (){

    const {tasks, rmTask,mrkTask} = useTaskStore();

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
            <button>Add + Task</button>
        </>
    )
}