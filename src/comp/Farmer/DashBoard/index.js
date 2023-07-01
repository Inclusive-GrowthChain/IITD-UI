import { useQueries } from "@tanstack/react-query";
import { getCropAdvisory, getTraining } from "../../../actions/nisa";
import {
  getFpoProducts,
  getFpoLac,
  getLoanHistory,
} from "../../../actions/fpo";
import { useAuthStore } from "../../../store/useAuthStore";
import ImageSlider from "./ImageSlider";
import Loader from "../../Common/Loader";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { WeekDays, months } from "../../../constants/Date";

function Dashboard() {
  const [weatherData, setWeatherData] = useState([]);

  const [currentWeather, setCurrentWeather] = useState({
    coord: {
      lon: 73.9306,
      lat: 18.5348,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 30.92,
      feels_like: 305.64,
      temp_min: 304.92,
      temp_max: 304.92,
      pressure: 1006,
      humidity: 43,
      sea_level: 1006,
      grnd_level: 947,
    },
    visibility: 10000,
    wind: {
      speed: 9.77,
      deg: 236,
      gust: 11.48,
    },
    clouds: {
      all: 2,
    },
    dt: 1686827429,
    sys: {
      type: 2,
      id: 2083365,
      country: "IN",
      sunrise: 1686788859,
      sunset: 1686836504,
    },
    timezone: 19800,
    id: 0,
    name: "Mundhva",
    cod: 200,
  });

  const { pinCode: pincode, _id: farmerId } = useAuthStore(
    (s) => s.userDetails
  );
  
  const currentDate = new Date();
  const weekDayIndex = dayjs.unix(currentWeather?.dt).day();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?zip=${pincode},IN&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        if (!response.ok) throw new Error("Failed to retrieve weather data");
        const { list } = await response.json();
        if (!list || list.length === 0)
          throw new Error("Failed to retrieve weather data");
        const groupedForecast = list.reduce((acc, item) => {
          const date = new Date(item.dt_txt).toDateString();
          acc[date] = acc[date] ? [...acc[date], item] : [item];
          return acc;
        }, {});
        const weatherData = Object.keys(groupedForecast)
          .slice(0, 7)
          .map((date) => ({
            date,
            fields: groupedForecast[date].map((item) => ({
              date: item.dt_txt,
              temperature: item.main.temp,
              humidity: item.main.humidity,
              pressure: item.main.pressure,
              description: item.weather[0].description,
              main: item.weather[0].main,
              icon: item.weather[0].icon,
            })),
          }));
        setWeatherData(weatherData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchWeather();
  }, [pincode]);

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},IN&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        if (!response.ok) throw new Error("Failed to retrieve weather data");
        const data = await response.json();
        setCurrentWeather(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCurrentWeather();
  }, [pincode]);

  const [
    { isLoading: isLoading1, data: caList },
    { isLoading: isLoading2, data: tpList },
    { isLoading: isLoading3, data: storeItemList },
    { isLoading: isLoading4, data: sellItemList },
    { isLoading: isLoading5, data: loanList },
  ] = useQueries({
    queries: [
      {
        queryKey: ["nisa/crop-advisory"],
        queryFn: getCropAdvisory,
      },
      {
        queryKey: ["nisa/traning"],
        queryFn: getTraining,
      },
      {
        queryKey: ["fpo/product"],
        queryFn: getFpoProducts,
      },
      {
        queryKey: ["fpo/lac"],
        queryFn: getFpoLac,
      },
      {
        queryKey: ["/loans/history"],
        queryFn: () => getLoanHistory({ type: "farmer" }),
        onSuccess: () => {
          return
        },
      },
    ],
  });

  if (isLoading1 || isLoading2 || isLoading3 || isLoading4 || isLoading5)
    return <Loader wrapperCls="loader-main-right" />;

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid dash__content">
          <div className="dash__wrapper">
            <h3 className="dash__heading mb-4">Dashboard</h3>
          </div>
          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="mb-2 p-3 dash__card">
                <p className="card_title text-center">Training Programs</p>
                <div className="card-text">
                  <table className="table table-striped">
                    <thead>
                      <tr className="h6">
                        <th scope="col">Date</th>
                        <th scope="col">Update</th>
                      </tr>
                    </thead>
                    <tbody className="fw-light fs-10">
                      {tpList?.data?.slice(0, 4).map((tp, ind) => (
                        <tr className="fw-bold text-capitalize" key={ind}>
                          <td>{tp.createdAt.substring(0, 10)}</td>
                          <td>{tp.courseName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6 col-12">
              <div className="mb-2 p-3 dash__card">
                <h2 className="card_title text-center">Current Weather</h2>
                <div className="px-6 pt-3">
                  <div className="d-flex pb-2 gap-2 align-items-center justify-content-start flex-wrap">
                    <div className="d-flex align-content-center justify-content-center">
                      <img
                        className="weatherIcon"
                        alt="weatherIcon"
                        height={100}
                        width={100}
                        src={`http://openweathermap.org/img/wn/${
                          currentWeather.weather[0].icon.slice(0, -1) + "d"
                        }@2x.png`}
                      />
                    </div>
                    <div className="px-2">
                      <div className="d-flex justify-content-center">
                        <p className="">{WeekDays[weekDayIndex]}</p>
                        <p className="px-2 font-medium">
                          | {currentDate.getDate()}{" "}
                          {months[currentDate.getMonth()]}{" "}
                          {currentDate.getFullYear()}
                        </p>
                      </div>
                      <div className=" d-flex">
                        <p className="text-base font-medium">
                          {Math.ceil(currentWeather?.main.temp)} ° C
                        </p>
                        <p className="px-2 text-capitalize">
                          {currentWeather?.weather[0].description}
                        </p>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="d-flex gap-2 justify-space-between align-content-start">
                        <p className="">Humidity</p>
                        <p className="px-2 font-medium">Wind</p>
                      </div>
                      <div className="d-flex gap-2 justify-space-between align-content-start">
                        <p className="text-base font-medium">
                          {Math.ceil(currentWeather?.main.humidity)} %
                        </p>
                        <p className="px-2 text-capitalize">
                          {Math.ceil(currentWeather?.wind.speed)} Km/h
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-medium h6 py-1">Next 5 Days Weather</p>
                  <div className="d-flex gap-2 flex-wrap justify-content-between">
                    {weatherData.map((day, index) => {
                      const nextInterval = day.fields.find(
                        ({ date }) => new Date(date) > currentDate
                      );
                      if (nextInterval) {
                        currentDate.setDate(currentDate.getDate() + 1);
                        return (
                          <div
                            key={index}
                            className="d-flex align-items-center flex-column"
                          >
                            <img
                              className="weatherIcon"
                              alt="myit"
                              height={50}
                              width={50}
                              src={`http://openweathermap.org/img/wn/${
                                nextInterval.icon.slice(0, -1) + "d"
                              }@2x.png`}
                            />
                            <p className="text-base font-medium">
                              {Math.ceil(nextInterval.temperature)}° C
                            </p>
                            <p className="text-capitalize">
                              {nextInterval.description}
                            </p>
                            <p className="text-capitalize">
                              {WeekDays[currentDate.getDay()].slice(0, 3)}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 my-2">
              <div className="mb-2 p-3 dash__card">
                <p className="card_title text-center">Crop Advisory</p>
                <div className="card-text">
                  <div class="table-responsive">
                    <table className="table table-striped">
                      <thead className="h6 px-2">
                        <tr>
                          <th>Date</th>
                          <th>Update</th>
                        </tr>
                      </thead>
                      <tbody className="fw-light fs-10">
                        {caList.data.slice(0, 4).map((ca, ind) => (
                          <tr className="fw-bold text-capitalize" key={ind}>
                            <td>{ca.createdAt.substring(0, 10)}</td>
                            <td>
                              {ca.title.length > 40
                                ? ca.title.substring(0, 40) + "..."
                                : ca.title}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="mb-2 mt-2 p-3 dash__card">
                <p className="card_title text-center">Store</p>
                <div>
                  <ImageSlider slides={storeItemList.data} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="mb-2 mt-2 p-3 dash__card">
                <p className="card_title text-center">Selling Price</p>
                <div>
                  <ImageSlider slides={sellItemList.data} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="mb-2 mt-2 p-3 dash__card">
                <p className="card_title text-center">Loan Updates</p>
                <div className="card-text">
                  <table className="table table-striped">
                    <thead className="h6 px-2">
                      <tr>
                        <th scope="col">Loan Id</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody className="fw-light fs-10">
                      {loanList
                        ?.filter((loan) => loan.value.userId === farmerId)
                        ?.map((loan, ind) => (
                          <tr className="fw-bold text-capitalize" key={ind}>
                            <td>{loan.value.loanId}</td>
                            <td>{loan.value.grantedAmount}</td>
                            <td>{loan.value.status}</td>
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
}

export default Dashboard;
