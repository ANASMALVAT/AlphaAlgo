import axios from "axios";

const AUTHORIZED_USER_URL = process.env.REACT_APP_AUTHORIZE_USER_URL;

export async function authorizedUser(question_id) {
  
    const config = {
        headers: {
            Authorization: `${localStorage.getItem('jwt-token')}`, 
            question_id: question_id
          }
        }
        try{
          const response = await axios.get(AUTHORIZED_USER_URL,config);
          return response;
        }
        catch(error) {
          return {success:false, error: "Server is under maintainence!"}
        }
};