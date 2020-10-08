import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'

import { useAuthState } from 'react-firebase-hooks/auth';



import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { firestore, auth } from './services/firebase'
import usePersistedState from './utils/usePersistedState'
import { plantDocToData } from './utils/docToData'

import PlantForm from './components/PlantForm'
import NewButton from './components/NewButton'
import Header from './components/Header'
import List from './components/List'




function App() {


	// function uploadImage() {
	// 	const r = new XMLHttpRequest()
	// 	const d = new FormData()
	// 	const e = document.getElementsByClassName('input-image')[0].files[0]
	// 	var u
	
	// 	d.append('image', e)
	
	// 	r.open('POST', 'https://api.imgur.com/3/image/')
	// 	r.setRequestHeader('Authorization', `Client-ID ${config.client}`)
	// 	r.onreadystatechange = function () {
	// 	  if(r.status === 200 && r.readyState === 4) {
	// 		let res = JSON.parse(r.responseText)
	// 		u = `https://i.imgur.com/${res.data.id}.png`
	
	// 		const d = document.createElement('div')
	// 		d.className = 'image'
	// 		document.getElementsByTagName('body')[0].appendChild(d)
	
	// 		const i = document.createElement('img')
	// 		i.className = 'image-src'
	// 		i.src = u
	// 		document.getElementsByClassName('image')[0].appendChild(i)
	
	// 		const a = document.createElement('a')
	// 		a.className= 'image-link'
	// 		a.href = u
	// 		document.getElementsByClassName('image')[0].appendChild(a)
	
	// 		const p = document.createElement('p')
	// 		p.className = 'image-url'
	// 		p.innerHTML = u
	// 		document.getElementsByClassName('image-link')[0].appendChild(p)
	// 	  }
	// 	}
	// 	r.send(d)
	//   }

	
	const [user, loading, error] = useAuthState(auth);

	// async function sendImageToImgur(e){

	// 	e.preventDefault()
		
	// 	const formData = new FormData()

	// 	imgurUploader.defaults.headers.common['Authorization'] = `Client-ID ${user?.uid}`

    // 	formData.append('type', 'file')
	// 	formData.append('image', img)

		
	// 	try {
	// 		const response = await imgurUploader.post('image', {
	// 		  headers: {
	// 			Authorization: `Client-ID ${user?.uid}`,
	// 		  },
	// 		  body: formData
	// 		})

	// 		console.log(response);

	// 	} catch (err) {
	// 		alert('Error Sending Image');
	// 	  }
	// }


	const [plants, setPlants] = useState([])
	const [userPlants, setUserPlants] = useState([])

	const [showNewForm, setShowNewForm] = useState(false)

	const [theme, setTheme] = usePersistedState('theme', dark)

	useEffect(() => {
		firestore.collection('plants').onSnapshot(snapshot => (
			setPlants((snapshot.docs.map(doc => (plantDocToData(doc)))))
		))
	}, [])


	useEffect(() => {

		setUserPlants([])
		
		if (user)
		firestore.collection(`user/${user.uid}/plants`).onSnapshot(snapshot => (
			((snapshot.docs.map(doc => (
				firestore.collection('plants').doc(doc.id).get().then(plant => {
						setUserPlants(prevState => [...prevState, plantDocToData(plant)])
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
				{/* <form onSubmit={e => {
					e.preventDefault()
					console.log(e.target.files)
					
					}}>
					<input type={'file'} onChange={e => {
						setImg(e.target.files[0])
						console.log(e.target.files, 'input')
					
					}}/>
					<button type={'submit'} >SEND</button>

				</form>
					<button onClick={sendImageToImgur}>send to imgur</button> */}
				{/* <h2>Collection</h2> */}
				<List plants={user? userPlants : plants} />
				<NewButton onClick={() => { setShowNewForm(true) }} />
				<GlobalStyles />
			</ThemeProvider>
		</>
	);
}

export default App;
