import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// // Create an instance of axios with custom configuration
// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     ["/api","/reports"],// You can pass in an array too eg. ['/api', '/another/path']
//     createProxyMiddleware( {
//       target: baseUrl,
//       changeOrigin: true,
//     })
//   );
// };
const makeApiRequest = async (url, options) => {
  const { apiKey, method, data } = options;

  // Ensure method is in lowercase
  const lowerCaseMethod = method.toLowerCase();

  // Set headers including API key if provided
  const headers = {
    "Content-Type": "application/json",
    ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
  };

  try {
    const response = await axiosInstance({
      method: lowerCaseMethod,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default makeApiRequest;
