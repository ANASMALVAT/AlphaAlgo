import React, { useEffect, useState } from 'react';
import  Select  from 'react-select';
import { customStyles } from './styles/customCss';
import { codingTopics } from '../../../../data/codingTopics';


const TopicDropdown = () => {
    
    const setTopic = (option) => {

    }
    
    return(
        <div className=' mr-1 '>
            <Select
                options={codingTopics}
                styles={customStyles}
                onChange={(selectedOption) => setTopic(selectedOption)}
                value={codingTopics[0]}
            />
        </div>
    )
}
export default TopicDropdown;