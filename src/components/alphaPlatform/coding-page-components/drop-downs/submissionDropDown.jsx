import React, { useEffect, useState } from 'react';
import  Select  from 'react-select';
import { customStyles } from './styles/customCss';


const SubmissionDropDown = () => {
    
    const callApi = () => {

    }
    
    return(
        <div className=' mr-1 '>
            <Select
                options={[{ value: "Submission-1", label: 'Submission - 1' }]}
                styles={customStyles}
                // onChange={(selectedOption) => callApi(selectedOption)}
                value={`Submission's`}
                placeholder={`submissions`}
                isSearchable={false}
            />
        </div>
    )
}
export default SubmissionDropDown;