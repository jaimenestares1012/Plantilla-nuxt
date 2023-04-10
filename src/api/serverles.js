import axios from "axios";
async function apiIdLast(data) {
    try {
      console.log("serverlessss API");
      const response = await axios({
        url: `https://2lefg2yy33.execute-api.us-east-1.amazonaws.com/dev/increment-id`,
        method: "GET",
        headers: {
          "X-API-KEY": "Lc9XtRmZ8OaJzKvS2q0F"
        }
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }

  async function apiSendDataStore(data) {
    try {
      console.log("serverlessss API");
      const response = await axios({
        url: `https://2lefg2yy33.execute-api.us-east-1.amazonaws.com/dev/insert-data`,
        method: "POST",
        headers: {
          "X-API-KEY": "Lc9XtRmZ8OaJzKvS2q0F"
        },
        data
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }
  

  async function apiGetDataStore(data) {
    try {
      console.log("serverlessss API");
      const response = await axios({
        url: ` https://2lefg2yy33.execute-api.us-east-1.amazonaws.com/dev/get-data`,
        method: "GET",
        headers: {
          "X-API-KEY": "Lc9XtRmZ8OaJzKvS2q0F"
        }
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }
  
  export { apiIdLast, apiSendDataStore, apiGetDataStore};