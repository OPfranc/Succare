import React, { useState, useEffect } from 'react'

import { Container } from './styles'

export default function Card({ plant }) {

    const { name, alias: sourceAlias, imgsrc, light, propagation, activity, water, info } = plant;

    console.log(sourceAlias);
    const { en, ptbr } = sourceAlias;
    console.log(en);

    return (
        <>
            <Container>

                <h1>{name}</h1>
                <h2>test</h2>
                {/* <h2>{alias}</h2> */}
                <img src={imgsrc} />
                <div>
                    <strong>Light:</strong><p>{light}</p>
                </div>
                <div>
                    <strong>Propagation:</strong><p>{propagation}</p>
                </div>
                <div>
                    <strong>activity:</strong><p>{activity}</p>
                </div>
                <div>
                    <strong>water:</strong><p>{water}</p>
                </div>
                {/* <p>{info}</p> */}

            </Container>
        </>
    )
}