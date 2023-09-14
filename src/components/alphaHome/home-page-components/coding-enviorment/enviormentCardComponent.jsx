import {React} from "react";
import CheckIcon from '@mui/icons-material/Check';
import "./enviormentCardComponent.css"


const EnviormentCardComponent = ({enviorment }) => {
    return(
        <div className="flex flex-row enviorment-block">
                <CheckIcon style={{fontWeight:"bold check-icon "}} color="success"/>
            <div className="flex">
                <p className="enviorment-description text-gray-300 " >{enviorment.description}</p>
            </div>
        </div>
    )
}

export default EnviormentCardComponent;