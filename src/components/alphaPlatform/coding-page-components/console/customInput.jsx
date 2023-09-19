import React, { useState,useEffect } from 'react';
import EdiText from 'react-editext';
import Checkbox from '@mui/material/Checkbox';

import './styles/customInput.css';

const CustomInput = () => {
 

  const [editing, setEditing] = useState(false);
  const [testCases, setTestCases] = useState([]);

  useEffect(() => {
    const storedTestCases = JSON.parse(localStorage.getItem('problemTestCases'));
    if (storedTestCases) {
      setTestCases(storedTestCases);
    }
  }, []);

  const onSave = (value) => {
    console.log('New cases:', value);
    setEditing(false);
  };

  const [checkboxStates, setCheckboxStates] = useState(
    testCases && testCases.length > 0
      ? new Array(testCases.length).fill(true)
      : []
  );

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };


  if (!testCases || testCases.length === 0) {
    return <></>
  }

  return (
    <div className="custom-input p-4 flex flex-col gap-4 h-full w-full whitespace-pre overflow-auto rounded-md border border-gray-700">
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
                fontWeight: 'normal',
                borderRadius: 3,
                padding: '10px',
                width: '100%',
                background: '#15314B',
                color: 'green',
                whiteSpace: 'pre',
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
            inputProps={{ style: { whiteSpace: 'pre-wrap' } }}
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
          {data ? (
            <pre
              key={index}
              className="rounded-[0.25rem] text-red-600 whitespace-pre w-full bg-[#15314B] p-2 font-normal"
              style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
            >
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
