import { useState } from "react";
import useTaskStore from "../../store/useTaskStore";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { toast } from "react-toastify";
import { ModalProps,FormErrors,TaskStatus } from "../../types";

const AddTaskModal: React.FC<ModalProps> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const { addTask } = useTaskStore();

  const handleSubmit = ():void => {
    // Simple validation
    const newErrors: FormErrors={};
    
    if (!title.trim()) {
      newErrors.title = "Task title is required";
    }
    
    if (!dueDate) {
      newErrors.dueDate = "Due date is required";
    }

    // If there are errors, show them and stop
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    addTask({
      Id: crypto.randomUUID(),
      title: title.trim(),
      desc: description.trim(),
      Status: TaskStatus.PENDING,
      dueDate
    });
    
    toast.success('Task added!');
    onClose();
  };

  // Clear error when user starts typing
  const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setTitle(e.target.value);
    if (errors.title) {
      setErrors(prev => ({ ...prev, title: "" }));
    }
  };

  const handleDueDateChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setDueDate(e.target.value);
    if (errors.dueDate) {
      setErrors(prev => ({ ...prev, dueDate: "" }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">New Task</h2>
            <p className="text-sm text-gray-600">Create a new task to stay organized</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Title Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Task Title <span className="text-red-500">*</span>
            </label>
            <Input
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm placeholder-gray-500 ${
                errors.title ? 'border-red-300' : 'border-gray-300'
              }`}
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter task title..."
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          {/* Description Textarea */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <Textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm placeholder-gray-500 resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add task description (optional)..."
              rows={4}
            />
          </div>

          {/* Due Date Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Due Date <span className="text-red-500">*</span>
            </label>
            <Input
              type="date"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm ${
                errors.dueDate ? 'border-red-300' : 'border-gray-300'
              }`}
              value={dueDate}
              onChange={handleDueDateChange}
            />
            {errors.dueDate && (
              <p className="text-sm text-red-600">{errors.dueDate}</p>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 p-6 bg-gray-50 border-t border-gray-100 rounded-b-xl">
          <Button 
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-sm"
          >
            Cancel
          </Button>
          
          <Button 
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm transition-colors duration-200 flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
}
export default AddTaskModal