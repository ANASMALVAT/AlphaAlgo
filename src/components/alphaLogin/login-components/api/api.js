import axios from "axios";


const AUTHENTICATION_URL = process.env.REACT_APP_AUTHENTICATION_URL;

export const retrieveToken = async () => {
  try {
      const response = await axios.get('http://localhost:5000/user/token',{withCredentials:true});
      console.log(response);
      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem('accessToken', token);
      } 
      else {
        console.error('Unexpected status code:', response.status);
      }
  } 
  catch (error) {
        if (error.response && error.response.status === 401) {
            console.error('User is not authorized:', error);
        } 
        else{
            console.error('Error retrieving token:', error);
        }
    }
};

export const redirectGoogleSSO = async () => {

    const newWindow = window.open(AUTHENTICATION_URL, '_blank', 'width=600,height=600');
    retrieveToken();
}
