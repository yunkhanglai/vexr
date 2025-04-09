import buttonLogin from '../components/buttonLogin';

function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Paragraph text here.</p>
        <buttonLogin onClick={() => console.log('Login clicked!')} />
      <p>Button above</p>
    </div>
  );
}
  
  export default HomePage;