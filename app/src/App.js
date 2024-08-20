import React from 'react';
import styles from './styles/HomeStyles/App.module.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className={styles.app}>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
          <Footer/>
        </BrowserRouter>
      </div>

  );
};

export default App;