"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote:
            "This music academy transformed my passion into skill. The instructors are incredibly knowledgeable and supportive. I never imagined I could progress this quickly!",
        name: "Sarah Johnson",
        title: "Student, Piano Enthusiast",
    },
    {
        quote:
            "Enrolling my son in this academy was the best decision! The structured lessons and friendly atmosphere have boosted his confidence and love for music.",
        name: "Michael Carter",
        title: "Parent of a Young Musician",
    },
    {
        quote:
            "I’ve been to many music schools, but this one stands out. The personalized attention and professional guidance helped me refine my technique and stage presence.",
        name: "Emily Davis",
        title: "Aspiring Vocalist",
    },
    {
        quote:
            "From the first lesson, I knew I had found the right place. The instructors make learning fun and engaging, and the performance opportunities are amazing!",
        name: "David Martinez",
        title: "Guitar Student",
    },
    {
        quote:
            "The flexible learning options and online classes made it easy for me to continue my passion for music despite my busy schedule. Highly recommend!",
        name: "Jessica Lee",
        title: "Working Professional & Music Lover",
    },
    {
        quote:
            "I started as a complete beginner, and now I can confidently play my favorite songs on the violin. The step-by-step guidance made learning effortless and enjoyable!",
        name: "Ryan Thompson",
        title: "Beginner Violinist",
    },
    {
        quote:
            "The best part of this academy is the focus on both technique and creativity. I’ve learned to express myself through music like never before.",
        name: "Olivia Brown",
        title: "Songwriting & Composition Student",
    },
    {
        quote:
            "I joined the academy to improve my drumming skills, and it exceeded my expectations! The hands-on approach and one-on-one coaching made a huge difference.",
        name: "James Wilson",
        title: "Drummer, Rock Band Member",
    },
    {
        quote:
            "This academy helped me prepare for my college auditions. Thanks to their expert coaching, I got accepted into my dream music program!",
        name: "Sophia Anderson",
        title: "College Music Major",
    },
    {
        quote:
            "Not only did I improve as a musician, but I also gained confidence performing in front of an audience. The live recitals were an unforgettable experience!",
        name: "Liam Roberts",
        title: "Jazz Saxophonist",
    },
];

const MovingCards = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear Our Harmony: Voices of Success</h2>
            <div className='w-full max-w-6xl'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default MovingCards