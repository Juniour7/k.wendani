import React from 'react';


const Beliefs = [
    {
        
        href: "https://www.adventist.org/holy-scriptures/",
        title: "The Holy Scriptures"
    },
    {
        
        href: "https://www.adventist.org/trinity/",
        title: "Trinity"
    },
    {
        
        href: "https://www.adventist.org/father/",
        title: "Father"
    },
    {
        
        href: "https://www.adventist.org/son/",
        title: "Son"
    },
    {
        
        href: "https://www.adventist.org/holy-spirit/",
        title: "Holy Spirit"
    },
    {
        
        href: "https://www.adventist.org/creation/",
        title: "Creation"
    },
    {
        
        href: "https://www.adventist.org/nature-of-humanity/",
        title: "Nature of Humanity"
    },
    {
        
        href: "https://www.adventist.org/the-great-controversy/",
        title: "The Great Controversy"
    },
    {
        
        href: "https://www.adventist.org/life-death-and-resurrection-of-christ/",
        title: "The Life, Death and Resurrection of Christ"
    },
    {
        
        href: "https://www.adventist.org/experience-of-salvation/",
        title: "The Experience of Salvation"
    },
    {
        
        href: "https://www.adventist.org/growing-in-christ/",
        title: "Growing in Christ"
    },
    {
        
        href: "https://www.adventist.org/the-church/",
        title: "The Church"
    },
    {
        
        href: "https://www.adventist.org/remnant-and-its-mission/",
        title: "The Remnant and its Mission"
    },
    {
        
        href: "https://www.adventist.org/unity-in-the-body-of-christ/",
        title: "Unity in the Body of Christ"
    },
    {
        
        href: "https://www.adventist.org/baptism/",
        title: "Baptism"
    },
    {
        
        href: "https://www.adventist.org/the-lords-supper/",
        title: "The Lord’s supper"
    },
    {
        
        href: "https://www.adventist.org/spiritual-gifts-and-ministries/",
        title: "Spiritual Gifts and Ministries"
    },
    {
        
        href: "https://www.adventist.org/gift-of-prophecy/",
        title: "The Gift of Prophecy"
    },
    {
        
        href: "https://www.adventist.org/the-law-of-god/",
        title: "The Law of God"
    },
    {
        
        href: "https://www.adventist.org/the-sabbath/",
        title: "The Sabbath"
    },
    {
        
        href: "https://www.adventist.org/stewardship/",
        title: "Stewardship"
    },
    {
        
        href: "https://www.adventist.org/christian-behavior/",
        title: "Christian Behavior"
    },
    {
        
        href: "https://www.adventist.org/marriage-and-the-family/",
        title: " Marriage and the Family"
    },
    {
        
        href: "https://www.adventist.org/christs-ministry-in-the-heavenly-sanctuary/",
        title: "Christ’s ministry in the Heavenly Sanctuary"
    },
    {
        
        href: "https://www.adventist.org/second-coming/",
        title: "The Second Coming of Christ"
    },
    {
        
        href: "https://www.adventist.org/death-and-resurrection/",
        title: "Death and Resurrection"
    },
    {
        
        href: "https://www.adventist.org/millennium-and-the-end-of-sin/",
        title: "The Millennium and the End of Sin"
    },
    {
        
        href: "https://www.adventist.org/the-new-earth/",
        title: " The New Earth"
    },
]

const OurBeliefs = () => {
  return (
    <>
        <div className='bg-[#007681] text-white p-3 w-full shadow-md'>
            <h1 className='text-center text-2xl font-semibold underline'>Our Beliefs</h1>
            <p>Seventh-day Adventist beliefs are meant to permeate your whole life. Growing out of scriptures that paint a compelling portrait of God, you are invited to explore, experience and know the One who desires to make us whole.</p>
        </div>

        <div className='bg-white mt-[30px] border-l-2 border-[#007681] p-2 shadow-md'>
            <ol className='list-decimal ml-6  space-y-2 '>
                {Beliefs.map((Data, Index) => (
                    <li key={Index}>
                        <a 
                            href={Data.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 hover:text-[#007681] underline underline-offset-2 hover:no-underline transition-all duration-500 ease-in-out transform"
                        >
                            <h4>{Data.title}</h4>
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    </>
  )
}

export default OurBeliefs;