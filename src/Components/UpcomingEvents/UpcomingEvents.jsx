import React, { useState } from 'react';

//Event Components
import Jan2025 from './Events/Jan2025';
import Feb2025 from './Events/Feb2025';
import March2025 from './Events/March2025';

const UpcomingEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState('Dec 2024');

    const eventComponents = {
        'Dec 2024': <Jan2025 />,
        'Jan 2025': <Feb2025 />,
        'Feb 2025': <March2025 />,
    };
  return (
    <>
        <section className='py-11 font-title w-[90%] mx-auto'>
            <div className='space-y-3'>
                <h3 className='font-medium text-[#F0B323]'>CALENDAR</h3>
                <h1 className='font-semibold text-[#007681] text-3xl md:text-5xl'>Event Schedule</h1>
            </div>
            <div className=' mt-5 border-b-2 border-[#007681] py-2 text-lg'>
                <ul className='flex gap-4'>
                {Object.keys(eventComponents).map((event) => (
                    <li
                    key={event}
                    className={`cursor-pointer ${
                        selectedEvent === event ? 'text-[#F0B323]' : 'text-[#7C6D66]'
                    }`}
                    onClick={() => setSelectedEvent(event)}
                    >
                    {event}
                    </li>
                ))}
                </ul>
            </div>

            {/* Main Section - Render Selected Event */}
            <section className="mt-8">
                {eventComponents[selectedEvent]}
            </section>
        </section>
    </>
  );
}

export default UpcomingEvents;