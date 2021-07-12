import React from 'react'
import CategoryHero from '../../components/Hero/CategoryHero'
import Banner from '../../components/Banner'
import ProductNav from '../../components/ProductNav'
import CategoryMain from '../../components/Main/CategoryMain'
import {SPEAKERS} from '../../data/CategoryData'


const Speakers = () => {
    return (
        <>
        <CategoryHero pageTitle="speakers"/>
        <CategoryMain data={SPEAKERS} />
        <ProductNav />
        <Banner />
        </>
    )
}

export default Speakers
