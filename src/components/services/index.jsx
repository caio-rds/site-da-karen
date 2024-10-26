import { Typography, Box } from '@mui/material';
import Service1 from '../../assets/service1.png';
import Service2 from '../../assets/service2.png';
import Service3 from '../../assets/service3.png';
import './styles.css';

const services = [
  {
    title: 'Designer de Interior',
    description: 'Transforme seu espaço em um ambiente dos seus sonhos.',
    image: Service1,
  },
  {
    title: 'Space Planning',
    description: 'Aproveite ao máximo seu espaço de forma criativa.',
    image: Service2,
  },
  {
    title: 'Renderização 3D',
    description: 'Visualize seu espaço antes de dar vida a ele.',
    image: Service3,
  },
];

const Services = () => {
  return (
      <Box sx={{display: 'flex',paddingBottom: '4px', flexDirection: {xs: 'column', md: 'row'}, gap: '10px'}}>
          {services.map((service, index) => (
              <div key={index} className='service' style={{}}>
                <img src={service.image} alt={service.title} style={{width: 100, height: 100, borderRadius: 8}}/>
                <Box sx={{justifyContent: 'flex-start', paddingLeft: 1}}>
                  <Typography variant="h6" color='#333'>{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{maxWidth: '270px'}}>{service.description}</Typography>
                </Box>
              </div>
          ))}
      </Box>
  );
};

export default Services;