import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import "./alphaFooter.css"

export default function DefaultFooter() {
  return (
    <Footer container className=' alpha-footer flex flex-col rounded-[0px] h-32 justify-start items-start bg-[#7E3AF2] border-none w-[100%]  mb-0' >
        <ul className = {` flex h-full w-80  hover:duration-100 text-white justify-between  items-center text-center`}>
          <li class="nav-item">
            <Link
                  to="/team"
                  className="font-mono text-white font-semibold hover:duration-100 hover:border-b-4 hover:border-[#4C5ADF]"
              >
              Privacy Policy
            </Link>
          </li>
          <li class="nav-item">
              <Link
                  to="/team"
                  className="font-mono text-white font-semibold hover:duration-100 hover:border-b-4 hover:border-[#4C5ADF]"
              >
              Reviews
              </Link>
          </li>
          <li class="nav-item ">
              <Link
                  to="/purchase"
                  className="font-mono text-white font-semibold hover:duration-100 hover:border-b-4 hover:border-[#4C5ADF]"
              >
              Contact Us
              </Link>
          </li>
      </ul>
      <Footer.Copyright
        by="Alpha Algo LLC"
        year={2023}
        className='text-white font-semibold text-md w-[90%] text-center'
      />
    </Footer>
  )
}