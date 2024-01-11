import axios from "axios";

const USER_AUTHENTICATION = process.env.REACT_APP_FETCH_USER_AUTHENTICATION;

export async function userAuthentication(access_token,id_token) {

    console.log(access_token , id_token)
    if(!access_token || !id_token){
      return { success: false };
    }

    try {
       
        const config = {
          withCredentials:true,
        };
        const url = `${USER_AUTHENTICATION}?access_token=${access_token}&id_token=${id_token}`
        const response = await axios.get(url, config);
        return {success:true,response:response};
      }
      catch (err) {
        return { success: false, message: 'Problem on server!' };
      }

}