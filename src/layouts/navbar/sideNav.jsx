import ReactSlidingPane from "react-sliding-pane";
import NavLinks from './navLinks';
import SideNavLinks from './sideNavLinks';
import "./styles/sideNav.css"

const SideNav = ({isOpen, onRequestClose}) =>
  {

    return (
        <div className = " ">
            <ReactSlidingPane
                title=""
                overlayClassName="some-custom-overlay-class"
                className="sliding-pane-main"
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                from="left"
                width="375px"
                
                hideHeader={false}
                minWidth="300px"
        
                >
                <div className='w-full h-full  flex flex-col  pt-4'>
                    <div className=' '>
                        <SideNavLinks />
                    </div>
                </div>
            </ReactSlidingPane>
        </div>
    );
}

export default SideNav;


