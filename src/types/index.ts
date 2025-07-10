// Task interface - defines the structure of a task object
export interface Task {
  Id: string;           // Using string since you're using crypto.randomUUID()
  title: string;        // Required field
  desc: string;         // Description can be empty string
  Status: TaskStatus;   // Enum for status values
  dueDate: string;      // Date in string format (YYYY-MM-DD)
}

// Enum for task status - TypeScript enums provide type safety
export enum TaskStatus {
  PENDING = "Pending",
  DONE = "Done"
}

// Props interface for components - defines what props components expect
export interface TaskCardProps {
  task: Task;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

export interface ModalProps {
  onClose: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface InputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
}

// Store interface - defines the shape of our Zustand store
export interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

// Form validation errors
export interface FormErrors {
  title?: string;
  dueDate?: string;
}

// Dashboard props
export interface DashboardProps {
  searchQuery: string;
  view: "list" | "calendar";
}

//NavBar Props
export interface NavBarProps{
    searchQuery: string;
    setSearchQuery:(query:string)=>void;
    view: "list" | "calendar";
    setView: (view: "list" | "calendar") => void;
}   