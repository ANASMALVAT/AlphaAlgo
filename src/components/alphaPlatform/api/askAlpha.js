import axios from 'axios';


const GPT_URL = process.env.REACT_APP_CALL_GPT;
export async function askAlpha (userInput,setLoading, showError) {

  if (userInput.trim() !== '') {
    setLoading(true);
    let storedMessages = localStorage.getItem('stored-messages');
    let parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
    let currentChats = parsedMessages;
    let tempChats = []
    tempChats.push({ role: 'user', content: userInput });

    const updatedMessages = [...parsedMessages, ...tempChats];
    localStorage.setItem('stored-messages', JSON.stringify(updatedMessages));
    currentChats.push({ role: 'user', content: userInput });

    try {
      const response = await axios.post(GPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        currentChats,
      });

      tempChats = []
      tempChats.push({ role: 'assistant', content: response.data.content })

      let storedMessages = localStorage.getItem('stored-messages');
      let parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
      const updatedMessages = [...parsedMessages, ...tempChats];
      localStorage.setItem('stored-messages', JSON.stringify(updatedMessages));
    }
    catch (error) {
      showError(' AlphaGPT is under maintenance!');
    }
    setLoading(false);
  }
}
