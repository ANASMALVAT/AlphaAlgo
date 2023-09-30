import React from 'react';
import axios from "axios";
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { verifyToken } from '../../../../services/verifyToken';
import { useSelector, useDispatch } from 'react-redux';
import { showNotification } from '../../../../redux/slices/alphaNotification';
import "./purchaseCard.css"


export default function PricingCard() {

  const AlphaNotification = useSelector((state) => state.alphaNotification);

  const dispatch = useDispatch();
  const purchaseAlpha = async () => 
  {

    // if(!localStorage.getItem('csrf-token')){
    //     dispatch(showNotification("Please Login To Continue"));
    //     return;
    // }

    // const response = await verifyToken();

    // if(!response.success){
    //   dispatch(showNotification(response.message));
    //   return;
    // }

    try {
      console.log(process.env.REACT_APP_PURCHASE_URL);
      const response = await axios.post(process.env.REACT_APP_PURCHASE_URL, {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem('csrf-token')}`, 
        }
      });
      if (response.data && response.data.url) {
        window.location.href = response.data.url;
      } 
    } catch (error) {
        dispatch(showNotification("Some error occured, we will fix it as soon as possible!"));
    }
  }
  
  return (

    <Card size="lg" variant="outlined" sx={{width:"375px",height:"450px"}}>
      <Chip size="sm" variant="outlined" color="neutral">
        PREMIUM
      </Chip>
      <Typography level="h2">

      <div className="flex flex-row justify-center items-center font-mono">
        <div className="tracking-wide font-semibold antialiased text-[#4C5ADF] text-6xl hover:duration-500 hover:rotate-[900deg]">
          X
        </div> 
        Premium 
      </div>
      </Typography>
      <Divider inset="none" />
      <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
        <ListItem>
          <ListItemDecorator>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.877px" height="101.052px" fill="currentColor" viewBox="0 0 122.877 101.052" enable-background="new 0 0 122.877 101.052" class="h-4 w-4 text-cyan-500 lg:h-4 lg:w-4"><g><path d="M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281 c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355 c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766 c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004 c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63 L4.43,63.63z"></path></g></svg>
          </ListItemDecorator>
          <h1 className=' text-black'>Acess To Question Bank</h1>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.877px" height="101.052px" fill="currentColor" viewBox="0 0 122.877 101.052" enable-background="new 0 0 122.877 101.052" class="h-4 w-4 text-cyan-500 lg:h-4 lg:w-4"><g><path d="M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281 c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355 c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766 c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004 c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63 L4.43,63.63z"></path></g></svg>
          </ListItemDecorator>
          <h1 className=' text-black'>Acess To Premium Features</h1>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.877px" height="101.052px" fill="currentColor" viewBox="0 0 122.877 101.052" enable-background="new 0 0 122.877 101.052" class="h-4 w-4 text-cyan-500 lg:h-4 lg:w-4"><g><path d="M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281 c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355 c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766 c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004 c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63 L4.43,63.63z"></path></g></svg>
          </ListItemDecorator>
          <h1 className=' text-black'>Udemy Voucher For Future Course</h1>
        </ListItem>
      </List>
      <Divider inset="none" />
      <CardActions>
        <Typography level="title-lg" sx={{ mr: 'auto' }}>
          29.99{' '}${' '} Anually
          <Typography fontSize="sm" textColor="text.tertiary">
          </Typography>
        </Typography>
        <Button
          variant="soft"
          color="neutral"
          endDecorator={<KeyboardArrowRight />}
          onClick={purchaseAlpha}
        >
          Get Alpha
        </Button>
      </CardActions>
    </Card>
  
  );
}