import { Typography, Modal, Box } from "@mui/material"
import PropTypes from 'prop-types'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Socials({close, open}) {
    return (        
        <Modal
            className='socials'
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" color={'#333'} component="h2">
                Minhas redes sociais abaixo
            </Typography>
            <Typography id="modal-modal-description" color={'#333'} sx={{ mt: 2 }}>
                INSTAGRAM, LINKEDIN
            </Typography>
            </Box>
        </Modal>
        
    )
}

Socials.propTypes = {
    close: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
}