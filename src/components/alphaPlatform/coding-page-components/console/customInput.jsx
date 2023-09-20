import React, { useState,useEffect } from 'react';
import EdiText from 'react-editext';
import Checkbox from '@mui/material/Checkbox';
import './styles/customInput.css';

const CustomInput = () => {
 
  const [editing, setEditing] = useState(false);
  const [testCases, setTestCases] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState([]);


  useEffect(() => {
    const storedTestCases = JSON.parse(sessionStorage.getItem('problemTestCases'));
    if (storedTestCases) {
      setTestCases(storedTestCases);
    }
  }, []);

  const onSave = (value) => {
    setEditing(false);
  };
  
  // useEffect(()=>{
  //   if(testCases && testCases.length > 0){
  //     setCheckboxStates(new Array(testCases.length).fill(false));
  //   }
  // },[testCases]);

  console.log(checkboxStates);

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };


  if (!testCases || testCases.length === 0) {
    return <></>
  }

  return (
    <div className="custom-input pt-4 flex flex-col gap-4 h-full w-full whitespace-pre overflow-auto rounded-md">
      {testCases[0] ? (
        <div className="flex">
          <Checkbox
            required
            disabled={checkboxStates[0]}
            sx={{
              color: 'white',
              '& .MuiSvgIcon-root': { fontSize: 32 },
              '&.Mui-disabled': { color: 'white' },
            }}
            color="success"
          />
        <pre>
          <EdiText
            value={testCases[0]}
            onSave={onSave}
            canEdit={true}
            editButtonProps={{
              style: {
                borderRadius: 3,
                padding: '5px',
                width: '100%',
                background: '#15314B',
                color: 'green',
              },
            }}
            viewProps={{
              className: 'text-md',
              style: {
                fontWeight: 'bold',
                borderRadius: 3,
                padding: '10px',
                width: '100%',
                background: '#15314B',
                color: 'green',
                whiteSpace: 'pre',
                letterSpacing:"0px"
              },
            }}
            editProps={{
              style: {
                borderRadius: 3,
                padding: '5px',
                width: '100%',
                background: '#15314B',
                whiteSpace: 'pre-wrap',
            
              },
            }}
            inputProps={{ style: { whiteSpace: 'pre-wrap', color:'white',} }}
          />
        </pre>
        </div>
      ) : (
        <></>
      )}

      {testCases.slice(1).map((data, index) => (
        <div className="flex" key={index}>
          <Checkbox
            required
            disabled={checkboxStates[index]}
            sx={{
              color: 'white',
              '& .MuiSvgIcon-root': { fontSize: 32 },
              '&.Mui-disabled': { color: 'white' },
            }}
            color="success"
          />
          {
            data ? (
            <pre key={index} className="flex rounded-[0.25rem] items-center   text-red-600 whitespace-pre w-full bg-[#15314B] p-2 font-normal" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }} >
              {data}
            </pre>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomInput;
