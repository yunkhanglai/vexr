import NavBar from './NavBar';

import Button from '../components/Button';
import SectionHero from '../sections/SectionHero';

function HomePage() {
  return (
    <div>
      <NavBar />
      <SectionHero />
      <Button onClick = { () => alert("TEST") } />

    </div>
  );
}
  
  export default HomePage;