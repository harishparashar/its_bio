import axios from 'axios';

// let token = localStorage.getItem('token');

var helper = { 

    post: async (jsonObj = {}, path = "", token) => {
      const url = process.env.GATSBY_API_URL_USER + path;
      const res = await axios( {
        method: "post",
        url:url,
        data : jsonObj
      });
      return { response: await res, status: await res.status };
    },

    posts: async (jsonObj = {}, path = "", token) => {
      const url = process.env.GATSBY_API_URL_USER + path;
      const res = await axios( {
        method: "post",
        url:url,
        data : jsonObj,
        headers:{'Authorization': `${localStorage.getItem('token')}`}
      });
      return { response: await res, status: await res.status };
    },

    get: async (path = "") => {
      const url = process.env.GATSBY_API_URL_USER + path;
      const res = await axios( {
        url:url,
        headers:{'Authorization': `${localStorage.getItem('token')}`}
      });
      return { response: await res, status: await res.status };
    },

    formpost: async (jsonObj = {}, path = "") => {
      const url = process.env.GATSBY_API_URL_USER + path;
      const res = await axios( {
        method: "post",
        url:url,
        data : jsonObj,
        headers:{'Content-Type': 'multipart/form-data',
        'Authorization': `${localStorage.getItem('token')}` }        
      });
      return { response: await res, status: await res.status };
    },

    postclient: async (jsonObj = {}, path = "") => {
      const url = process.env.GATSBY_API_URL_CLIENT + path;
      const res = await axios( {
        method: "post",
        url:url,
        data : jsonObj,
        headers:{'Authorization': `${localStorage.getItem('token')}`} 
      });
      return { response: await res, status: await res.status };
    },
  
    // get: async (path = "", token) => {
    //   const url = process.env.GATSBY_API_URL + path;
    //   const res = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json", "x-auth-token": token || ''
    //     }
    //   });
    //   if (res.status === 401) {
    //     localStorage.clear();
    //     window.location = '/login';
    //   }
    //   return { response: await res, status: await res.status };
    // },
  
    put: async (jsonObj = {}, path = "", token) => {
  
      const url = process.env.GATSBY_API_URL + path;
      const res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(jsonObj),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token || ''
        }
      });
      return { response: await res, status: await res.status };
    },
    del: async (path = "", token) => {
  
      const url = process.env.GATSBY_API_URL + path;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", "x-auth-token": token || ''
        }
      });
      return { response: await res, status: await res.status };
    },
      delete: async (path = "", token) => {
  
      const url = process.env.GATSBY_API_URL + path;
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", "x-auth-token": token || ''
        }
      });
      return { response: await res, status: await res.status };
    },
   
  }
  
  export default helper;
  
  
  