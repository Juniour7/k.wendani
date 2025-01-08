import React from 'react';
import { Helmet } from 'react-helmet-async';

// Icons
import { FaFilePdf, FaBook } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";

// Images
import Image1 from '../../Assets/SlideShow/d04a2a9694c81133f120a0c32ba947fd.jpg';
import Image2 from '../../Assets/SlideShow/Patriachs and Prophtes.jpeg';
import Image3 from '../../Assets/SlideShow/Prphtes and Kings.jpeg';
import Image4 from '../../Assets/SlideShow/the disire of ages.jpg';
import Image5 from '../../Assets/SlideShow/Acts-of-the-Apostles.jpg';
import Image6 from '../../Assets/SlideShow/The Great Controversy.jpg';
import Image7 from '../../Assets/SlideShow/Appeal-to-Mothers-Ellen-G.-White.jpg';
import Image8 from '../../Assets/SlideShow/Adventist-Home.jpg';

const books = [
  {
    image: Image2,
    title: "Patriarchs and Prophets",
    description:
      "Patriarchs and Prophets is the first volume in the Conflict of the Ages series. It covers the sweeping panorama of human history from the creation of Earth to the reign of Israel's King David...",
    bookLink: "https://m.egwwritings.org/en/book/84/toc",
    pdfLink: "https://media4.egwwritings.org/pdf/en_PP-SG.pdf",
    audioLink: "https://whiteestate.org/audio/84/patriarchs-and-prophets/",
  },
  {
    image: Image3,
    title: "Prophets and Kings",
    description:
      "Prophets and Kings, the second volume in the Conflict of the Ages series, opens with the story of Solomon’s glorious reign over Israel and ends with the nation’s exile and captivity...",
    bookLink: "https://m.egwwritings.org/en/book/88.8/toc",
    pdfLink: "https://media2.egwwritings.org/pdf/en_PK.pdf",
    audioLink: "https://whiteestate.org/audio/88/prophets-and-kings/",
  },
  {
    image: Image4,
    title: "The Desire of Ages",
    description:
      "The Desire of Ages (Volume 3 of the Conflict of the Ages series) is Ellen White’s classic on the life of Jesus—the One who stands at the center of all human history...",
    bookLink: "https://m.egwwritings.org/en/book/130.4/toc",
    pdfLink: "https://media2.egwwritings.org/pdf/en_DA.pdf",
    audioLink: "https://whiteestate.org/audio/130/the-desire-of-ages/",
  },
  {
    image: Image5,
    title: "The Acts Of The Apostles",
    description:
      "The amazing story of the early Christian believers is told in Volume 4, The Acts of the Apostles. After Jesus was victorious over Satan and returned to heaven, the enemy turned his attention to Jesus’ church on earth...",
    bookLink: "https://m.egwwritings.org/en/book/127.5#0",
    pdfLink: "https://media4.egwwritings.org/pdf/en_AA.pdf",
    audioLink: "https://whiteestate.org/audio/127/the-acts-of-the-apostles/",
  },
  {
    image: Image6,
    title: "The Great Controversy",
    description:
      "Volume 5 of the Conflict of the Ages series carries the story of the controversy between God and Satan to its ultimate and glorious conclusion...",
    bookLink: "https://m.egwwritings.org/en/book/132/toc",
    pdfLink: "https://media2.egwwritings.org/pdf/en_GC.pdf",
    audioLink: "https://whiteestate.org/audio/132/the-great-controversy/",
  },
  {
    image: Image7,
    title: "An Appeal To Mothers",
    description:
      "This book was the first Ellen G. White writing in the field of health after the vision of June 6, 1863. It depicts the perils of secret vice...",
    bookLink: "https://m.egwwritings.org/en/book/6.2",
    pdfLink: "https://media4.egwwritings.org/pdf/en_AA.pdf",
    audioLink: "https://whiteestate.org/audio/6/an-appeal-to-mothers/",
  },
  {
    image: Image8,
    title: "Adventist Home",
    description:
      "This compilation contains practical counsel for Christian families, including guidance on where to locate the home and how to make it pleasant...",
    bookLink: "https://m.egwwritings.org/en/book/128.5",
    pdfLink: "https://media4.egwwritings.org/pdf/en_AA.pdf",
    audioLink: "https://whiteestate.org/audio/128/the-adventist-home/",
  },
];

const Library = () => {
  return (
    <>
      <Helmet>
        <title>Library | Kahawa Wendani SDA Church</title>
      </Helmet>
      <body className="pb-[50px] bg-[#F8F8F8]">
        <section className="w-full h-72 md:h-96 relative">
          <img src={Image1} alt="Library" className="w-full h-full object-cover" />
          <div className="absolute bottom-[15%] left-[10%]">
            <h1 className="text-3xl md:text-5xl">Church Library</h1>
            <hr className="border border-[#F0B323] w-[50%] mt-[10px]" />
          </div>
        </section>

        <section className="mt-[50px] w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-3">
          {books.map((book, index) => (
            <div key={index} className="bg-white p-3 shadow-xl md:flex gap-3 relative">
              <div className="w-[95%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden">
                <a href={book.bookLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700"
                  />
                </a>
              </div>
              <div className="basis-[50%] lg:basis-[80%] pb-[50px] mb:pb-0">
                <h1 className="text-2xl">{book.title}</h1>
                <p className="mt-[10px] text-[#676767]">{book.description}</p>
              </div>
              <div className="absolute bottom-[10px] right-[10px] md:bottom-[20px] md:right-[50px] text-[#F0B323] text-2xl md:text-3xl flex gap-2">
                <span className="text-red-700">
                  <a href={book.bookLink} target="_blank" rel="noopener noreferrer">
                    <FaBook />
                  </a>
                </span>
                <span>
                  <a href={book.pdfLink} target="_blank" rel="noopener noreferrer">
                    <FaFilePdf />
                  </a>
                </span>
                <span>
                  <a href={book.audioLink} target="_blank" rel="noopener noreferrer">
                    <FcSpeaker />
                  </a>
                </span>
              </div>
            </div>
          ))}
        </section>
      </body>
    </>
  );
};

export default Library;
