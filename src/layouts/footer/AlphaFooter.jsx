import { Footer } from 'flowbite-react';
import "./alphaFooter.css"

export default function DefaultFooter() {
  return (
    <Footer container className=' alpha-footer flex flex-col rounded-[0px] h-36 justify-start items-start bg-[#F5F5F5] border-none w-[100%]  mb-0' >
      <Footer.Copyright
        by="Alpha Algo LLC"
        year={2023}
        className='text-black font-normal text-md w-[90%] mb-4'
      />
      <Footer.LinkGroup className='flex footer-navlink font-normal justify-center text-black text-[16px] w-[90%] items-center'>
        <Footer.Link href="#" className='pr-6 border-r border-gray-[#4C5ADF]'>
          About
        </Footer.Link>
        <Footer.Link href="#" className='pr-6 border-r border-gray-[#4C5ADF]'> 
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#" className='pr-6 border-r border-gray-[#4C5ADF]'>
          Reviews
        </Footer.Link>
        <Footer.Link href="#">
          Contact Us
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}