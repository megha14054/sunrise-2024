import React, { useState } from 'react';
import Task from '@/model/Task';

interface UpdateTaskModalProps {
  task: Task;
  onUpdate: (taskId: number, updatedTask: Partial<Omit<Task, 'id'>>) => void;
  onClose: () => void;
}

const UpdateTaskModal: React.FC<UpdateTaskModalProps> = ({ task, onUpdate, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [persona, setPersona] = useState(task.persona);
  const [group, setGroup] = useState(task.group);

  const handleSubmit = () => {
    onUpdate(task.id, { title, description, persona, group });
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <input type="text" value={persona} onChange={(e) => setPersona(e.target.value)} placeholder="Persona" required />
        <input type="number" value={group} onChange={(e) => setGroup(Number(e.target.value))} placeholder="Group" required />
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateTaskModal;