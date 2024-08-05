import React from 'react';
import Task from '@/model/Task';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  onMarkAsDone: (taskTitle: string) => void; // Use taskTitle
  onDelete: (taskTitle: string) => void; // Use taskTitle
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onMarkAsDone, onDelete }) => {
  return (
    

    
    <div className={styles.card}>
      <h3 className={styles.title}>{task.title}</h3>
      <p className={styles.description}>{task.description}</p>
      <div className={styles.btn}>
        <button className={styles.button} onClick={() => onMarkAsDone(task.title)}>MarkDone</button>
        <button className={styles.button} onClick={() => onDelete(task.title)}>Delete</button>
      </div>
    </div>
    
  );
};

export default TaskCard;