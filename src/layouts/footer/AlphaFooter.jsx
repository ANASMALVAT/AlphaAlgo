import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import "./alphaFooter.css"

export default function AlphaFooter() {
  return (
    <Footer container className=' alpha-footer flex flex-col rounded-[0px] h-32 justify-start items-start bg-[#00182D]  w-[100%] border-t border-gray-700 mb-0' >
        <ul className = {` alpha-footer-navlink flex h-full w-80  hover:duration-100 text-white justify-between  items-center text-center`}>
          <li class="nav-item">
            <Link
                  to="/team"
                  className="font-mono text-white font-semibold hover:duration-300 hover:border-b-2 hover:border-[white]"
              >
              Privacy Policy
            </Link>
          </li>
          <li class="nav-item">
              <Link
                  to="/team"
                  className="font-mono text-white font-semibold hover:duration-100 hover:border-b-2 hover:border-[white]"
              >
              Reviews
              </Link>
          </li>
          <li class="nav-item ">
              <Link
                  to="/purchase"
                  className="font-mono text-white font-semibold hover:duration-100 hover:border-b-2 hover:border-[white]"
              >
              Contact Us
              </Link>
          </li>
      </ul>
      <Footer.Copyright
        by="Alpha Algo LLC"
        year={2023}
        className='text-white font-semibold text-md w-full text-center'
      />
    </Footer>
  )
}