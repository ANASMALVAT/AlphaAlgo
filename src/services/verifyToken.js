import axios from "axios";
const VERIFY_TOKEN = process.env.REACT_APP_VERIFY_TOKEN;

export async function verifyToken() {
    const config = {
        headers: {
          Authorization: `${localStorage.getItem('jwt-token')}`, 
        },
      };
    try {
        const response = await axios.get(VERIFY_TOKEN, config);
        if (response.status === 200) {
          localStorage.setItem('jwt-token', response.data);
          return { success: true, message: 'Token verification successful' };
        }
        else {
          return { success: false, message: 'Token verification failed' };
        }
      }
      catch (err) {
        return { success: false, message: 'Error verifying token' };
      }

}