import { useState } from "react";
import useTaskStore from "../../store/useTaskStore";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { toast } from "react-toastify";

export default function AddTaskModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setdueDate] = useState("");


  const {addTask} = useTaskStore();

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTask({
      Id: crypto.randomUUID(),
      title,
      desc,
      Status:"Pending",
      dueDate
    });
    onClose();
    toast.success('Task added!');
  };

  return (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 w-full max-w-md max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
      {/* Modal Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">New Task</h2>
          <p className="text-sm text-gray-600">Create a new task to stay organized</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
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
          <div className="relative">
            <Input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm placeholder-gray-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title..."
            />
          </div>
        </div>

        {/* Description Textarea */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm placeholder-gray-500 resize-none"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Add task description (optional)..."
            rows={4}
          />
        </div>

        {/* Due Date Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Due Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm"
              value={dueDate}
              onChange={e => setdueDate(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            </div>
          </div>
        </div>

        {/* Form Validation Helper */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-blue-700 font-medium">Quick Tip</p>
              <p className="text-xs text-blue-600 mt-1">Be specific with your task title and set realistic due dates for better productivity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="flex items-center justify-end gap-3 p-6 bg-gray-50 border-t border-gray-100 rounded-b-xl">
        <Button 
          onClick={onClose}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 font-medium text-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cancel
        </Button>
        
        <Button 
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md flex items-center"
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
