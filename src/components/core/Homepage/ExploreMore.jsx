
import React, { useState } from "react";
import {HomePageExplore} from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skill paths",
    "Career paths",
];

const ExploreMore = ()=>{
    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard] = useState(HomePageExplore[0],courses[0].heading);

    const setMyCard = (value)=>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=> course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }
    return (
        <div className="w-11/12">
            <div className="font-semibold text-4xl text-center">
                Unlock the 
                <HighlightText text={" Power of Code "} />
            </div>
            <p className='text-center text-richblack-300 text-base text-[16px] mt-3'>
                Learn to build anything you can imagine
            </p> 
            <div className="flex flex-row rounded-full bg-richblack-800 mb-10 mt-10 px-1 py-1 w-[60%] mx-auto">
                {
                    tabsName.map((element,index)=>{
                        return (
                            <div className={`text-[16px] flex flex-row items-center gap-2 ${currentTab == element ? "bg-richblack-900 text-richblack-5 font-medium":"text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2 `} key={index} onClick={()=>setMyCard(element)}>
                                {element}
                            </div>
                        );
                    })
                }
            </div> 
            <div className="relative ">
                <div className="lg:h-[150px]"></div>
                {/* Card ka group */}
                <div className='absolute flex flex-row gap-10 justify-between w-full  translate-y-[-50%]'>
                    {
                        courses.map((element,index)=>{
                            return (
                                <div>
                                    {
                                        index === 0?
                                        (
                                            <CourseCard key={index} 
                                            cardData={element} currentCard={element.heading} setCurrentCard={setCurrentCard}/>
                                        ):
                                        (
                                            <CourseCard key={index} 
                                            cardData={element} currentCard={currentCard} setCurrentCard={setCurrentCard}/>
                                        )
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ExploreMore;