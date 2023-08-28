import React from 'react';
import  Select  from 'react-select';
import { customStyles } from '../../styles/customCss';
import { languageOptions } from '../../../../data/codingLanguages';

const LanguageDropDown = ({onSelectChange}) => {
    return(
        <div className=' mr-1 '>
            <Select
                options={languageOptions}
                styles={customStyles}
                defaultValue={languageOptions[0]}
                onChange={(selectedOption) => onSelectChange(selectedOption)}
            />
        </div>
    )
}
export default LanguageDropDown;