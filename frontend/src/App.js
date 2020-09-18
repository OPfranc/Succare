import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { firestore } from './services/firebase'
import usePersistedState from './utils/usePersistedState'
import { plantDocToData } from './utils/docToData'

import PlantForm from './components/PlantForm'
import NewButton from './components/NewButton'
import Header from './components/Header'
import List from './components/List'


function App() {

	const [plants, setPlants] = useState([])
	const [plants2, setPlants2] = useState([])

	const [showNewForm, setShowNewForm] = useState(false)

	const [theme, setTheme] = usePersistedState('theme', dark)
	const [ user ] = usePersistedState('user', null)

	useEffect(() => {

		firestore.collection('plants').onSnapshot(snapshot => (
			setPlants((snapshot.docs.map(doc => (plantDocToData(doc)))))
		))
	}, [])

	console.log({user});

	useEffect(() => {

		console.log('aaaa');
		setPlants2([])

		if (user)
			firestore.collection(`user/${user.uid}/plants`).onSnapshot(snapshot => (
				((snapshot.docs.map(doc => (
					firestore.collection('plants').doc(doc.id).get().then(a => {
						setPlants2(prevState => [...prevState, plantDocToData(a)])
					}))
				)))
			))

	}, [user])


	function switchTheme() {

		setTheme(theme.title === 'dark' ? light : dark)
	}


	return (
		<>
			<ThemeProvider theme={theme}>

				<Header switchTheme={switchTheme} />
				{showNewForm && <PlantForm close={setShowNewForm} />}
				<h2>Collection</h2>
				<List plants={plants2} />
				<h2>Collection2</h2>
				<List plants={plants} />
				<NewButton onClick={() => { setShowNewForm(true) }} />
				<GlobalStyles />
			</ThemeProvider>
		</>
	);
}

export default App;
