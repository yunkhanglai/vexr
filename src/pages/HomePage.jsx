import NavBarMain from './NavBarMain';
import ButtonLogin from '../components/ButtonLogin';

function HomePage() {
  return (
    <div>
      <NavBarMain />
      <h1>Welcome</h1>
      <p>Paragraph text here.</p>
        <ButtonLogin onClick={() => console.log('Login clicked!')} />
        
      <p>Button above</p>
    </div>
  );
}
  
  export default HomePage;