import axios from "axios";
import { toast } from "react-toastify";

const CONTACT_URL = process.env.REACT_APP_SUBMIT_USER_ISSUE;

export async function userContact(user_email,user_subject,user_message) {
  
    console.log(user_email,user_message,user_subject);
    const config = {
        user_email:user_email,
        user_subject:user_subject,
        user_message:user_message
      }; 
    

    try {

      const response = await axios.post(CONTACT_URL, config);
        if (response.status === 200) {
          toast("We will get back to you soon!")
          return response;
        }
        else {
            toast("Issue submitting your concern, get back to us later!")
          return { success: false, message: 'Error Submitting Message' };
        }
      }
      catch (err) {
        toast("Issue submitting your concern, get back to us later!")
        return { success: false, message: 'Error Submitting Message' };
      }

}