import { slide as Menu } from 'react-burger-menu'
import ReactSlidingPane from "react-sliding-pane";
import NavLinks from './navLinks';
import "./styles/sideNav.css"

const SideNav = ({isOpen, onRequestClose}) =>
  {

    return (
        <>
            <ReactSlidingPane
                title=""
                className="slidingPane"
                overlayClassName="some-custom-overlay-class"
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                
                from="left"
                width="25%"
                hideHeader={false}
                minWidth="300px"
                >
                <div className='w-full h-full  flex flex-col  pt-4 '>

                    <div className="flex flex-row items-center ">
                        <h1 className="logo-name font-mono tracking-wide font-semibold antialiased text-white text-5xl">Alpha</h1>
                        <h1 className="logo font-mono tracking-wide font-semibold antialiased text-[#4C5ADF] text-8xl hover:duration-300 hover:scale-125">X</h1>
                        <h1 className="logo-name font-mono tracking-wide font-semibold antialiased text-white text-5xl">Algo</h1>
                    </div>

                    <div className=''>
                        <NavLinks flexClass={"display-flex-col"}/>
                    </div>
                </div>
            </ReactSlidingPane>
        </>
    );
}

export default SideNav;


