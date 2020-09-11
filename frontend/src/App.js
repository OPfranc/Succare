import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import api from './services/api'
import { firestore } from './services/firebase'
import usePersistedState from './utils/usePersistedState'

import PlantForm from './components/PlantForm'
import NewButton from './components/NewButton'
import Header from './components/Header'
import List from './components/List'


function App() {

	const [watcher, setWatcher] = useState('')

	const [plants, setPlants] = useState([])

	// ################

	const [plants2, setPlants2] = useState([])

	useEffect(() => {

		firestore.collection('plants').onSnapshot(snapshot => (
			setPlants2((snapshot.docs.map( doc => ({
				id : doc.id,
				name : doc.data().name,
				alias : doc.data().alias,
				activity : doc.data().activity || '',
				imgsrc : doc.data().imgsrc || 'https://via.placeholder.com/150/FF0000/808080/?text=Down.com',
				propagation : doc.data().propagation || 'n',
				lastWatering : doc.data().lastWatering,
				shadowNeed : doc.data().shadowNeed || 2,
				sunNeed : doc.data().sunNeed || 2,
				waterNeed : doc.data().waterNeed || 2,

			}))))
		))
	}, [])

	useEffect(() => {
		console.log(plants2);
	}, [plants2])

	// ###############

	const [showNewForm, setShowNewForm] = useState(false)

	const [theme, setTheme] = usePersistedState('theme', dark)

	function switchTheme() {

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
				<Header switchTheme={switchTheme} />
				{showNewForm && <PlantForm close={setShowNewForm} watcher={setWatcher} />}
				{/* <List plants={plants} /> */}
				<List plants={plants2} />
				<NewButton onClick={() => { setShowNewForm(true) }} />
				<GlobalStyles />
			</ThemeProvider>
		</>
	);
}

export default App;
