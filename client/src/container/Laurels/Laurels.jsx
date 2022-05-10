import React from 'react'
import './Laurels.css'
import SubHeading from '../../components/SubHeading/SubHeading'
import { awards } from '../../constants/data'
import { images } from '../../constants/images'
import AwardCard from '../../components/AwardCard/AwardCard'

const Laurels = () => {
    return (
        <div className='app__bg app__wrapper section__padding' id='awards'>
            <div className='app__wrapper_info'>
                <SubHeading title='Awards & recognition' />
                <h1 className='headtext__cormorant'>Our Laurels</h1>

                <div className='app__laurels_awards'>
                    {awards.map((award) => (
                        <AwardCard award={award} key={award.title} />
                    ))}
                </div>
            </div>

            <div className='app__wrapper_img'>
                <img src={images.laurels} alt='laurels_img' />
            </div>
        </div>
    )
}

export default Laurels
