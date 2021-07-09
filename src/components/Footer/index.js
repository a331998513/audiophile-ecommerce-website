import React from 'react'
import Logo from '../../assets/shared/desktop/logo.svg'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinks,
    FooterLogo,
    LogoImg,
    FooterNav,
    FooterNavLink,
    FooterInfo,
    FooterEnder,
    CopyRight,
    FooterIcons,
    FooterIcon
} from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinks>
                    <FooterLogo to="/">
                        <LogoImg src={Logo} alt="audiophile logo" />
                    </FooterLogo>
                    <FooterNav>
                        <FooterNavLink to="/" exact={true} aria-label="link to home" data-active="active">home</FooterNavLink>
                        <FooterNavLink to="/headphones" exact={true} aria-label="link to headphones" data-active="active">headphones</FooterNavLink>
                        <FooterNavLink to="/speakers" exact={true} aria-label="link to speakers" data-active="active">speakers</FooterNavLink>
                        <FooterNavLink to="/earphones" exact={true} aria-label="link to earphones" data-active="active">earphones</FooterNavLink>
                    </FooterNav>
                </FooterLinks>
                <FooterInfo>
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists 
                    who are devoted to helping you get the most out of personal audio. 
                    Come and visit our demo facility - we’re open 7 days a week.
                </FooterInfo>
                <FooterEnder>
                    <CopyRight>Copyright 2021. All Rights Reserved</CopyRight>
                    <FooterIcons>
                        <FooterIcon href="#" rel="noopener noreferrer nofollow"><FaFacebookSquare /></FooterIcon>
                        <FooterIcon href="#" rel="noopener noreferrer nofollow"><FaInstagram /></FooterIcon>
                        <FooterIcon href="#" rel="noopener noreferrer nofollow"><FaTwitter /></FooterIcon>
                    </FooterIcons>
                </FooterEnder>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
