import React, { useState } from 'react'

import { Container,
     Info,
     CardHeader,
     HiddenInfo,
     Description,
     Watering,
     Buttom } from './styles'

export default function NewCard({ plant }) {


    const [day, month, dayNumber, year] = plant.lastWatering.toDateString().split(" ")
    const [dateData, setDateData] = useState({
        day,
        month,
        dayNumber,
        year
    })

    let lightNeedsSunIndex = 0
    let lightNeedsShadowIndex = 0

    const lightNeedsSun = [
        'no sun',
        'partial sun',
        'full sun'
    ]
    const lightNeedsShadow = [
        'no shadow',
        'partial shadow',
        'shadow'
    ]


    function sunNeedsButtonHandler(){
        lightNeedsSunIndex = ((1 + lightNeedsSunIndex) % lightNeedsSun.length)
        console.log(lightNeedsSunIndex, 'SUN');
    }
    function shadowNeedsButtonHandler(){
        lightNeedsShadowIndex = ((1 + lightNeedsShadowIndex) % lightNeedsShadow.length)
        console.log(lightNeedsShadowIndex, 'SHADOW');
    }

    let today = new Date()


    function wateringHandler() {
        plant.lastWatering = today;
        const [day, month, dayNumber, year] = plant.lastWatering.toDateString().split(" ")
        setDateData({day, month, dayNumber, year})
    }

    function daysCount(date2) {

        const differenceMs = Math.abs((new Date()) - date2);
        return Math.round(differenceMs / (1000 * 60 * 60 * 24));

    }



    const daysSinceWatering = daysCount(plant.lastWatering)
    let waterNeedColor = '#44ff00'

    if(daysSinceWatering > 3)
        waterNeedColor = '#fff600'
    if(daysSinceWatering > 7)
        waterNeedColor = '#ff9300'
    if(daysSinceWatering > 14)
    waterNeedColor = '#ff0000'


    return (

        <>
            <Container>
                <Info>

                    <CardHeader>

                        <h1>{plant.name}</h1>
                        <h2>{plant.alias}</h2>
                        </CardHeader>
                    <HiddenInfo>

                        <Buttom onClick={wateringHandler}/>

                        <Buttom onClick={sunNeedsButtonHandler}/>
                        <Buttom onClick={shadowNeedsButtonHandler}/>
                        <div>
                            <strong>Light:</strong>
                            <span>{plant.light}</span>
                        </div>

                        <div>
                            <strong>Propagation:</strong>
                            <span>{plant.propagation}</span>
                        </div>

                        <div>
                            <strong>Activity:</strong>
                            <span>{plant.activity}</span>
                        </div>
                        <p>Last watering: {dateData.month}/{dateData.dayNumber}</p>
                    </HiddenInfo>
                </Info>

                <Description>

                    <img src={'http://www.jardineiro.net/wp-content/uploads/2017/11/Orostachys_boehmeri.jpg'} alt={'Plant'} />

                    <Watering color={waterNeedColor} />
                </Description>
            </Container>
        </>
    )
}



