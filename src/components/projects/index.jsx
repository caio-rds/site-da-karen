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

export default function Projects({close, open}) {
    return (
  
        <Modal
            className="projects"
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color={'#333'}>
                Meus Projetinhos
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} color={'#333'}>
                Projetos residenciais e comerciais
            </Typography>
            </Box>
        </Modal>
  
    )
}

Projects.propTypes = {
    close: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
}