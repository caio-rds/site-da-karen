import { Typography, Modal, Box, Divider, Button, Alert } from "@mui/material"
import PropTypes from 'prop-types'
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import './styles.css'
import { useEffect, useState } from "react";




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: window.innerWidth > 900 ? '400px' : '80%',
    backgroundColor: 'white',
    border: '0px',
    boxShadow: '0',
    borderRadius: '8px',
    p: 4,
  };

export default function Socials({close, open}) {

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage('')
            }, 5000)
        }
    }, [message])

    const buttons = [
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            onClick: () => setMessage('Você será redirecionado para o Instagram!').
            then(() => setTimeout(() => window.open('https://www.instagram.com/karen.arievilo/', '_blank'), 3000))
        },
        {
            name: 'Email',
            icon: <MdOutlineEmail />,
            onClick: () => window.open('mailto:karenarievilo.dsr@gmail.com', '_blank')
        },
        {
            name: 'Telefone',
            icon: <MdOutlinePhoneInTalk />,
            onClick: () => navigator.clipboard.writeText('21978723153').then(() => setMessage('Número (21) 97872-3153 copiado!'))
        }
    ]

    return (        
        <Modal
            className='socials'
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" color={'#333'} component="h2" textAlign={'center'}>
                    Social Media
                </Typography>
                <Divider sx={{ mt: 2, background: "#333" }} />
                <Alert severity="success" sx={{ mt: 2, display: message ? 'flex' : 'none' }} onClose={() => setMessage('')} >
                    {message}
                </Alert>
                <div className="btn-area">
                    {
                        buttons.map((button, index) => (
                            <>
                                <Button key={index} sx={{ mt: 1 }} startIcon={button.icon} onClick={button.onClick}>
                                    {button.name}
                                </Button>
                                {index < buttons.length - 1 ? <Divider sx={{ mt: 1, background: "#333" }} flexItem orientation="vertical"/> : null}
                            </>
                        ))
                    }
                </div>
                <Button sx={{ mt: 6 }} onClick={close} fullWidth>Fechar</Button>
            </Box>
        </Modal>
        
    )
}

Socials.propTypes = {
    close: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
}