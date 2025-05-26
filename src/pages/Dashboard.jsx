import useTaskStore from "../store/useTaskStore";
import TaskCard from "../components/TaskCard";
import { useState } from "react";
import AddTaskModal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function Dashboard({ searchQuery,view }) {

  const { tasks, rmTask, mrkTask } = useTaskStore();
  const [ismodal, setIsmodal] = useState(false)
  const [sortOrder, setsortOrder] = useState("")
  

  const filteredTasks = searchQuery ? tasks.filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.desc.toLowerCase().includes(searchQuery.toLowerCase()) || task.Status.toLowerCase().includes(searchQuery.toLowerCase())) : tasks

  const sortedtasks = sortOrder ? filteredTasks.slice().sort((a, b) => {
    const da = new Date(a.dueDate), db = new Date(b.dueDate);
    return sortOrder === "asc" ? da - db : db - da
  }) : filteredTasks

  const getTasksForDate = (date) =>
    tasks.filter(
      (t) =>
        new Date(t.dueDate).toDateString() === date.toDateString()
    );

  if (tasks.length === 0) {
    return (

      <div className="p-6 text-center text-gray-500">
        🎉 No tasks yet—click “+” to add your first one!
      </div>
    )
  }

  return (
    <>
      {view == "list" ? (
        <div>
          <h2>My Tasks</h2>
          <select value={sortOrder}
            onChange={e => setsortOrder(e.target.value)}>
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
            deltask={() => rmTask(item.Id)}
            mrkdone={() => mrkTask(item.Id)}
          />))}
          <Button onClick={() => setIsmodal(true)}
            children={"Add Task"} />
        </div>
      ) : (
        <Calendar

          onClickDay={()=>{setIsmodal(true)}}
          tileContent={({ date, view }) =>
            view === 'month' && getTasksForDate(date).length > 0 ? (
              <div className="mt-1 flex justify-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
              </div>
            ) : null
          }
          tileClassName={({ date, view }) =>
            view === 'month' && getTasksForDate(date).length > 0
              ? 'bg-blue-100'
              : null
          } />
        )
      }
      {ismodal && <AddTaskModal onClose={() => setIsmodal(false)} />}
    </>
  )
}