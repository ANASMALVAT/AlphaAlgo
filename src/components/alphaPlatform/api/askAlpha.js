
import axios from 'axios';

const GPT_URL = process.env.REACT_APP_CALL_GPT;

export async function askAlpha (userInput, chats, setChats, setMessages, messages,setLoading, showError) {

  if (userInput.trim() !== '') {
    setLoading(true);

    let currentChats = chats;

    currentChats.push({ role: 'user', content: userInput });
    setChats(currentChats);

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'User', text: userInput },
    ]);

    try {
      const response = await axios.post(GPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        currentChats,
      });

      setMessages((prevMessages) => [...prevMessages,{ type: 'Bot', text: response.data.content }]);
      currentChats.push({ role: 'assistant', content: response.data.content });
      setChats(currentChats);
      sessionStorage.setItem('stored-messages',JSON.stringify(messages));

    } 
    catch (error) {
      showError('Under Maintenance!');
    }

    setLoading(false);
  }
}
