import React from 'react';
import axios from "axios";
import Box from '@mui/joy/Box';
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
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gap: 2,
        height:"400px",
        minWidth:"375px",
        maxWidth:"375px"
      }}
    >
      <Card size="lg" >
        <Typography level="h2">
            <div className="flex flex-row justify-center items-center font-mono">
                <div className="tracking-wide font-semibold antialiased text-[#4C5ADF] text-6xl hover:duration-500 hover:rotate-[900deg]">
                    X
                </div> 
                Premium 
            </div>
        </Typography>
        <Divider inset="none" />
        <List className="item-list" size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <div className='flex item'>
              <ListItemDecorator>
                <Check color='success' />
              </ListItemDecorator>
              <div>
                Access to all question.
              </div>  
          </div>

          <div className='flex item'>
            <ListItemDecorator>
                <Check color='success' />
              </ListItemDecorator>
              <div>
                Access to solutions and all features.
              </div>  
          </div>

          <div className='flex item'>
              <ListItemDecorator>
                <Check color='success' />
              </ListItemDecorator>
              <div>
                Voucher For Future Udemy course.
              </div>
          </div>
        </List>
        <Divider inset="none" />
        <CardActions className="card-action">
          <div className='price'>
            29.99$ / Year
          </div>
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
    </Box>
  );
}