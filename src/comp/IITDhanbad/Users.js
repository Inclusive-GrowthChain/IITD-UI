import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import users, { userTypes } from "./UsersList/Userlist";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Users = () => {
  const [filterUserType, setFilterUserType] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const theme = useTheme();

  function getStyles(name, filterUserType, theme) {
    return {
      fontWeight:
        filterUserType.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilterUserType(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const updateUsers = () => {
    let tempUsers = users;
    if (filterUserType.length > 0) {
      tempUsers = tempUsers.filter(user => {
        return filterUserType.includes(user.userType);
      });
    }
    setFilteredUsers(tempUsers);
  };

  useEffect(() => {
    updateUsers();
  }, [filterUserType]);

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3
              className="text-dark mb-0"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "rgb(33, 37, 41)",
              }}
            >
              Users
            </h3>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: '20%' }} className='userTypeFilterForm'>
              <InputLabel id="demo-multiple-name-label">Filter by User Type</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={filterUserType}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {userTypes.map((name) => (
                  <MenuItem
                    key={name}
                    value={name.userType}
                    style={getStyles(name, filterUserType, theme)}
                  >
                    {name.userType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="row">
            <div className="col">
              <div className="card shadow">
                <div className="table-responsive">
                  <table>
                    <thead
                      style={{
                        fontSize: "17px",
                        verticalAlign: "top",
                      }}
                    >
                      <tr>
                        <th>License Key</th>
                        <th>User Type</th>
                        <th>Name</th>
                        <th>Onboarding Date</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {
                        filteredUsers.map((user) => (
                          <tr key={user.licenseKey}>
                            <td>{user.licenseKey}</td>
                            <td>{user.userType}</td>
                            <td>{user.name}</td>
                            <td>{user.onboardingDate}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
