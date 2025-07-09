export interface Task {
    Id: string;
    title:string;
    desc:string;
    Status: 'Pending'|'Done';
    DueDate:string;
}

export interface TaskStore{
    tasks: Task[];
    addTask:(task:Task)=>void;
    removeTask:(id:string)=>void;
    toggleTask:(id:string)=>void;
}

export interface TaskCardProps{
    task:Task;
}

export interface DashboardProps{
    searchQuery:string;
    view:'list'|'calendar';
}

export interface addTaskModalProps{
    onClose:()=>void;
}
export interface TaskFormData{
    title:string;
    description:string;
    dueDate:string;
}
export interface FormErrors {
    tite?:string;
    dueDate?:string;
}