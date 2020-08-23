import React, { useState } from 'react'

import {
    Container,
    Info,
    CardHeader,
    HiddenInfo,
    Description,
    Watering,
    Buttom,
    InfoContainer,
    Tooltip,
    Selector
} from './styles'

import { ShadowIcon, SunIcon } from '../../styles/icons'

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


    let today = new Date()


    function wateringHandler() {
        plant.lastWatering = today;
        const [day, month, dayNumber, year] = plant.lastWatering.toDateString().split(" ")
        setDateData({ day, month, dayNumber, year })
    }

    function daysCount(date2) {

        const differenceMs = Math.abs((new Date()) - date2);
        return Math.round(differenceMs / (1000 * 60 * 60 * 24));

    }



    const daysSinceWatering = daysCount(plant.lastWatering)
    let waterNeedColor = '#44ff00'

    if (daysSinceWatering > 3)
        waterNeedColor = '#fff600'
    if (daysSinceWatering > 7)
        waterNeedColor = '#ff9300'
    if (daysSinceWatering > 14)
        waterNeedColor = '#ff0000'


    return (

        <>
            <Container>
                <Info>

                    <CardHeader>

                        <h1>{plant.plantName}</h1>
                        <h2>{plant.plantAlias}</h2>
                    </CardHeader>
                    <HiddenInfo>

                        <Buttom onClick={wateringHandler} />

                        <InfoContainer>
                            <span>Light</span>
                            <div>
                                <Selector>

                                    <ShadowIcon className={`color-variant${plant.shadowNeed}`} />
                                    <Tooltip>{lightNeedsShadow[plant.shadowNeed]}</Tooltip>
                                </Selector>
                                <Selector>

                                    <SunIcon className={`color-variant${plant.sunNeed}`} />
                                    <Tooltip>{lightNeedsShadow[plant.sunNeed]}</Tooltip>
                                </Selector>
                            </div>
                        </InfoContainer>

                        <div>
                            <h4>Light:</h4>
                            <ShadowIcon className={`color-variant${plant.shadowNeed}`} />
                            <p>{lightNeedsShadow[plant.shadowNeed]}</p>
                            <SunIcon className={`color-variant${plant.sunNeed}`} />
                            <p>{lightNeedsShadow[plant.sunNeed]}</p>
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



