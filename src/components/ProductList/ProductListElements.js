import Styled from 'styled-components';
import { COLORS,FONT,TRANSITION,WIDTH,SPACE,DEVICE } from '../../Constants'
import { ANIMATION } from '../../Animation'

export const ProductListContainer = Styled.div`
    display:block;
    margin:${SPACE.productList};
    padding:${SPACE.container};
`
export const ProductListWrapper = Styled.div`
    display:flex;
    max-width:${WIDTH.desktop};
    justify-content:space-between;
    width:100%;
    min-height:20.4rem;
    margin:0 auto;
    @media screen and ${DEVICE.md}{
        min-height:16.5rem;
    }
`
export const ProductListItem = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    width:35rem;
    background: ${COLORS.grayDark};
    border-radius:.8rem;
    padding-bottom:3rem;
    cursor:pointer;
    position:relative;
    &:before{
        pointer-events:none;
        position:absolute;
        content:'';
        display:flex;
        justify-content:center;
        background-image:url(${prop => prop.productImage});
        background-size:64%;
        background-position:center;
        background-repeat:no-repeat;
        width:100%;
        min-height:25rem;
        top:-9rem;
        transition:all ${TRANSITION.ease};
    }
    &:hover:before{
        animation: ${ANIMATION.jelloHorizontal} 0.4s linear both;
    }
    &:nth-child(2){
        margin:0 1rem;
    }
    @media screen and ${DEVICE.md}{
        width:100%;
        &:before{
            top:-11rem;
        }
        &:nth-child(3):before{
            top:-10.5rem;
            background-size:73%;
        }
    }
`
export const ProductTitle = Styled.span`
    pointer-events:none;
    margin-bottom:1.5rem;
    ${FONT.menutitle};
`