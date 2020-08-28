import React, { useState } from 'react'

import {
    seasonsEnum,
    activityEnum,
    propEnum,
    lightNeedsShadowEnum,
    lightNeedsSunEnum,
    wateringLevelEnum
} from '../../utils/Enums'

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

export default function Card({ plant }) {

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

    const waterWarningLevel = calculateWaterWarning()

        function calculateWaterWarning() {
            switch (plant.waterNeed) {
                case 1:
                    if (daysSinceWatering >= 6 && daysSinceWatering < 12)
                        return 1

                    if (daysSinceWatering >= 12)
                        return 2
                    break
                case 2:
                    if (daysSinceWatering >= 4 && daysSinceWatering < 8)
                        return 1

                    if (daysSinceWatering >= 8)
                        return 2
                    break

                default:
                    if (daysSinceWatering >= 9 && daysSinceWatering < 15)
                        return 1
                    if (daysSinceWatering >= 15)
                        return 2
            }
        }

    return (
        <>
            <Container>
                <InfoContainer>
                    <h1>{plant.name}</h1>
                    <h2>{plant.alias}</h2>

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
                                        <Tooltip >{seasonsEnum[index]} {activityEnum[seasonActivity]}</Tooltip>
                                    }</Icon>
                            ))}
                        </IconContainer>
                    </Info>

                    <Info >
                        <h4 >Last Watering</h4>
                        <h2>{dateData.month}/{dateData.dayNumber}</h2>

                        <button onClick={wateringHandler}>aaa</button>
                    </Info>
                </InfoContainer>

                <Image src={plant.imgsrc} alt={'Plant'} />

                <WateringWarn className={wateringLevelEnum[waterWarningLevel]}>
                    <WaterWarningIcon />
                    <WateringWarnSpin className={wateringLevelEnum[waterWarningLevel]}/>
                </WateringWarn>

            </Container>
        </>
    )
}