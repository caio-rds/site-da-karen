import { Typography } from "@mui/material";
import background from '../../assets/background.png';
import { MdOutlineDesignServices } from "react-icons/md";
import './styles.css'


export default function FrontImage() {

    return (
        <div className={'mobile-front'}>
            <img src={background} alt="Karen Arievilo"/>
            <span>
                <div className="header">
                    <MdOutlineDesignServices style={{width: '50px', height: '50px'}}/>
                    <Typography variant="h3">Karen Arievilo</Typography>
                </div>
                
                <Typography variant='h6' textAlign={'center'} maxWidth={{xs: '96%', md: '70%'}} gutterBottom>
                    Planejamento e execução de projetos residenciais e comerciais oferecendo soluções criativas e funcionais para cada ambiente.
                </Typography>
            </span>
        </div>
    )
}