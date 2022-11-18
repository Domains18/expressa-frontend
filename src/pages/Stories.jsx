import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'


import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'




const data = [{
    StoryTitle: 'Stories We Tell',
    content: 'Lorem ipsum dolor, sit amet consecteturadipisicing elit.Est esse fugiat enim odio accusamus obcaecati qui possimus quo laudantium veritatis, quibusdam, aut itaque ex id dolore, quam voluptas laborum maxime?',

},{
    StoryTitle: 'Stories We Tell',
    content: 'Lorem ipsum dolor, sit amet consecteturadipisicing elit.Est esse fugiat enim odio accusamus obcaecati qui possimus quo laudantium veritatis, quibusdam, aut itaque ex id dolore, quam voluptas laborum maxime?',
}
]



const Stories = () => {
    return (
        <>
            <div className="service-container">
                <h1>Our Services</h1>
            </div>
            <Swiper className="wrapper"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
                {
                    data.map(({StoryTitle, content})=>{
                        return(
                            <SwiperSlide className="story-box">
                                <div className="story-head">
                                    <h2>{StoryTitle}</h2>
                                    <div className="story-content">
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </>
    )
}

export default Stories