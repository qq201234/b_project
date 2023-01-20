// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Evaluation from './components/evaluation/Evaluation';
import Collect from './components/collect/Collect';
import Signin from './components/signin/Signin';

function App() {
  return (
    <>
      <Header />
      {/* <Evaluation /> */}
      {/* <Collect /> */}
      {/* <Register /> */}
      <Signin />
      <Footer />
    </>
  );
}

export default App;
