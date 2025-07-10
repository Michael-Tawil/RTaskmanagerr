import useTaskStore from "../store/useTaskStore";
import TaskCard from "../components/TaskCard";
import { useState } from "react";
import AddTaskModal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { DashboardProps,Task } from "../types";

type SortOrder = "" | "asc" | "desc";

const Dashboard:React.FC<DashboardProps> =({ searchQuery,view }) =>{

  const { tasks, removeTask, toggleTask } = useTaskStore();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [sortOrder, setsortOrder] = useState<SortOrder>("")
  

  const filteredTasks:Task[] = searchQuery ? tasks.filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.desc.toLowerCase().includes(searchQuery.toLowerCase()) || task.Status.toLowerCase().includes(searchQuery.toLowerCase())) : tasks

  const sortedtasks:Task[] = sortOrder ? filteredTasks.slice().sort((a, b) => {
    const dateA = new Date(a.dueDate), dateB = new Date(b.dueDate);
    return sortOrder === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime()- dateA.getTime()
  }) : filteredTasks

  const getTasksForDate = (date:Date):Task[] =>
    tasks.filter(
      (t) =>
        new Date(t.dueDate).toDateString() === date.toDateString()
    );

  if (tasks.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
  <div className="max-w-md mx-auto text-center">
    <div className="bg-white rounded-xl shadow-md p-8 sm:p-12">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">No tasks yet</h3>
      <p className="text-gray-600 mb-6">Get started by creating your first task!</p>
      <Button 
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Your First Task
      </Button>
    </div>
    {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} />}
  </div>
</div>
    )
  }

  return (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {view === "list" ? (
        <div className="space-y-4 sm:space-y-6">
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">My Tasks</h2>
                <p className="text-sm text-gray-600">Manage and organize your daily tasks</p>
              </div>
              
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
<span className="text-sm font-medium text-gray-700 hidden sm:inline">Sort by:</span>
                <div className="relative flex-1 sm:flex-none">
                  <select 
                    value={sortOrder}
                    onChange={e => setsortOrder(e.target.value as SortOrder)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 cursor-pointer w-full sm:min-w-[140px]"
                  >
                    <option disabled value="">Sort tasks</option>
                    <option value="asc">📅 Due Date ↑</option>
                    <option value="desc">📅 Due Date ↓</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {sortedtasks.length > 0 ? (
              sortedtasks.map((item) => (
                <TaskCard
                  key={item.Id}
                  task={item}
                  onRemove={removeTask}
                  onToggle={toggleTask}
                />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks yet</h3>
                <p className="text-gray-500 mb-4">Get started by creating your first task</p>
              </div>
            )}
          </div>

          {/* Add Task Button */}
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Task
            </Button>
          </div>
        </div>
      ) : (
        /* Calendar View */
        <div className="space-y-4 sm:space-y-6">
          {/* Calendar Header */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">Calendar View</h2>
                <p className="text-sm text-gray-600">Tap dates to view or add tasks</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Tasks available</span>
              </div>
            </div>
          </div>

          {/* Calendar Container */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
            <Calendar
              className="w-full mx-auto"
              onClickDay={(date) => {
                if(getTasksForDate(date).length > 0) {
                  const temptask = getTasksForDate(date)[0]
                  alert(temptask.title)
                } else {
                  setIsModalOpen(true)
                }
              }}
              tileContent={({ date, view }) =>
                view === 'month' && getTasksForDate(date).length > 0 ? (
                  <div className="mt-1 flex justify-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  </div>
                ) : null
              }
              tileClassName={({ date, view }) => {
                if (view === 'month' && getTasksForDate(date).length > 0) {
                  return 'hover:bg-blue-50 transition-colors duration-200'
                }
                return 'hover:bg-gray-50 transition-colors duration-200'
              }}
            />
          </div>
        </div>
      )}
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <AddTaskModal onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  </div>
)
}
export default Dashboard