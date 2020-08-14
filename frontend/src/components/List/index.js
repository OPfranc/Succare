import React from 'react'

import Card from '../Card'
import { Container } from './styles'



export default function List(props) {


    return (

        <>
            <Container>
            {props.children}
                {/* {plantList.map((plant, index) => (

                    <Card plant={plant} key={index} />

                ))} */}

            </Container>
        </>
    )
};
