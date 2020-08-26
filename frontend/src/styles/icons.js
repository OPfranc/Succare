import styled from 'styled-components'

import { Water as WaterDrops} from '@styled-icons/entypo'

import { Water } from '@styled-icons/ionicons-solid'

import { Sun } from '@styled-icons/evaicons-solid'
import { UmbrellaBeach as Shadow } from '@styled-icons/fa-solid'

import { Snow as Winter } from '@styled-icons/ionicons-outline'
import { Sun as Summer } from '@styled-icons/bootstrap'
import { Leaf as Fall } from '@styled-icons/ionicons-solid'
import { LocalFlorist as Spring } from '@styled-icons/material-sharp'

import { Zzz as Dormant } from '@styled-icons/remix-fill'
import { AngleDoubleUp as Active } from '@styled-icons/fa-solid'

export const SunIcon = styled(Sun)`
    width: 30px;
    height: 30px;
    &.color-variant0{
        color: #dddee9;
        
    }
    &.color-variant1{
        color: #9597bd;
        
    }
    &.color-variant2{
        color: #3f3879;
        
    }
`
export const ShadowIcon = styled(Shadow)`
    
    width: 30px;
    height: 30px;

    &.color-variant0{
        color: #dddee9;
        
    }
    &.color-variant1{
        color: #9597bd;
        
    }
    &.color-variant2{
        color: #3f3879;
        
    }
`
export const WaterDrop = styled(Water)`
    

    /* color: ${props => props.sel? '#f0f' : '#0f0'}; */
    width: 30px;
    height: 30px;
    color: #8acdda30;

    &.fill{
        color: #8acdda;
    }
`
export const WaterWarningIcon = styled(WaterDrops)`
position: absolute;
/* color: ${props => props.sel? '#f0f' : '#0f0'}; */
width: 30px;
height: 30px;
color: white;

`

export const WinterIcon = styled(Winter)`

    width: 30px;
    height: 30px;
`
export const SummerIcon = styled(Summer)`
    
    width: 30px;
    height: 30px;
`
export const FallIcon = styled(Fall)`

    width: 30px;
    height: 30px;
`
export const SpringIcon = styled(Spring)`

    width: 30px;
    height: 30px;
`
export const DormantIcon = styled(Dormant)`

    color: #466682;
    z-index: 10;
    position: absolute;
    top: 3px;
    right: 1px;
    width: 20px;
    height: 20px;
`
export const ActiveIcon = styled(Active)`

    color: #ff8100;
    z-index: 10;
    position: absolute;
    top: 3px;
    right: 1px;
    width: 20px;
    height: 20px;
`