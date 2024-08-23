import React, { useEffect } from 'react'

import Navigation from './Navigation';
import { StatusBar } from 'react-native';

export default function App() {

  useEffect(() => {
    // Cambia el color de la barra de estado
    StatusBar.setBackgroundColor('lightgreen'); 
  }, []);

  return (
    <Navigation>
    </Navigation>
  );
}

