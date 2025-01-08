import React from 'react';

//icons
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <>
        <section className='my-3'>
            <form >
                <div className='border flex justify-between items-center px-2 bg-white'>
                    <input 
                        type="text" 
                        required
                        placeholder='Search for events'
                        className='w-full py-4 px-2 rounded-lg  outline-none'
                    />
                    <div className='basis-[20%]'>
                        <button type='submit' className='bg-[#007681] text-white rounded-sm px-3 w-full py-3'>Find Events</button>
                    </div>
                </div>
            </form>
        </section>
    </>
  )
}

export default SearchBar;