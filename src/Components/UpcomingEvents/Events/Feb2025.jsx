import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarTimes } from 'react-icons/fa';

const Feb2025 = () => {
    const Events = [
        // {
        //     date: '30th Nov',
        //     time: '8:00am',
        //     event: 'Pathfinders Sabbath',
        //     leader: 'Pathfinder Director',
        //     department: 'Pathfinder Department',
        //     venue: 'Main Sanctuary'
        // },
    ]
  return (
    <>
        <section className='font-title grid grid-cols-1'>
            {Events.length > 0 ? (
                Events.map((Data, Index) => (
                    <div key={Index} className="grid md:grid-cols-5 border-b border-[#DDDDDD] py-7 space-y-3">
                        <div>
                            <h1 className="font-semibold text-[#007681] text-lg">{Data.date}</h1>
                            <p className="text-[#7C6D66] font-light">{Data.time}</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-[#007681] text-xl">{Data.event}</h1>
                        </div>
                        <div>
                            <div>
                                <h1 className="font-semibold text-[#007681] text-xl">{Data.department}</h1>
                                <p className="text-[#7C6D66] font-light">{Data.leader}</p>
                            </div>
                        </div>
                        <div className="md:pl-5">
                            <h1 className="font-semibold text-[#007681] text-xl">{Data.venue}</h1>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/events">
                                <div className="border border-[#007681] w-[30px] h-[30px] text-[#007681] flex flex-col justify-center items-center rounded-full">
                                    <FaArrowRightLong />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
                ) : (
                    <div className="text-center text-[#007681] py-5 bg-[#EEEFF0] flex justify-center items-center gap-3">
                        <div className='text-xl '>
                            <FaRegCalendarTimes />
                        </div>
                        <h2 className="font-light">No events yet</h2>
                    </div>
                )
            }
        </section>
    </>
  );
}

export default Feb2025;