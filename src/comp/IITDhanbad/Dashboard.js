import react, { useState, useEffect } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Histogram from 'react-chart-histogram';

const Dashboard = () => {
  const [aggregated, setAggregated] = useState(true);
  const [individual, setIndividual] = useState(false);

  const labels = ['2016', '2017', '2018'];
  const data = [324, 45, 672];
  const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };

  return (
    <div className="itemContainer" style={{height: '675px'}}>
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
                <div className="card-body col-3">
                  <div className="">
                    <p style={{ color: '#000', fontSize: '20px' }}>Filter</p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="formCheck-1"
                          name="aggregated"
                          checked={aggregated}
                          onChange={() => {
                            setAggregated(true);
                            setIndividual(false);
                          }}
                        />
                        <label className="form-check-label" htmlFor="formCheck-1" style={{ color: '#000' }}>
                          Aggregated
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="formCheck-2"
                          name="individual"
                          checked={individual}
                          onChange={() => {
                            setIndividual(true);
                            setAggregated(false);
                          }}
                        />
                        <label className="form-check-label" htmlFor="formCheck-2" style={{ color: '#000' }}>
                          Individual
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-2">
            <div className="col">
              {
                aggregated && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options}
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h4 style={{ color: '#000' }}>Aggregated Sales of FPO</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                individual && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options}
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h4 style={{ color: '#000' }}>Individual Sales of FPO</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col">
              {
                aggregated && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options}
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h4 style={{ color: '#000' }}>Aggregated Purchases of FPO</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                individual && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options}
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h4 style={{ color: '#000' }}>Individual Purchases of FPO</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col">
              {
                aggregated && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options}
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h4 style={{ color: '#000' }}>Aggregated Lac Inventory of FPO</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                individual && (
                  <div className="card" style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '2rem' }}>
                    <Histogram
                      xLabels={labels}
                      yValues={data}
                      width='450'
                      height='300'
                      options={options}
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h4 style={{ color: '#000' }}>Individual Lac Inventory of FPO</h4>
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
