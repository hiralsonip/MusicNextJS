"use client"
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
    {
        title: "Expert Instructors",
        description:
            "Learn from highly skilled and experienced musicians who are passionate about teaching. Our instructors provide personalized guidance, ensuring that students of all levels develop their musical talents to the fullest.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
                Expert Instructors
            </div>
        ),
    },
    {
        title: "Comprehensive Curriculum",
        description:
            "Our structured courses cover everything from fundamental music theory to advanced performance techniques. Whether you're a beginner or an aspiring professional, our curriculum is designed to meet your musical goals.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
                Comprehensive Curriculum
            </div>
        ),
    },
    {
        title: "State-of-the-Art Facilities",
        description:
            "Practice and perform in a professional environment equipped with high-quality instruments and modern sound technology. Our facilities are designed to inspire creativity and enhance the learning experience.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] text-white">
                State of the Art Facilities
            </div>
        ),
    },
    {
        title: "Performance Opportunities",
        description:
            "Showcase your skills through recitals, concerts, and competitions. We provide students with regular performance opportunities to gain confidence, stage presence, and real-world musical experience.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] text-white">
                Performance Opportunities
            </div>
        ),
    },
    {
        title: "Flexible Learning Options",
        description:
            "We offer both in-person and online lessons to accommodate different learning styles and schedules. Our flexible programs ensure that you can pursue your musical education at your own pace.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
                Flexible Learning Options
            </div>
        ),
    },
];


function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default WhyChooseUs