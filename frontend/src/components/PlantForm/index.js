import React from 'react'
import { useForm } from 'react-hook-form'

import { Container } from './styles'


export default function PlantForm() {

    const { register, handleSubmit, errors } = useForm()




    function onSubmit(data) {
        console.log(data);
    }


    return (
        <>
            <Container>


                <form onSubmit={handleSubmit(onSubmit)}>

                    <p>Plant name</p>
                    <input 
                    type={'text'}
                    name={'name'}
                    ref={register({
                        required: 'Insert Plants name'
                    })}/>
                    {errors.name && <span>{errors.name.message}</span>}
                    <p>Alias</p>
                    <input />
                    <p>Light</p>
                    <p>Propagation</p>
                    <p>Activity</p>
                    <p>Water</p>

                    <input type={'submit'} />

                </form>


            </Container>
        </>
    )

}