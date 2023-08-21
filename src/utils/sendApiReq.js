import axios from "axios";
import jsCookie from "js-cookie";
import {successNotify } from "./toastifyHlp";
import { root } from './endPoints';

export const cookies = jsCookie;

const requestIntercepter = (instance, isAuthendicated, headers) => {
  instance.interceptors.request.use(
    function (config) {
      if (isAuthendicated) {
        config.headers = {
          Authorization: `Bearer ${cookies.get("IITD")}`,
          ...headers
        }
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  )
}

const responseIntercepter = (instance, successMsg) => {
  instance.interceptors.response.use(
    res => {
      if (successMsg) successNotify(successMsg)
      return res.data
    },
    error => {
      const err = new Error(error?.message)
      err.status = error?.response?.status
      err.message = error?.response?.data?.message
      throw err
    }
  )
}

const sendApiReq = ({ isAuthendicated = true, headers = {}, successMsg = "", ...others }) => {
  const instances = axios.create({
    baseURL: root.baseUrl,
  })
  requestIntercepter(instances, isAuthendicated, headers)
  responseIntercepter(instances, successMsg)
  return instances({ ...others })
}

export default sendApiReq;
