import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import "./styles/componentAlphaAlgo.css";

const ComponentAlphaAlgo =  ({isOpen}) => {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return(

    <>
      <button onClick={() => setOpen(o => !o)} className={`what-button overflow-hidden mt-8 mb-4 flex flex-row items-center text-center align-middle  rounded-sm px-6  font-mono font-normal justify-center text-white border bg-[#4C5ADF] hover:duration-300 border-b-8 border-[#4C5ADF]`}>
        Explore 
      <h1 className="ml-2 logo-com-3 font-bold antialiased text-[#2D33CA] hover:duration-300 hover:scale-125"> X </h1>
      </button>
      <Popup open={open} modal  closeOnDocumentClick onClose={closeModal} className='explore-container'>
      </Popup>
    </>
  )

};


export default ComponentAlphaAlgo;


{/* <div className=" explorer-content ">
<button className="close" onClick={closeModal}>
  &times;
</button>
    <div className="  bg-algoXcolor"></div>
      <div className="overflow-auto w-[80%] bg-algoXcolor  text-[12px] text-white font-mono text-justify">
          I'm Anas, 24 years old software Engineer and from early on I understood that to do well in these interviews, I needed to be great at solving coding problems. So I started practicing and learning how to solve coding problems. It was hard because I was doing it on my own with just the internet to help me.
          <br/><br/>
          But with time and practice, I got really good at problem-solving. I even became one of the top 20 problem-solvers in the world on GeeksForGeeks. I solved more than 1400 coding problems in 2 years Then it hit me – we don't learn things just to show off how good we are. We learn things to help others avoid the mistakes we made. This realization inspired me to develop Alpha Algo. I wanted to show them that you don't need to spend years learning – with a few months of practice and a smart approach, you can get really good at handling any coding interview.
          <br/><br/>
          I discussed with people who conduct interviews at Tech giants like Meta, Microsoft & Google. I got to help students prepare for coding interviews and guide them. I spent around 20,000 hours building  and understanding this skill. And now, here we are with a platform that will help you become a problem-solving master. It's a place where you can learn, practice, and become really skilled at solving problems. It's not just about getting good at problems; it's about sharing what I've learned and helping you succeed. Welcome to Alpha Algo – the place where you can become a problem-solving pro!
      </div>
  </div>
</div> */}