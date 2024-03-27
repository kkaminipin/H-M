import './styles/reset.css';
import './styles/App.css';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {}, [authenticate]);
  return (
    <>
      <div className='wrap'>
        <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />
        <Container
          authenticate={authenticate}
          setAuthenticate={setAuthenticate}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
