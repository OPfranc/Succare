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
    Selector
} from './styles'

import { ShadowIcon, SunIcon } from '../../styles/icons'

import { propEnum } from '../../utils/Enums'


export default function NewCard({ plant }) {


    const [day, month, dayNumber, year] = plant.lastWatering.toDateString().split(" ")
    const [dateData, setDateData] = useState({
        day,
        month,
        dayNumber,
        year
    })

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

                        {/* <InfoContainer>
                            <span>Light</span>
                            <div>
                                <Selector>

                                    <ShadowIcon className={`color-variant${plant.shadowNeed}`} />
                                    <Tooltip>{lightNeedsShadow[plant.shadowNeed]}</Tooltip>
                                </Selector>
                                <Selector>

                                    <SunIcon className={`color-variant${plant.sunNeed}`} />
                                    <Tooltip>{lightNeedsSun[plant.sunNeed]}</Tooltip>
                                </Selector>
                            </div>
                        </InfoContainer> */}
{/* 
                        <InfoContainer>
                            <span>Propagation by</span>
                            <div>
                                {plant.propagation.map((propagationMethod, index) => (
                                    propagationMethod && <h4 key={index}>{propEnum[index]}</h4>
                                ))}
                            </div>
                        </InfoContainer> */}

                        <InfoContainer>
                            <span>Activity</span>
                            <div>
                                {plant.activity.map((seasonActivity, index) => (
                                    !!seasonActivity && <Selector key={index} ></Selector>
                                ))}
                            </div>
                        </InfoContainer>



                        <div>
                            <strong>Activity:</strong>
                            <span>{plant.activity}</span>
                        </div>
                        <p>Last watering: {dateData.month}/{dateData.dayNumber}</p>
                        <Buttom onClick={wateringHandler} />
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



