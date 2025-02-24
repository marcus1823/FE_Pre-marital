import React from 'react';
import AppRoutes from './Routes/AppRoutes';
// import Header from './components/Header';
// import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <AppRoutes />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
