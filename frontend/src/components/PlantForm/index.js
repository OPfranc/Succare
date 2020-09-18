import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import ConfirmBox from '../ConfirmBox'

import Tooltip from '../../utils/Tooltip'

import { firestore } from '../../services/firebase'



import {
    Container,
    HiddenInput,
    ButtomContainer,
    Selector,
    WaterContainer,
    SendButton,
    TextInputContainer,
    Wrapper,
    Close
} from './styles'

import {
    DormantIcon,
    ActiveIcon,
    WinterIcon,
    SummerIcon,
    FallIcon,
    SpringIcon,
    SunIcon,
    ShadowIcon,
    WaterDrop,
} from '../../styles/icons'

import {
    seasonsEnum,
    propagationEnum,
    activityEnum,
    waterNeedsEnum,
    lightNeedsSunEnum,
    lightNeedsShadowEnum
} from '../../utils/Enums'


export default function PlantForm({ close : closeWindow }) {

    const [waterNeed, setWaterNeed] = useState(1)
    const [propagation, setPropagation] = useState([false, false, false, false])
    const [activity, setActivity] = useState([0, 0, 0, 0])
    const [sunNeed, setSunNeed] = useState(0)
    const [shadowNeed, setShadowNeed] = useState(0)
    const [data, setData] = useState({})

    const [showConfirmBox, setShowConfirmBox] = useState(false)

    const { register, handleSubmit, errors } = useForm()



    async function SendConfirmation(){
        await Send()

        setShowConfirmBox(false)
    }

    async function Send() {
        const { name, alias, activity, imgsrc, propagation, shadowNeed: shadow, sunNeed: sun, waterNeed: water } = data

        const shadowNeed = Number(shadow)
        const sunNeed = Number(sun)
        const waterNeed = Number(water)

        const lastWatering = new Date()

        const plant = {

            name,
            alias,
            imgsrc,

            propagation,
            activity,

            lastWatering,

            shadowNeed,
            sunNeed,
            waterNeed
        }

        const plantRef = await firestore.collection('plants').add(plant) //SQLITE3
        
        closeWindow(false)
        console.log(plantRef);
        console.log(plantRef.data);
    }

    function sunNeedsButtonHandler() {
        setSunNeed(prevState => ((prevState + 1) % lightNeedsSunEnum.length))
    }
    function shadowNeedsButtonHandler() {
        setShadowNeed(prevState => ((prevState + 1) % lightNeedsShadowEnum.length))
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


        setShowConfirmBox(true)
        setData(data)
        console.log(data, 'data');
    }

    return (
        <Wrapper classname={'wrapper'} >
            <Container classname={'container'}>
                <Close onClick={() => { closeWindow(false) }}>X</Close>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextInputContainer>
                        <span>Plant name</span>

                        <input
                            type={'text'}
                            name={'name'}
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
                            name={'alias'}
                            placeholder={'common name'}
                            ref={register()}
                        />
                    </TextInputContainer>

                    <TextInputContainer>
                        <span>Image src</span>
                        <input
                            type={'html'}
                            name={'imgsrc'}
                            placeholder={'link to plant image'}
                            ref={register()}
                        />
                    </TextInputContainer>

                    <h2>Light</h2>
                    <ButtomContainer>

                        <Selector onClick={shadowNeedsButtonHandler} >
                            <ShadowIcon className={`color-variant${shadowNeed}`} />
                            <Tooltip>{lightNeedsShadowEnum[shadowNeed]}</Tooltip>
                        </Selector>

                        <Selector onClick={sunNeedsButtonHandler} >
                            <SunIcon className={`color-variant${sunNeed}`} />
                            <Tooltip>{lightNeedsSunEnum[sunNeed]}</Tooltip>
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
                                {propagationEnum[index]}
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

                        {[0, 1, 2].map((index) => (
                            <WaterDrop key={index} className={index <= waterNeed ? 'fill' : ''} />
                        ))}

                        <Tooltip>{waterNeedsEnum[waterNeed]}</Tooltip>

                    </WaterContainer>

                    <SendButton>Add plant</SendButton>

                    <HiddenInput

                        type={'number'}
                        name={'sunNeed'}
                        value={sunNeed}
                        ref={register()}
                    />
                    <HiddenInput

                        type={'number'}
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

                        type={'number'}
                        name={'waterNeed'}
                        value={waterNeed}
                        ref={register()}
                    />

                </form>

            </Container>

            {showConfirmBox && <ConfirmBox title={'Insert Plant'} sendConfirmation={SendConfirmation} showConfirmBox={setShowConfirmBox} />}
        </Wrapper>
    )

}