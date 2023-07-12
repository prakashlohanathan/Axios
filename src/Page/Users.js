import React, { useState, useEffect } from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const API = "https://jsonplaceholder.typicode.com/users";

function UsersListing() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    Axios.get(API)
      .then((response) => {
        if (response && response.status === 200) {
          setUsers(response.data);
        }
      })
      .catch((err) => console.log("ERR: FETCHING TODO FAILED", err));
  }, []);

  const navigate = useNavigate();

  const handleEdit = (i) => {
    navigate(`/edit-/${i}`);
  };

  const handleDelete = (i) => {
    const updatedUsers = [...users];
    updatedUsers.splice(i, 1);
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    Axios.post(API, {
      name: "Prakash L",
      phone: "9988776655",
      email: "prakashlohanathan@rediff.co.in",
      username: "micky"
    })
      .then((result) => {
        const newUser = result.data;
        setUsers([newUser, ...users]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <Button variant="primary" onClick={handleAddUser} className="add-user-button">
          Add New User
        </Button>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((d, i) => (
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>{d.username}</td>
              <td>
                <div className="d-flex justify-content-center mt-3">
                  <Button variant="primary" className="me-2" onClick={() => handleEdit(i)}>
                    <i className="fa-solid fa-pen"></i>
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(i)}>
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersListing;