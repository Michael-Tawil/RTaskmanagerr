# Task Manager App

A modern, responsive task management application built with React that helps you organize and track your daily tasks efficiently.

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

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Zustand** - State management with localStorage persistence
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

4. **Open your browser**
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
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   └── Textarea.jsx
│   ├── Navbar.jsx
│   └── TaskCard.jsx
├── pages/
│   └── Dashboard.jsx
├── store/
│   └── useTaskStore.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Key Features Breakdown

### State Management
- Centralized state management using Zustand
- Automatic localStorage persistence
- Optimistic updates with error handling

### Form Validation
- Real-time input validation
- Required field validation
- Character limits and constraints
- Visual error feedback

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

## 👤 Author

**Michael Tawil**

## Live Deployment

https://tiny-alfajores-159531.netlify.app/
