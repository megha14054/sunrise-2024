// src/pages/index.tsx
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import TaskCard from '@/components/TaskCard/TaskCard';
// import CreateTaskModal from 
import UpdateTaskModal from '@/components/UpdateTaskModal/UpdateTaskModal';
import { 
  initializeTasks, 
  getActiveTasks, 
  getCompletedTasks, 
  getAllTasks, 
  completeTask, 
  createTask, 
  updateTask, 
  deleteTask 
} from '@/modules/taskManager';
import styles from '@/styles/Home.module.css';
import Task from '@/model/Task';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [view, setView] = useState<'active' | 'completed' | 'all'>('active');

  useEffect(() => {
    initializeTasks();
    setTasks(getInitialTasks());
  }, []);

  const getInitialTasks = () => {
    const allTasks = getActiveTasks();
    return allTasks.slice(0, 2); // Show only the first two tasks initially
  };

  const handleViewChange = (view: 'active' | 'completed' | 'all') => {
    setView(view);
    switch (view) {
      case 'active':
        setTasks(getActiveTasks());
        break;
      case 'completed':
        setTasks(getCompletedTasks());
        break;
      case 'all':
        setTasks(getAllTasks());
        break;
    }
  };

  const handleCreateTask = (title: string, description: string, persona: string, group: number) => {
    createTask(title, description, persona, group);
    setTasks(getAllTasks());
  };

  const handleUpdateTask = (taskId: number, updatedTask: Partial<Omit<Task, 'id'>>) => {
    updateTask(taskId, updatedTask);
    setTasks(getAllTasks());
  };

  const handleCompleteTask = (taskTitle: string) => {
    completeTask(taskTitle);
    if (view === 'active') {
      setTasks(getActiveTasks());
    }
  };

  const handleDeleteTask = (taskTitle: string) => {
    const taskToDelete = tasks.find(task => task.title === taskTitle);
    if (taskToDelete) {
      deleteTask(taskToDelete.id);
      if (view === 'active') {
        setTasks(getActiveTasks());
      } else if (view === 'completed') {
        setTasks(getCompletedTasks());
      } else if (view === 'all') {
        setTasks(getAllTasks());
      }
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar 
        onButtonClick={handleViewChange} 
        onCreate={handleCreateTask} 
        onUpdate={handleUpdateTask} 
        tasks={tasks}
      />
      <div className={styles.mainContent}>
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onMarkAsDone={handleCompleteTask} 
            onDelete={handleDeleteTask} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;