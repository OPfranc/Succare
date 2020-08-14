import React from 'react'

import { Container, Info, CardHeader, HiddenInfo, Description, Watering } from './styles'

export default function NewCard() {

    let today = new Date()
    console.log(today.toDateString())
    const [day, month, dayNumber, year] = today.toDateString().split(" ")
    console.log(month)


    const plant = {

        name: 'Orostachys boehmeri',
        alias: 'Rosinha-de-pedra',
        light: 'Full sun to partial shade',
        propagation: 'by offsets',
        activity: 'winter dormant',
        lastWatering: `${month}/${dayNumber}`
    }

    var date2 = new Date(2020, 7, 13);

    function daysCount(date2) {

        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs((new Date()) - date2);
    
        return Math.round(differenceMs / ONE_DAY);
    
    }

    const daysSinceWatering = daysCount(date2)
    

    const plants = [plant, plant, plant, plant, plant, plant, plant];


    return (

        <>
            {plants.map((p, index) => (
                <Container key={index}>


                    <Info>

                        <CardHeader>

                            <h1>{p.name}</h1>
                            <h2>{p.alias}</h2>
                        </CardHeader>
                        <HiddenInfo>

                            <button>aaaaa</button>

                            <div>
                                <strong>Light:</strong>
                                <span>{p.light}</span>
                            </div>

                            <div>
                                <strong>Propagation:</strong>
                                <span>{p.propagation}</span>
                            </div>

                            <div>
                                <strong>Activity:</strong>
                                <span>{p.activity}</span>
                            </div>
                            <p>Last watering: {p.lastWatering}</p>
                        </HiddenInfo>
                    </Info>

                    <Description>

                        <img src={'http://www.jardineiro.net/wp-content/uploads/2017/11/Orostachys_boehmeri.jpg'} />
                        
                        <Watering color={daysSinceWatering > 5 ? 'red' : 'blue'}/>
                    </Description>
                </Container>
            ))}
        </>
    )

}



