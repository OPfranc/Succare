import React from 'react'

import Card from '../Card'
import { Container } from './styles'



export default function List({ plantList }) {


    return (

        <>
            <Container>

                {plantList.map((plant, index) => (
                    <ul key={index}>
                        <li >
                            <Card plant={plant} />
                        </li>
                    </ul>
                ))}

            </Container>
        </>
    )
};
