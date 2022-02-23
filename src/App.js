import { Routes, Route } from 'react-router-dom';

// Components
import { Header } from './components';

// Pages
import {
  ShoesCollection,
  ShoePage,
  YTToMp3,
} from './pages';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/*Shoes collection API*/}
          <Route path="/shoes-collection" element={<ShoesCollection />} />
          <Route path="/shoes-collection/:shoeId" element={<ShoePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
