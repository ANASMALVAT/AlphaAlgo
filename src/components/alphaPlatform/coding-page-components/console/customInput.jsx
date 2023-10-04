import React, { useState,useEffect } from 'react';
import EdiText from 'react-editext';
import './styles/customInput.css';

const CustomInput = () => {
 
  const [editing, setEditing] = useState(false);
  const [testCases, setTestCases] = useState(JSON.parse(sessionStorage.getItem('problemTestCases')));
  const [checkboxStates, setCheckboxStates] = useState([]);


  useEffect(() => {
    const storedTestCases = JSON.parse(sessionStorage.getItem('problemTestCases'));
    if (storedTestCases) {
      setTestCases(storedTestCases);
      setCheckboxStates(new Array(testCases.length).fill(false));
    }
  }, []);

  const onSave = (value) => {
    sessionStorage.setItem('custom_testcase',value);
    setEditing(false);
  };
  
  useEffect(()=>{
    if(testCases && testCases.length > 0){
      setCheckboxStates(new Array(testCases.length).fill(false));
    }
  },[testCases]);

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
      {sessionStorage.getItem('custom_testcase')  ? 
      (
        <div className="flex">
        <div className='flex items-center text-green-500 font-semibold mr-2 bg-[#15314B] p-2 rounded-[0.25rem]'><pre>Custom Case</pre></div>
        <pre>
          <EdiText
            value={sessionStorage.getItem('custom_testcase') || ""}
            onSave={onSave}
            canEdit={true}
            type='textarea'
            containerProps={{
              width:"100%"
            }}
            editButtonProps={{
              style: {
                borderRadius: 3,
                padding: '5px',
                width: '100%',
                background: '#15314B',
                color: 'green',
                height:"100%"
              },
            }}
            viewProps={{
              className: 'text-md',
              style: {
                display:"flex",
                flexGrow:1,
                fontWeight: 'bold',
                borderRadius: 3,
                padding: '10px',
                minWidth: '100%',
                background: '#15314B',
                color: 'green',
                whiteSpace: 'pre',
                letterSpacing:"0px",
              },
            }}
            editProps={{
              style: {
                display:"flex",
                flexGrow:1,
                borderRadius: 3,
                padding: '5px',
                width: '100%',
                background: '#15314B',
                whiteSpace: 'pre-wrap',
                minWidth:"400px"
              },
            }}
            inputProps={{ style: { whiteSpace: 'pre-wrap', color:'white',minWidth:"400px"} }}
          />
        </pre>
        </div>
      ) : (
        <></>
      )}

      {testCases.map((data, index) => (
        <div className="flex" key={index}>
          <div className='flex  items-center text-red-600 font-normal mr-2 bg-[#15314B] p-2 rounded-[0.25rem]'><pre>Test Case {index + 1}</pre></div>
          {
            data ? (
            <pre key={index} className="flex rounded-[0.25rem] items-center text-red-600 whitespace-pre w-full bg-[#15314B] p-2 font-normal" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }} >
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
