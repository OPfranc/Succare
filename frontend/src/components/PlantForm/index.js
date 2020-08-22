import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import ConfirmBox from '../ConfirmBox'

import {
    Container,
    HiddenInput,
    ButtomContainer,
    Selector,
    WaterContainer,
    SendButton,
    TextInputContainer,
    Tooltip,
    Wrapper, } from './styles'

import { 
    DormantIcon,
    ActiveIcon,
    WinterIcon,
    SummerIcon,
    FallIcon,
    SpringIcon,
    SunIcon,
    ShadowIcon,    
    WaterDrop, } from '../../styles/icons'

import { seasonsEnum, propagationEnum, activityEnum, waterNeedsEnum } from '../../utils/Enums'


export default function PlantForm() {

    const [sunNeed, setSunNeed] = useState(2)
    const [waterNeed, setWaterNeed] = useState(1)
    const [propagation, setPropagation] = useState([false, false, false, true])
    const [activity, setActivity] = useState([0, 0, 1, 2])
    const [shadowNeed, setShadowNeed] = useState(2)

    const [showConfirmBox, setShowConfirmBox] = useState(false)

    const { register, handleSubmit, errors } = useForm()

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

    function sunNeedsButtonHandler() {
        setSunNeed(prevState => ((prevState + 1) % lightNeedsSun.length))
    }
    function shadowNeedsButtonHandler() {
        setShadowNeed(prevState => ((prevState + 1) % lightNeedsShadow.length))
    }

    function waterButtonHandler() {
        setWaterNeed(prevState => ((prevState + 1) % waterNeedsEnum.length))
    }

    function activityButtonHandler({ index }) {

        setActivity((prevState => {
            const newActivityState = prevState.map((value, mapIndex) =>
                mapIndex === index ? ((value + 1) % (activityEnum.length)) : value)
            return newActivityState
        }
        ))
    }

    function selectorHandler({ index }) {

        setPropagation((prevState => {
            const newPropagationState = prevState.map((value, mapIndex) =>
                mapIndex === index ? !value : value)
            return newPropagationState
        }
        ))
    }

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <Wrapper>
            <Container>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextInputContainer>
                        <span>Plant name</span>

                        <input
                            type={'text'}
                            name={'plantName'}
                            placeholder={'scientific name'}
                            ref={register({
                                required: 'Insert Plants name'
                            })} />

                        {errors.plantName && <h4>{errors.plantName.message}</h4>}
                    </TextInputContainer>

                    <TextInputContainer>
                        <span>Alias</span>
                        <input
                            type={'text'}
                            name={'plantAlias'}
                            placeholder={'common name'}
                            ref={register()}
                        />
                    </TextInputContainer>
                    <h2>Light</h2>
                    <ButtomContainer>

                        <Selector onClick={shadowNeedsButtonHandler} >
                            <ShadowIcon className={`color-variant${shadowNeed}`} />
                            <Tooltip>{lightNeedsShadow[shadowNeed]}</Tooltip>
                        </Selector>

                        <Selector onClick={sunNeedsButtonHandler} >
                            <SunIcon className={`color-variant${sunNeed}`}/>
                            <Tooltip>{lightNeedsSun[sunNeed]}</Tooltip>
                        </Selector>

                    </ButtomContainer>

                    <h2>Propagation</h2>

                    <ButtomContainer>

                        {propagation.map((method, index) => (
                            <Selector
                                key={index}
                                className={method ? 'selected' : ''}
                                onClick={() => { selectorHandler({ index }) }}
                            >
                                {Object.keys(propagationEnum)[index]}
                            </Selector>
                        ))}

                    </ButtomContainer>

                    <h2>Activity</h2>

                    <ButtomContainer>

                        {activity.map((seasonActivity, index) => (
                            <Selector
                                key={index}
                                className={seasonActivity !== 0 ? 'selected' : ''}
                                onClick={() => { activityButtonHandler({ index }) }}
                            >
                                {
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
                                }

                            </Selector>
                        ))}

                    </ButtomContainer>


                    <h2>Water</h2>

                    <WaterContainer onClick={waterButtonHandler}>

                        {[0,1,2].map((index) => (
                            <WaterDrop key={index} className={index <= waterNeed ? 'fill' : ''}/>
                        ))}
                        
                        <Tooltip>{waterNeedsEnum[waterNeed]}</Tooltip>

                    </WaterContainer>

                    <SendButton>Add plant</SendButton>

                    <HiddenInput

                        name={'sunNeed'}
                        value={sunNeed}
                        ref={register()}
                    />
                    <HiddenInput

                        name={'shadowNeed'}
                        value={shadowNeed}
                        ref={register()}
                    />
                    <HiddenInput

                        name={'propagation'}
                        value={propagation}
                        ref={register()}
                    />
                    <HiddenInput

                        name={'activity'}
                        value={activity}
                        ref={register()}
                    />
                    <HiddenInput

                        name={'waterNeed'}
                        value={waterNeed}
                        ref={register()}
                    />

                </form>

            </Container>

            {showConfirmBox && <ConfirmBox/>}
        </Wrapper>
    )

}