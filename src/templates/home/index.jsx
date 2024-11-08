import {Typography, Box, Button } from '@mui/material';
import { useEffect } from 'react';

import FrontImage from "../../components/front/index.jsx";
import Services from "../../components/services/index.jsx";
import { useState } from 'react';
import Projects from '../../components/projects/index.jsx';
import Socials from '../../components/socials/index.jsx';


function HomeTemplate() {
    const [projects, setProjects] = useState(false);
    const [socials, setSocials] = useState(false);

    const showProjectsTrue = () => {
        setSocials(false);
        setProjects(true);
    }

    const showProjectsFalse = () => {
        setSocials(false);
        setProjects(false);
    }

    const showSocialsTrue = () => {
        setProjects(false);
        setSocials(true);
    }

    const showSocialsFalse = () => {
        setProjects(false);
        setSocials(false);
    }

    useEffect(() => {
        if (projects || socials) {
            document.getElementsByClassName('content')[0].style.filter = 'blur(5px)';
        } else {
            document.getElementsByClassName('content')[0].style.filter = 'none';
        }
    }, [projects, socials]);


    return (
        <div className={'content'}>            
            <FrontImage />
            <div className='services'>
                <Typography color='#333' variant="body1" textAlign={'left'} gutterBottom>
                    Conheça um pouco mais sobre mim e o que posso fazer por você.
                </Typography>
                <Services />
                <Box className={'button-area'}>
                    <Button color="primary" fullWidth onClick={showSocialsTrue}>FAÇA UMA CONSULTA</Button>
                    <Button color="primary" fullWidth onClick={showProjectsTrue}>VEJA MEUS PROJETOS</Button>
                </Box>
            </div>
            <Projects close={showProjectsFalse} open={projects}/>
            <Socials close={showSocialsFalse} open={socials}/>
        </div>
    );
}

export default HomeTemplate;
