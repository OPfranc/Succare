import React, { useState, useEffect } from 'react';

import GlobalStyles from './styles/GlobalStyles'

import api from './services/api'

import Header from './components/Header'
import List from './components/List'




function App() {

  const [plants, setPlants] = useState([])


  useEffect(() => {

    (async () => {
      const response = await api.get(`/`)
      const { data } = response
      
      setPlants(data)
    })() 

  }, [])


  return (
    <>
      <Header/>
      <List plantList={plants}/>
      app
      <GlobalStyles/>
    </>
  );
}

export default App;
