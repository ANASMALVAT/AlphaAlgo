import axios from "axios";

const CODE_COMPILE_URL = process.env.REACT_APP_CODE_COMPILE_URL;

export const codeCompile = async (code,language,user_code) => 
{
    console.log(CODE_COMPILE_URL);
    if(code.trim() === ""){
        return {success: false, error: "No Code Is Written!" };
    }

    if(language.value === 'text'){
      return {success: false, error: "White Board Is Enabled!" };

    }

    const requestData = {
      language_id: language.id,
      source_code: btoa(code),
      user_code:user_code
    }

    try{
        const response = await axios.post(CODE_COMPILE_URL, requestData);
        console.log(response.data.token);
        return { success: true, token: response.data.token };
      } 
    catch (error) {
        if (error.response && error.response.status === 429) {
            return { success: false, error: "Quota of 100 requests exceeded for the Day!" };
        } 
        else {
            return { success: false, error: "An error occurred during compilation." };
        }
      }
  }