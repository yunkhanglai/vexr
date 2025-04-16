import NavBar from './NavBar';

import Button from '../components/Button';
import SectionHero from '../sections/SectionHero';

import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <SectionHero />
      <Button onClick = { () => navigate('/login') } />

    </div>
  );
}
  
  export default HomePage;