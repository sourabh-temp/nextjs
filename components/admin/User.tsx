"use client"
import React, { useState } from 'react';
import { UserType } from '@/types/User';
import UserForm from '@/components/admin/UserForm';
import '@/styles/admin/User.css';

function Users() {
  const [users, setUsers] = useState<UserType[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', createdAt: '2023-01-01', password: '1234455'},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', createdAt: '2023-02-10', password: '1234455' },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterBy, setFilterBy] = useState<'name' | 'latest'>('name');
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>('');

  const openForm = (user: UserType | null = null) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingUser(null);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
    showPopupMessage('User deleted successfully.');
  };

  const handleCreateOrUpdateUser = (user: Omit<UserType, 'id'>) => {
	  if (editingUser) {
	    setUsers(users.map(u => u.id === editingUser.id ? { ...user, id: editingUser.id } : u));
	    setPopupMessage('User updated successfully.');
	  } else {
	    setUsers([...users, { ...user, id: users.length + 1, createdAt: new Date().toISOString().split('T')[0] }]);
	    setPopupMessage('User created successfully.');
	  }
	  closeForm();
	  setShowPopup(true);
	  setTimeout(() => setShowPopup(false), 3000);
	};


	 const filteredUsers = users
	  .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
	  .sort((a, b) => 
	    filterBy === 'latest' 
	      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() 
	      : 0
	  );
  const showPopupMessage = (message: string) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="content">
      <h2>User Management</h2>
      <div className="user-controls">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setFilterBy(e.target.value as 'name' | 'latest')}>
          <option value="name">By Name</option>
          <option value="latest">Latest Created</option>
        </select>
        <button onClick={() => openForm()} className="create-user">Create User</button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.createdAt}</td>
              <td>
                <button onClick={() => openForm(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && (
        <UserForm
          onClose={closeForm}
          onSubmit={handleCreateOrUpdateUser}
          editingUser={editingUser}
        />
      )}

      {showPopup && <div className="popup">{popupMessage}</div>}
    </div>
  );
}

export default Users;
