import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import Player from './Player';
import Header from '../../ui/Header';
import Catalog from '../../ui/Catalog';

const Home = () => {
  return (
    <div className="App">
      <h1>Cars catalog</h1>

      <Header />

      {/* <Player src="/video2.mp4" /> */}

      <CreateCarForm />

      <Catalog />
    </div>
  );
};

export default Home;
