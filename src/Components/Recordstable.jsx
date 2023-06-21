import React, { useEffect, useState } from 'react';
import axios from "./Axios";

function Recordstable() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data.users);
      }
      catch (error) {
        setIsError(error.message);
      }
    };

    getData();
  }, []);

  console.log(users);
  return (
    <div>
      {(isError !== "" && <h2>{isError}</h2>) ||

        <div>
          <h1 className='display-5'>User Table</h1>
          <table className='table table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Username</th>
                <th>Birth Date</th>
                <th>City</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
                  <td>{user.username}</td>
                  <td>{user.birthDate}</td>
                  <td>{user.address.city}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default Recordstable