import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import fpoList from './UsersList/FPOlist';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Dashboard = () => {
  const [selectedFpo, setSelectedFpo] = useState([]);

  const handleClearFilters = () => {
    setSelectedFpo([]);
  };

  const sales = [
    {
      year: 2015,
      amount: 3,
    },
    {
      year: 2016,
      amount: 4,
    },
    {
      year: 2017,
      amount: 3,
    },
    {
      year: 2018,
      amount: 5,
    },
    {
      year: 2019,
      amount: 6,
    },
    {
      year: 2020,
      amount: 7,
    },
    {
      year: 2021,
      amount: 8,
    },
    {
      year: 2022,
      amount: 7,
    },
  ];

  const purchases = [
    {
      year: 2015,
      amount: 3,
    },
    {
      year: 2016,
      amount: 4,
    },
    {
      year: 2017,
      amount: 3,
    },
    {
      year: 2018,
      amount: 5,
    },
    {
      year: 2019,
      amount: 6,
    },
    {
      year: 2020,
      amount: 7,
    },
    {
      year: 2021,
      amount: 8,
    },
    {
      year: 2022,
      amount: 7,
    },
  ];

  const inventory = [
    {
      year: 2015,
      amount: 3,
    },
    {
      year: 2016,
      amount: 4,
    },
    {
      year: 2017,
      amount: 3,
    },
    {
      year: 2018,
      amount: 5,
    },
    {
      year: 2019,
      amount: 6,
    },
    {
      year: 2020,
      amount: 7,
    },
    {
      year: 2021,
      amount: 8,
    },
    {
      year: 2022,
      amount: 7,
    },
  ];

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
              Dashboard
            </h3>
          </div>
          <div className="row">
            <div className="col">
              <div className="card shadow">
                <div className="card-body col-4">
                  <div className="filterHeading">
                    <p style={{ color: '#000', fontSize: '20px' }}>Filter</p>
                  </div>
                  <div>
                    <Autocomplete
                      multiple
                      id="checkboxes-tags-demo"
                      className='fpoNameFilter'
                      options={fpoList}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option.name}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option.name}
                        </li>
                      )}
                      value={selectedFpo}
                      onChange={(event, value) => {
                        setSelectedFpo(value);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="FPO" placeholder="Search for FPO Name" />
                      )}
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{ marginTop: '1rem', backgroundColor: '#064420' }}
                        onClick={handleClearFilters}
                      >
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 g-4 mt-2">
            <div className="col">
              <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p className="graphHeading" style={{ color: '#000', fontSize: '1.2rem', textAlign: 'center' }}>Sales (in lakh Rs.) per year</p>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width='99%' height={300}>
                  <BarChart
                    className='graph'
                    width={500}
                    height={300}
                    data={sales}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" barSize={15} fill="#105bc4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p className="graphHeading" style={{ color: '#000', fontSize: '1.2rem', textAlign: 'center' }}>Purchases (in lakh Rs.) per year</p>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width='99%' height={300}>
                  <BarChart
                    className='graph'
                    width={500}
                    height={300}
                    data={purchases}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" barSize={15} fill="#105bc4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem', marginBottom: '100px' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p className="graphHeading" style={{ color: '#000', fontSize: '1.2rem', textAlign: 'center' }}>Lac Inventory (in tonnes)</p>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width='99%' height={300}>
                  <BarChart
                    className='graph'
                    width={500}
                    height={300}
                    data={inventory}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" barSize={15} fill="#105bc4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
