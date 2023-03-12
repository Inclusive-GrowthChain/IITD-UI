import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Histogram from 'react-chart-histogram';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import fpoList from './UsersList/FPOlist';
import "./IITDhanbad.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Dashboard = () => {
  // const [aggregated, setAggregated] = useState(true);
  // const [individual, setIndividual] = useState(false);
  const currentFPO = useState([]);

  const labels = ['2016', '2017', '2018'];
  const data = [324, 45, 672];
  const options2 = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };

  const [selectedFpo, setSelectedFpo] = useState([]);

  const handleClearFilters = () => {
    setSelectedFpo([]);
  };

  return (
    <div className="itemContainer" style={{ height: '675px' }}>
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
                      // style={{ width: 500 }}
                      renderInput={(params) => (
                        <TextField {...params} label="FPO" placeholder="Search for FPO Name" />
                      )}
                    />
                  </div>
                  {/* clear filters button */}
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
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-2">
            <div className="col">
              {
                currentFPO === 'All' && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options2}
                      className="histogram"
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <p className="graphHeading" style={{ color: '#000', fontSize: '1.5rem' }}>Aggregated Sales of FPO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                currentFPO !== 'All' && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options2}
                      className="histogram"
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <p className="graphHeading" style={{ color: '#000', fontSize: '1.5rem' }}>Individual Sales of {currentFPO}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col">
              {
                currentFPO === 'All' && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options2}
                      className="histogram"
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <p className="graphHeading" style={{ color: '#000', fontSize: '1.5rem' }}>Aggregated Purchases of FPO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                currentFPO !== 'All' && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options2}
                      className="histogram"
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <p className="graphHeading" style={{ color: '#000', fontSize: '1.5rem' }}>Individual Purchases of {currentFPO}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col">
              {
                currentFPO === 'All' && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options2}
                      className="histogram"
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <p className="graphHeading" style={{ color: '#000', fontSize: '1.5rem' }}>Aggregated Lac Inventory of FPO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                currentFPO !== 'All' && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options2}
                      className="histogram"
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <p className="graphHeading" style={{ color: '#000', fontSize: '1.5rem' }}>Individual Lac Inventory of {currentFPO}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
