// src/components/Sidebar/Sidebar.tsx
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import CreateTaskModal from '@/components/CreatetaskModal/CreateTaskModal';
import UpdateTaskModal from  '@/components/UpdateTaskModal/UpdateTaskModal';
import Task from '@/model/Task';

interface SidebarProps {
  onButtonClick: (view: 'active' | 'completed' | 'all') => void;
  onCreate: (title: string, description: string, persona: string, group: number) => void;
  onUpdate: (taskId: number, updatedTask: Partial<Omit<Task, 'id'>>) => void;
  tasks: Task[];
}

const Sidebar: React.FC<SidebarProps> = ({ onButtonClick, onCreate, onUpdate, tasks }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null);

  const handleUpdateTask = () => {
    if (tasks.length > 0) {
      setTaskToUpdate(tasks[0]); // You might want to implement a way to select which task to update
      setShowUpdateModal(true);
    }
  };

  return (
    <div className={styles.sidebar}>
      <button className={styles.button} onClick={() => onButtonClick('active')}>Get Active Tasks</button>
      <button className={styles.button} onClick={() => onButtonClick('all')}>Get All Tasks</button>
      <button className={styles.button} onClick={() => onButtonClick('completed')}>Get Completed Tasks</button>
      <button className={styles.button} onClick={() => setShowCreateModal(true)}>Create New Task</button>
      {/* <button className={styles.button} onClick={handleUpdateTask}>Update Task</button> */}

      {showCreateModal && (
        <CreateTaskModal 
          onCreate={(title, description, persona, group) => {
            onCreate(title, description, persona, group);
            setShowCreateModal(false);
          }} 
          onClose={() => setShowCreateModal(false)} 
        />
      )}

      {showUpdateModal && taskToUpdate && (
        <UpdateTaskModal 
          task={taskToUpdate} 
          onUpdate={(taskId, updatedTask) => {
            onUpdate(taskId, updatedTask);
            setShowUpdateModal(false);
          }} 
          onClose={() => setShowUpdateModal(false)} 
        />
      )}
    </div>
  );
};

export default Sidebar;