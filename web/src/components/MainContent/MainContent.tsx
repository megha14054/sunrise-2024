import React from 'react';
import TaskCard from '@/components/TaskCard/TaskCard';
import { initialTasks } from '@/utils/TaskList';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <div className={styles.mainContent}>
      {initialTasks.map(task => (
        <TaskCard key={task.id} task={task} onMarkAsDone={function (taskTitle: string): void {
              throw new Error('Function not implemented.');
          } } onDelete={function (taskTitle: string): void {
              throw new Error('Function not implemented.');
          } } />
      ))}
    </div>
  );
};

export default MainContent;