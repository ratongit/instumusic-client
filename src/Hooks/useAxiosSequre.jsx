import {  useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useToken from './useToken';


const [token]= useToken()
const useAxiosSequre = () => {
  const navigate = useNavigate(); 
  

  const axiosSecure = axios.create({
    baseURL: 'https://instrument-server.vercel.app', 
  });


  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (err.res && (err.res.status === 401 || err.res.status === 403)) {
          alert('Something is wrong in your information!! try again .')
          navigate('/');

        }
        return Promise.reject(err);
      }
    );
  }, [ navigate, axiosSecure,token]);

  return [axiosSecure];
};

export default useAxiosSequre;
