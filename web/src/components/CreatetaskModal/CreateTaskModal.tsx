// src/components/CreateTaskModal/CreateTaskModal.tsx
import React, { useState } from 'react';
import styles from './CreateTaskModal.module.css';

interface CreateTaskModalProps {
  onCreate: (title: string, description: string, persona: string, group: number) => void;
  onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [persona, setPersona] = useState('');
  const [group, setGroup] = useState(1);

  const handleSubmit = () => {
    if (title && description && persona && group) {
      onCreate(title, description, persona, group);
      setTitle('');
      setDescription('');
      setPersona('');
      setGroup(1);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Create New Task</h2>
        <div className={styles.formGroup}>
          <label style={{color:"black"}}>Title:</label>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label style={{color:"black"}}>Description:</label>
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label style={{color:"black"}}>Persona:</label>
          <input type="text" placeholder="Persona" value={persona} onChange={(e) => setPersona(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label style={{color:"black"}}>Group:</label>
          <input type="number" placeholder="Group" value={group} onChange={(e) => setGroup(Number(e.target.value))} />
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={handleSubmit}>Create</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;