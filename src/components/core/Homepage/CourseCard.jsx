
import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdPlayLesson } from "react-icons/md";

const CourseCard = ({cardData,currentCard,setCurrentCard})=>{
    return (
        <div >
            {
                (cardData.heading === currentCard)?
                (
                <div className="relative w-[380px] h-[252px] bg-yellow-25 translate-y-[5%] translate-x-[6%]">
                    <div className="absolute flex flex-col gap-5 bg-pure-greys-5 w-[100%] px-2 max-h-fit shadow-2xl shadow-blue-500/20 border-2 border-transparent translate-x-[-3%] translate-y-[-4%]">
                        <h2 className="text-richblack-900 text-xl  font-semibold">{cardData.heading}</h2>
                        <p className="text-richblack-400">{cardData.description}</p>
                        <div className="border-dotted border-2 border-richblack-400 w-[100%]"></div>
                        <div className="flex flex-row justify-between items-center mt-10 mb-5">
                            <div className="flex flex-row text-richblue-200 gap-2">
                            <FaUserGroup/>
                            {cardData.level}
                            </div>
                            <div className="flex flex-row text-richblue-200 gap-2">
                                <MdPlayLesson/>
                                {cardData.lessionNumber} Lessons
                            </div>
                        </div>
                    </div>
                </div>


                ):
                (<div className="flex flex-col gap-5 bg-richblack-900 border-richblack-50 w-[100%] px-2 max-h-fit shadow-2xl shadow-blue-500/20  border-2 border-transparent">
                    <h2 className="text-pure-greys-5 text-xl font-semibold">{cardData.heading}</h2>
                    <p className="text-richblack-400">{cardData.description}</p>
                    <div className="border-dotted border-2 border-richblack-400 w-[100%]"></div>
                    <div className="flex flex-row justify-between items-center mt-10 mb-5">
                        <div className="flex flex-row text-richblue-200 gap-2">
                            <FaUserGroup/>
                            {cardData.level}
                        </div>
                        <div className="flex flex-row text-richblue-200 gap-2">
                            <MdPlayLesson/>
                            {cardData.lessionNumber} Lessons
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default CourseCard;