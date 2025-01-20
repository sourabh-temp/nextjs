import React, { useState, useEffect } from 'react';
import { UserType } from '@/types/User';

interface UserFormProps {
  onClose: () => void;
  onSubmit: (user: UserType) => void;
  editingUser: UserType | null;
}

function UserForm({ onClose, onSubmit, editingUser }: UserFormProps) {
  const [formValues, setFormValues] = useState<UserType>({
  	id: 0,
    name: '',
    email: '',
    phone: '',
    password: '',
    createdAt: ''
  });

  useEffect(() => {
    if (editingUser) {
      setFormValues(editingUser);
    }
  }, [editingUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues); // Pass the form values without the id to onSubmit
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{editingUser ? 'Edit User' : 'Create User'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formValues.phone}
            onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
            required
          />
          <div className="modal-actions">
            <button type="submit">{editingUser ? 'Update User' : 'Create User'}</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
