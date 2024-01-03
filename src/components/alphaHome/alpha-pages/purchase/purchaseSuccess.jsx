import React from 'react'
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';

const SuccessfulPurchase = () => {

    return(
        <>
            <AlphaNavbar/>
            <Modal
            open={true}
            
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
                <ModalDialog
                    color="success"
                    variant="soft"
                    layout='center'
                    
                >
                    <ModalClose />
                    <Typography color='success' level='h3'  >Purchase Successful</Typography>
                    <Typography color='success' level='h5' sx={{marginTop:"20px"}}  >Welcome To Team AlpaAlgo, where cracking interview is our promise.</Typography>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default SuccessfulPurchase;