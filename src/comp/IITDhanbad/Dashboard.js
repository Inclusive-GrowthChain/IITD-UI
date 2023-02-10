import react, { useState, useReducer } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Histogram from 'react-chart-histogram';
import Chip from '@mui/material/Chip';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import fpoList from './UsersList/FPOlist';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const initialState = { selectedOptions: [] };

function reducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED_OPTIONS":
      return { selectedOptions: action.payload.options };

    case "REMOVE_OPTION":
      return {
        selectedOptions: state.selectedOptions.filter(
          (option) => option.id !== action.payload.id
        )
      };
    default:
      throw new Error();
  }
}

const Dashboard = () => {
  const [aggregated, setAggregated] = useState(true);
  const [individual, setIndividual] = useState(false);
  const [currentFPO, setCurrentFPO] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event, values) => {
    dispatch({ type: "SET_SELECTED_OPTIONS", payload: { options: values } });
  };

  const removeOption = (id) => {
    dispatch({ type: "REMOVE_OPTION", payload: { id: id } });
  };

  const labels = ['2016', '2017', '2018'];
  const data = [324, 45, 672];
  const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };

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

  const options2 = [
    { id: 1, title: "The Shawshank Redemption", year: 1994 },
    { id: 2, title: "The Godfather", year: 1972 },
    { id: 3, title: "The Godfather: Part II", year: 1974 },
    { id: 4, title: "The Dark Knight", year: 2008 },
    { id: 5, title: "12 Angry Men", year: 1957 },
    { id: 6, title: "Schindler's List", year: 1993 },
    { id: 7, title: "Pulp Fiction", year: 1994 },
    {
      id: 8,
      title: "The Lord of the Rings: The Return of the King",
      year: 2003
    },
    {
      id: 9,
      title: "The Good, the Bad and the Ugly",
      year: 1966
    },
    { id: 10, title: "Fight Club", year: 1999 },
    {
      id: 11,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001
    },
    {
      id: 12,
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
      checked: false
    },
    { id: 13, title: "Forrest Gump", year: 1994, checked: false },
    { id: 14, title: "Inception", year: 2010, checked: false },
    {
      id: 15,
      title: "The Lord of the Rings: The Two Towers",
      year: 2002
    },
    {
      id: 16,
      title: "One Flew Over the Cuckoo's Nest",
      year: 1975
    },
    { id: 17, title: "Goodfellas", year: 1990 },
    { id: 18, title: "The Matrix", year: 1999 },
    { id: 19, title: "Seven Samurai", year: 1954 },
    {
      id: 20,
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977
    },
    { id: 21, title: "City of God", year: 2002 },
    { id: 22, title: "Se7en", year: 1995 },
    { id: 23, title: "The Silence of the Lambs", year: 1991 },
    { id: 24, title: "It's a Wonderful Life", year: 1946 },
    { id: 25, title: "Life Is Beautiful", year: 1997 },
    { id: 26, title: "The Usual Suspects", year: 1995 },
    { id: 27, title: "Léon: The Professional", year: 1994 },
    { id: 28, title: "Spirited Away", year: 2001 },
    { id: 29, title: "Saving Private Ryan", year: 1998 },
    { id: 30, title: "Once Upon a Time in the West", year: 1968 },
    { id: 31, title: "American History X", year: 1998 },
    { id: 32, title: "Interstellar", year: 2014 }
  ];

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
                <div className="card-body col-3">
                  <div className="">
                    <p style={{ color: '#000', fontSize: '20px' }}>Filter</p>
                  </div>
                  <div>
                    {/* <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={fpoList}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Movie" />}
                    /> */}
                    <Autocomplete
                      multiple
                      options={options2}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option.title}
                      value={state.selectedOptions}
                      renderTags={(values) =>
                        values.map((value) => (
                          <Chip
                            key={value.id}
                            label={value.title}
                            onDelete={() => {
                              removeOption(value.id);
                            }}
                          />
                        ))
                      }
                      getOptionSelected={(option, value) => option.id === value.id}
                      renderOption={(option, { selected }) => (
                        <react.Fragment>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option.title}
                        </react.Fragment>
                      )}
                      style={{ width: 500 }}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Checkboxes"
                          placeholder="Favorites"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-2">
            <div className="col">
              {
                currentFPO == 'All' && (
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
                currentFPO != 'All' && (
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
                          <h4 style={{ color: '#000' }}>Individual Sales of {currentFPO}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col">
              {
                currentFPO == 'All' && (
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
                currentFPO != 'All' && (
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
                          <h4 style={{ color: '#000' }}>Individual Purchases of {currentFPO}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col">
              {
                currentFPO == 'All' && (
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
                currentFPO != 'All' && (
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
                          <h4 style={{ color: '#000' }}>Individual Lac Inventory of {currentFPO}</h4>
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
