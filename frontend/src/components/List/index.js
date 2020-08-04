import React from 'react'

import { Container } from './styles'


export default function List({ plantList }) {


    return (

        <>
            <Container>

                {plantList.map((plant, index) => (
                    <ul key={index}>
                        <li >
                            <strong>{plant.name}</strong>
                            <p>{plant.alias}</p>
                            <p>{plant.light}</p>
                            <p>{plant.propagation}</p>
                            <p>{plant.activity}</p>
                            <p>{plant.water}</p>
                            <p>{plant.info}</p>
                            <img src={plant.imgsrc}/>

                        </li>
                    </ul>
                ))}

            </Container>
        </>
    )
};
