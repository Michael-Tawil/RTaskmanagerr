# Task Manager App

A modern, responsive task management application built with **React and TypeScript** that helps you organize and track your daily tasks efficiently with full type safety and enhanced developer experience.

## 🔄 TypeScript Migration

This project has been **upgraded from JavaScript to TypeScript** to improve code quality, type safety, and developer experience.

### What Was Converted
- ✅ **All React components** (.jsx → .tsx)
- ✅ **Zustand store** with full TypeScript typing
- ✅ **Component interfaces** for type-safe prop passing
- ✅ **Event handlers** with proper typing
- ✅ **Form validation** with typed error handling

### TypeScript Features Implemented
- **Interface-driven development** with clear component contracts
- **Type-safe state management** using Zustand with TypeScript
- **Enum usage** for task status (Pending/Done)
- **Generic typing** for reusable components
- **Event handler typing** for React events

### Benefits Gained
- 🛡️ **Compile-time error detection** - Catch bugs before runtime
- 🚀 **Enhanced IDE support** - Better autocomplete and refactoring
- 📚 **Self-documenting code** - Interfaces serve as documentation
- 🔧 **Safer refactoring** - Type system prevents breaking changes

## ✨ Features

- **Task Management**: Create, edit, and delete tasks with ease
- **Dual View Modes**: Switch between list view and calendar view
- **Real-time Search**: Instantly search through tasks by title, description, or status
- **Smart Sorting**: Sort tasks by due date (ascending/descending)
- **Status Tracking**: Mark tasks as pending or completed
- **Data Persistence**: Tasks are automatically saved to localStorage
- **Form Validation**: Input validation with real-time error feedback
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Type Safety**: Full TypeScript implementation for better code quality

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety and enhanced developer experience
- **Zustand** - State management with TypeScript integration
- **Tailwind CSS** - Utility-first CSS framework
- **React Calendar** - Calendar component for date visualization
- **React Toastify** - Toast notifications for user feedback
- **Vite** - Build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   cd task-manager-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Type checking**
   ```bash
   npm run type-check
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 📱 Usage

### Adding Tasks
1. Click the "Add New Task" button
2. Fill in the task title (required)
3. Add an optional description
4. Select a due date (required)
5. Click "Add Task" to save

### Managing Tasks
- **Complete/Uncomplete**: Click "Mark Done" or "Mark Pending" to toggle task status
- **Delete**: Click the "Delete" button to remove a task
- **Search**: Use the search bar to find specific tasks
- **Sort**: Use the dropdown to sort tasks by due date

### View Modes
- **List View**: Traditional task list with detailed information
- **Calendar View**: Visual calendar showing tasks on their due dates

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          ← TypeScript
│   │   ├── Input.tsx           ← TypeScript
│   │   ├── Modal.tsx           ← TypeScript
│   │   └── Textarea.tsx        ← TypeScript
│   ├── Navbar.tsx              ← TypeScript
│   └── TaskCard.tsx            ← TypeScript
├── pages/
│   └── Dashboard.tsx           ← TypeScript
├── store/
│   └── useTaskStore.ts         ← TypeScript
├── types/
│   └── index.ts                ← Type definitions
├── App.tsx                     ← TypeScript
├── main.tsx                    ← TypeScript
├── tsconfig.json               ← TypeScript config
└── index.css
```

## 🎨 Key Features Breakdown

### TypeScript Implementation
```typescript
interface Task {
  Id: string;
  title: string;
  desc: string;
  Status: TaskStatus;
  dueDate: string;
}

enum TaskStatus {
  PENDING = "Pending",
  DONE = "Done"
}

interface TaskCardProps {
  task: Task;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}
```

### State Management
- Centralized state management using Zustand with TypeScript
- Automatic localStorage persistence
- Type-safe store interface
- Optimistic updates with error handling

### Form Validation
- Real-time input validation with TypeScript
- Required field validation
- Character limits and constraints
- Type-safe error feedback

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Adaptive navigation

## 📈 Future Enhancements

- [ ] Task categories and tags
- [ ] Priority levels
- [ ] Task sharing and collaboration
- [ ] Export/import functionality
- [ ] Dark mode theme
- [ ] Drag and drop reordering
- [ ] Advanced TypeScript patterns (generics, utility types)

## 👤 Author

**Michael Tawil**

## 🌐 Live Deployment

https://tiny-alfajores-159531.netlify.app/

---

*This project demonstrates modern React development with TypeScript, showcasing type-safe component architecture, state management, and user interface design.*
