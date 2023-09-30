import axios from "axios";

const CODE_SUBMIT_URL = process.env.REACT_APP_CODE_SUBMIT_URL;

export const codeSubmit = async (user_code,problemId) => 
{
    console.log("code submitting!");
    console.log(user_code , problemId);
    if(user_code.trim() === ""){
        return;
    }

    const userData = {
        user_code: user_code,
        problemId:problemId
    }
    
    const config = {
        headers: {
            Authorization: `${localStorage.getItem('csrf-token')}`, 
          },
          userData,
          withCredentials:true,
        }

    try{
        await axios.post(CODE_SUBMIT_URL, config);
      } 
    catch (error) {
        console.log("error storing submission, we will fix")
      }
  }