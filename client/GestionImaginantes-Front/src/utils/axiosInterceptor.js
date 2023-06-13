import axios from 'axios';

const axiosInterceptor =  axios.interceptors.response.use((response) => {
      const newToken = response.headers['set-auth']
      if(newToken !== "null"){
        localStorage.setItem('Auth', 'Bearer ' + newToken);
      }
      return response;
      }, (error) => {
        if (error.response?.status === 401 && window.location.href.split('/').at(-1) != 'login') {
            localStorage.clear();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    });

export default axiosInterceptor;