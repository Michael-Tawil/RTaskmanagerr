import { useState } from "react";
import useTaskStore from "../../store/useTaskStore";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { toast } from "react-toastify";

export default function AddTaskModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const {addTask} = useTaskStore();

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTask({
      Id: crypto.randomUUID(),
      title,
      desc,
      done: false,
    });
    onClose();
    toast.success('Task added!');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">New Task</h2>
        <Input
          className="w-full border border-gray-300 p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <Textarea
          className="w-full border border-gray-300 p-2 rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
        />
        <div className="flex justify-end gap-4">
          <Button onClick={handleSubmit} 
          children={"Add"}
          className="!bg-green-600"/>
          <Button onClick={onClose}
          className="text-white-500 px-4 py-2 bg-red-500"
            children={"Cancel"}/>
        </div>
      </div>
    </div>
  );
}
