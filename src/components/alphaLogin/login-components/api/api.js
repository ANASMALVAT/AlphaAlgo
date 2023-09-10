import axios from "axios";
import { toggelUserLoginTrue } from '../../../../redux/slices/userAuthentication';
import { useSelector,useDispatch } from 'react-redux';


const AUTHENTICATION_URL = process.env.REACT_APP_AUTHENTICATION_URL;
const ACCESS_TOKEN_URL = process.env.REACT_APP_ACCESS_TOKEN_URL;

export const retrieveToken = async () => {
  try {
      console.log("calling retrieve token method!");

      const response = await axios.get(ACCESS_TOKEN_URL, { withCredentials: true });

      if (response && response.data) {
          console.log("User : ", response.data);
          return response.data; // Return the data if successful
      } else {
          throw new Error('No response data');
      }
  } catch (error) {
      if (error.response && error.response.status === 401) {
          console.error('User is not authorized:', error);
      } else {
          console.error('Error retrieving token:', error);
      }
      throw error; // Re-throw the error for the caller to handle if needed
  }
};



