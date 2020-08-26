import React, { useState } from 'react'

import { seasonsEnum, activityEnum, propEnum, lightNeedsShadowEnum, lightNeedsSunEnum } from '../../utils/Enums'

import {
    Container,
    InfoContainer,
    Info,
    Icon,
    IconContainer,
    WateringWarn,
    WateringWarnSpin,
    Image,
    Label
} from './styles'

import {
    ShadowIcon, SunIcon, DormantIcon,
    ActiveIcon,
    WinterIcon,
    SummerIcon,
    FallIcon,
    SpringIcon,
    WaterWarningIcon,
} from '../../styles/icons'

import Tooltip from '../../utils/Tooltip'


export default function PlantCard({ plant }) {

    const [day, month, dayNumber, year] = plant.lastWatering.toDateString().split(" ")
    const [dateData, setDateData] = useState({
        day,
        month,
        dayNumber,
        year
    })
    const today = new Date()

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


    return (
        <>
            <Container>
                <InfoContainer>
                    <h1>{plant.plantName}</h1>
                    <h2>{plant.plantAlias}</h2>

                    <Info>
                        <Label>Light</Label>
                        <IconContainer>

                            <Icon>
                                <ShadowIcon className={`color-variant${plant.shadowNeed}`} />
                                <Tooltip>{lightNeedsShadowEnum[plant.shadowNeed]}</Tooltip>
                            </Icon>

                            <Icon>
                                <SunIcon className={`color-variant${plant.sunNeed}`} />
                                <Tooltip>{lightNeedsSunEnum[plant.sunNeed]}</Tooltip>
                            </Icon>


                        </IconContainer>
                    </Info>

                    <Info>
                        <Label>Propagation</Label>
                        <IconContainer>

                            {plant.propagation.map((propagationMethod, index) => (
                                propagationMethod && <Icon key={index}>{propEnum[index]}</Icon>
                            ))}
                        </IconContainer>
                    </Info>

                    <Info>
                        <Label>Activity</Label>
                        <IconContainer>

                            {plant.activity.map((seasonActivity, index) => (
                                !!seasonActivity && <Icon key={index}>{
                                    {
                                        0: <SummerIcon />,
                                        1: <FallIcon />,
                                        2: <WinterIcon />,
                                        3: <SpringIcon />
                                    }[index]
                                }
                                    {{
                                        0: null,
                                        1: <ActiveIcon />,
                                        2: <DormantIcon />,
                                    }[seasonActivity]}

                                    {
                                        !!seasonActivity &&
                                        <Tooltip>{seasonsEnum[index]} {activityEnum[seasonActivity]}</Tooltip>
                                    }</Icon>
                            ))}
                        </IconContainer>
                    </Info>
                </InfoContainer>

                <Image src={'http://www.jardineiro.net/wp-content/uploads/2017/11/Orostachys_boehmeri.jpg'} alt={'Plant'}/>
                <WateringWarn>
                    <WaterWarningIcon />
                    <WateringWarnSpin />
                </WateringWarn>

            </Container>
        </>
    )
}