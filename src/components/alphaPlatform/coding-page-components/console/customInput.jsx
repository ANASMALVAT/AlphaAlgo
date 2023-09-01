import React, { useState } from 'react';
import EdiText  from 'react-editext';
import './styles/customInput.css';

const CustomInput = ({ testCases }) => {
  const [editing, setEditing] = useState(false);

  const onSave = (value) => {
    console.log('New cases:', value);
    setEditing(false);
  };
  console.log(testCases);
  return (
    <div className="custom-input flex flex-col gap-4 h-full w-full whitespace-pre  overflow-auto rounded-md">
      <pre className='text-red-600'>
        <EdiText
          value={testCases[0]}
          onSave={onSave}
          canEdit={true}
          editButtonProps={{ style: { borderRadius: 3, padding: "5px", width: "100%", background: "#15314B", color:"green" } }}
          viewProps={{ className: 'text-lg', style: { fontWeight: 'bold',borderRadius: 3, padding: "10px", width: "100%", background: "#15314B", color:"green", whiteSpace: "pre-wrap" } }}
          editProps={{ style: { borderRadius: 3, padding: "5px", width: "100%", background: "#15314B", whiteSpace: "pre-wrap" } }}
          inputProps={{ style: { whiteSpace: "pre-wrap" } }} // Add this line to ensure text wrapping
        />
      </pre>
      {
        testCases.slice(1).map((data, index) => (
          <pre
            key={index}
            className='rounded-[0.25rem] text-red-600 whitespace-pre w-full bg-[#15314B] p-2 font-normal'
            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
          >
            {data}
          </pre>
        ))
      }
</div>
  );
};

export default CustomInput;
