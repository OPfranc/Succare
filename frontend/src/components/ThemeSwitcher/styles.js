import styled from 'styled-components'
import { LightBulb } from '@styled-icons/heroicons-solid'


export const Button = styled(LightBulb)`

    /* border-radius: 25px;
    width: 30px;
    height: 30px;
    background-color: darkgoldenrod;

    cursor: pointer;

    &:hover{
        background-color: green;
    } */
 
    width: 30px;
    height: 30px;
    background: #f3f0f1;
    border-radius: 32px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:nth-child(1) {
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(0, 0, 0, 0.2);
      color: #6f6cde;
      &:hover {
        opacity: 0.3;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
          6px 6px 10px rgba(0, 0, 0, 0.2);
      }
      &:active {
        opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
          inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #79e3b6;
      }
    }
    &:nth-child(2) {
      opacity: 0.3;
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(0, 0, 0, 0.2);
      color: #6f6cde;
    }
    &:nth-child(3) {
      box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
        inset 8px 8px 16px rgba(0, 0, 0, 0.1);
      color: #79e3b6;
      &:hover {
        opacity: 1;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
          6px 6px 10px rgba(0, 0, 0, 0.2);
      }
    }
`