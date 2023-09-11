import axios from "axios";

const CODE_STATUS_URL = process.env.REACT_APP_CODE_STATUS_URL;

export async function codeStatus(token) {
  try {
    const response = await axios.get(`${CODE_STATUS_URL}/${token}`);
    if (response.data.status?.id === 1 || response.data.status?.id === 2) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return codeStatus(token);
    } else {
      return {
        success: true,
        code_output: response.data,
        message: "Compiled Successfully",
      };
    }
  } catch (error) {
    return {
      success: false,
      error: "An error occurred while checking the status.",
    };
  }
}
