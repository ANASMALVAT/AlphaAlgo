import React from 'react';
import  Select  from 'react-select';
import { customStyles } from '../../../data/customCss';
import { languageOptions } from '../../../data/codingLanguages';

const LanguageDropDown = ({onSelectChange}) => {
    return(
        <div className='mr-1 border-r border-["#2684FF"]'>
            <Select
                placeholder={`Filter By Category`}
                options={languageOptions}
                styles={customStyles}
                defaultValue={languageOptions[0]}
                
                onChange={(selectedOption) => onSelectChange(selectedOption)}
            />
        </div>
    )
}
export default LanguageDropDown;