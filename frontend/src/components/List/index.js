import React from 'react'


import Card from '../Card'
import { Container } from './styles'



export default function List(props) {

    var date2 = new Date(2020, 5, 13);

    const newPlant = {

        plantName: 'Orostachys boehmeri',
        plantAlias: 'Rosinha-de-pedra',
        activity: "2,1,1,2",
        propagation: "true,true,true,true",
        shadowNeed: 2,
        sunNeed: 2,
        waterNeed: 0,  
    }

    function plantify(plant){

        const activity = plant.activity.split(",").map(value => Number(value))
        const propagation = plant.propagation.split(',').map(value => value === 'true' ? true : false)
        const { plantName, plantAlias, shadowNeed, sunNeed, waterNeed } = plant
        const newPlant = {
            plantName,
            plantAlias,
            shadowNeed,
            sunNeed,
            waterNeed,
            activity,
            propagation,
            lastWatering: date2
        }

        console.log(newPlant, 'new')

        return newPlant
    }

    const plant = plantify(newPlant)

    // const plant = {

    //     name: 'Orostachys boehmeri',
    //     alias: 'Rosinha-de-pedra',
    //     light: 'Full sun to partial shade',
    //     propagation: 'by offsets',
    //     activity: 'winter dormant',
    //     lastWatering: date2
    // }

    const plants = [plant, plant, plant, plant, plant, plant, plant];

    return (

        <>
            <Container>
                {plants.map((plant, index) => (
                    <div key={index}>
                    <Card plant={plant} />
                    </div>
                ))}

            </Container>
        </>
    )
};
