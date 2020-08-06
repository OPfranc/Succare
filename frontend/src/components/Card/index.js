import React, { useState, useEffect } from 'react'

import { Container } from './styles'

export default function Card({ plant }) {

    const { name, alias: sourceAlias, imgsrc, light, propagation, activity, water, info } = plant;

    console.log(sourceAlias);
    const {en, ptbr} = sourceAlias;
    console.log(en);

    return (
        <>
            <Container>

                <h1>{name}</h1>
                {/* <h2>{alias}</h2> */}
                <img src={imgsrc} />
                <p>{light}</p>
                <p>{propagation}</p>

                <p>{activity}</p>
                <p>{water}</p>
                <p>{info}</p>

            </Container>
        </>
    )
}