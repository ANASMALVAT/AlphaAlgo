import axios from "axios";


export async function checkCookie() {

    try {
        const config = {
            withCredentials:true,
          }; 
        const response = await axios.get("http://localhost:5000/cookie", config);
        return response;
      }
      catch (err) {
        return { success: false, message: 'Problem on server!' };
      }

}