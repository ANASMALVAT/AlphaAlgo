import React, { useEffect, useState } from 'react';
import  Select  from 'react-select';
import { customStyles } from './styles/customCss';
import {useSelector, useDispatch } from "react-redux"
import { setUserSubmission } from '../../../../redux/slices/userSubmission';

const SubmissionDropDown = () => {


    const [submissions, setSubmissions] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        const userSubmissionsJSON = sessionStorage.getItem('user-submission');
        const userSubmissions = JSON.parse(userSubmissionsJSON);
        setSubmissions(() => {
            return userSubmissions
        });
       
    },[])

    const openDialog = (selectedOption) => {
        dispatch(setUserSubmission(selectedOption.code));
    }

    return(
        <div className=' mr-1 '>

            <Select
                styles={customStyles}
                noOptionsMessage={() => 'No submission'}
                
                options={submissions.length > 0 ? (
                    submissions.map((submission, index) => {
                      const [datePart, timePart] = submission.submission_time.split(', ');
                      const formattedLabel = ` ${submission.code_language} - ${timePart}`;
                      return {
                        label: formattedLabel,
                        value: submission.submission_time,
                        code: submission.user_code
                      };
                    })
                  ) : []}
                onChange={(selectedOption) => openDialog(selectedOption)}
                placeholder={`Last 5 submission`}
                isSearchable={false}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 10,
                    colors: {
                    ...theme.colors,
                       text: 'white',
                       primary25: 'white',
                       primary: '',
                       },
                  })}
            />
        </div>
    )
}
export default SubmissionDropDown;