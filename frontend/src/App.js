import React, { useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import api from './services/api'
import usePersistedState from './utils/usePersistedState'

import PlantForm from './components/PlantForm'
import NewButton from './components/NewButton'
import Header from './components/Header'
import List from './components/List'


function App() {

  const [watcher, setWatcher] = useState('')

  const [plants, setPlants] = useState([])

  const [showNewForm, setShowNewForm] = useState(false)

  const [theme, setTheme] = usePersistedState('theme', dark)

  function switchTheme(){

    setTheme(theme.title === 'dark' ? light : dark)
  }


  useEffect(() => {

    (async () => {
      const response = await api.get(`/`)
      const { data } = response

      setPlants(data)
    })()

  }, [watcher])


  return (
    <>
      <ThemeProvider theme={theme}>
        <Header switchTheme={switchTheme}/>
        { showNewForm && <PlantForm close={setShowNewForm} watcher={setWatcher}/> }
         <List plants={plants}/>
         <NewButton onClick={() => {setShowNewForm(true)}}/>
      <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
