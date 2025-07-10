import Button from "./ui/Button"
import { TaskCardProps } from "../types";

const TaskCard: React.FC<TaskCardProps> = ({task, onRemove, onToggle}) => {
    const isCompleted = task.Status !== "Pending";
    
    return(
        <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 max-w-sm">
            {/* Header with status indicator */}
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-xl font-semibold text-gray-800 leading-tight ${isCompleted ? 'line-through text-gray-500' : ''}`}>
                        {task.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        isCompleted 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                    }`}>
                        {task.Status}
                    </span>
                </div>
                
                <p className={`text-gray-600 text-sm mb-4 leading-relaxed ${isCompleted ? 'line-through opacity-60' : ''}`}>
                    {task.desc}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Due:</span>
                    <span className="ml-1">{task.dueDate}</span>
                </div>
            </div>
            
            {/* Action buttons */}
            <div className="px-6 pb-6 pt-2 flex gap-3 mt-auto">
                <Button 
                    onClick={()=>onToggle(task.Id)}
                    className={`flex-1 ${isCompleted ? 'bg-gray-500 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200`}
                >
                    {status === "Pending" ? "Mark Done" : "Mark Pending"}
                </Button>
                
                <Button 
                    onClick={()=>onRemove(task.Id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                </Button>
            </div>
        </div>
    )
}
export default TaskCard