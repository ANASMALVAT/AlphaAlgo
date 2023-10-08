import axios from "axios";
import { toast } from "react-toastify";

const VERIFY_TOKEN = process.env.REACT_APP_VERIFY_TOKEN;

export async function verifyToken() {
    console.log("verify token");
    const config = {
        headers: {
          Authorization: `${localStorage.getItem('csrf-token')}`, 
        },
        withCredentials:true,
      }; 
    try {

      const response = await axios.get(VERIFY_TOKEN, {
          headers: {
              Authorization: `${localStorage.getItem('csrf-token')}`,
          },
          withCredentials: true,
        });
        if (response.status === 200) {
          localStorage.setItem('csrf-token', response.data.csrfToken);
          return { success: true, message: 'Token verification successful' };
        }
        else {
          localStorage.removeItem('csrf-token');
          return { success: false, message: 'Session Expired, Please Login Again!' };
        }
      }
      catch (err) {
        if(err?.response?.status === 401){
          toast("Unauthorized");
        } 
        else if(err?.response?.status === 440){
          toast("Session expired, please login to continue");
        }
        else{
          toast("Please login again");  
        }
        localStorage.removeItem('csrf-token');
        return { success: false, message: 'Error verifying token,Please Try Again Later!' };
      }

}