import React from 'react'


import Card from '../Card'
import { Container } from './styles'



export default function List(props) {

    var date2 = new Date(2020, 7, 13);

    const plant = {

        name: 'Orostachys boehmeri',
        alias: 'Rosinha-de-pedra',
        light: 'Full sun to partial shade',
        propagation: 'by offsets',
        activity: 'winter dormant',
        lastWatering: date2
    }

    const plants = [plant, plant, plant, plant, plant, plant, plant];

    return (

        <>
            <Container>
                {plants.map((plant, index) => (
                    <Card plant={plant} key={index}/>
                ))}

            </Container>
        </>
    )
};
