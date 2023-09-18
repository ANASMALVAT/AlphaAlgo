import React, { useEffect, useState } from 'react';
import  Select  from 'react-select';
import { customStyles } from './styles/dropdownStyle';
import {codingTopics} from "../../../data/codingTopics"
import { changeTopic } from '../../../redux/slices/problemTopicSlice';
import { useDispatch,useSelector } from 'react-redux';

const TopicDropdown = () => {
    const problemTopic = useSelector((state) => state.problemTopic.topic);
    const [currentTopic,setCurrentTopic] = useState(problemTopic);
    const dispatch = useDispatch();
    
    const setTopic = (option) => {
        dispatch(changeTopic(option.value));
        setCurrentTopic(problemTopic);
    }
    useEffect(()=>{
        setCurrentTopic(problemTopic);
        console.log(currentTopic);
    },[problemTopic])
    
    return(
        <div className = 'flex justify-center mt-10 '>
            <Select
                options={codingTopics}
                styles={customStyles}
                onChange={(selectedOption) => setTopic(selectedOption)}
                value={{label:currentTopic}}
            />
        </div>
    )
}
export default TopicDropdown;