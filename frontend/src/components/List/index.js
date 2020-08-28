import React from 'react'


import Card from '../Card'
import { Container } from './styles'

export default function List({ plants }) {
    

    const plantifiedsPlants = plants.map((plant) => plantify(plant))

    function plantify(plant){

        const lastWatering = new Date(plant.lastWatering)
        const activity = plant.activity.split(",").map(value => Number(value))
        const propagation = plant.propagation.split(',').map(value => value === 'true' ? true : false)
        const { name, alias, imgsrc, shadowNeed, sunNeed, waterNeed } = plant
        
        const newPlant = {
            name,
            alias,
            imgsrc,
            propagation,
            activity,
            lastWatering,
            waterNeed,
            sunNeed,
            shadowNeed,
        }

        return newPlant
    }

    return (

        <>
            <Container>
                {plantifiedsPlants.map((plant, index) => (
                    <div key={index}>
                    <Card plant={plant} />
                    </div>
                ))}

            </Container>
        </>
    )
};
