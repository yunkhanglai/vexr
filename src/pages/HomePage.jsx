import NavBar from './NavBar';
import Button from '../components/Button';
import YunButton from '../components/YunButton';



function HomePage() {
  return (
    <div>
      <NavBar> </NavBar>




      <YunButton 
        name="IGNORAMUS!" 
        secondproperty="KAJSLKDJALSD" 
        lalala="17882713" 
      />



      <h1>Main heading (largest)</h1>
      <h2>Subheading</h2>
      <h3>Smaller subheading</h3>
      <h4>Section title</h4>
      <h5>Subsection</h5>
      <h6>Smallest heading</h6>

      <p>Paragraph text here.</p>
      <p>This is a paragraph.</p>

      <span>Inline text or styling.</span><br/>
      <strong>Bold text</strong><br/>
      <em>Italic text</em><br/>

      <Button onClick={() => console.log('Login clicked!')} />


    </div>
  );
}
  
  export default HomePage;