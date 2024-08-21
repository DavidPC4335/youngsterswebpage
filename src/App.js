import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="present" element = {<PresentationScreen />} />
      {/* Page Not Found */}
      <Route path='*' element={<><Header/><Stack pt={15}><NotFoundComponent title={'Whoops.... 404 Page Not Found'}/></Stack></>} />
      </Routes>
  );
}

export default App;
