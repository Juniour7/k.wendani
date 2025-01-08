import React from 'react';
import { Helmet } from 'react-helmet-async';

const DedicationForm = () => {
    return (
        <>
            <Helmet>
                <title>Child Dedication Form | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className='mt-[80px] lg:mt-0 bg-[#F8F8F8] pb-[50px]'>
                <div className='bg-fixed relative bg-cover bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1442115597578-2d0fb2413734?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className='absolute inset-0 flex flex-col justify-center items-center'>
                        <div className=' py-5 md:py-7  border-t-[0.2px] border-b-[0.2px]  w-[50%] mx-auto'>
                            <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>Child Dedication</h1>
                        </div>
                    </div>
                </div>

                <section className='p-4 w-[90%] mx-auto'>
                    <h4 className='text-[#F0B323] mt-[30px] text-md font-semibold'>Register Your Child</h4>
                    <h1 className='text-3xl md:text-5xl mt-[15px]'>Child Dedication Form</h1>
                    <div className='mt-[30px]'>
                        <h3 className='text-xl'>Instructions to keep in mind:</h3>
                        <ol className='w-[85%] md:w-[60%] list-decimal ml-[20px] space-y-3'>
                            <li>Child Dedication Ceremony is done every first sabbath of the month.</li>
                            <li>Make sure to register atleast 7 days before the first sabbath of the month for easy preparations.</li>
                            <li>Make sure to fill every section accurately as the information provided in the form below will be used in preparation of the children dedication certificates.</li>
                        </ol>
                    </div>
                </section>

                {/* Registration Form */}
                <section className='w-[90%] md:w-[97%] lg:w-[60%] mx-auto bg-white shadow-xl p-4 rounded-md mt-[50px] '>
                    <form className=''>
                        <h1 className='text-[#F0B323] text-3xl'>1. Details of The Child</h1>
                        <div className='mt-[30px] mr-[10px] flex flex-wrap gap-4 mb-[20px]'>
                            <input type='text' name='Childs FName' placeholder='First Name' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                            <input type='text' name='Childs MName' placeholder='Middle Name' className='border bg-[#F8F8F8] p-2 w-[350px]' />
                            <input type='text' name='Childs LName' placeholder='Last Name' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                            <input type='date' name='Childs DOB' placeholder='Date Of Birth' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                        </div>
                        <h1 className='text-[#F0B323] text-3xl'>2. Details of The Father</h1>
                        <div className='mt-[30px] mr-[10px] flex flex-wrap gap-4 mb-[20px]'>
                            <input type='text' name='Fathers FName' placeholder='First Name' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                            <input type='text' name='Fathers LName' placeholder='Last Name' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                            <input type='email' name='Fathers Email' placeholder='Email Address' className='border bg-[#F8F8F8] p-2 w-[350px]' />
                            <input type='text' name='Fathers Number' placeholder='Phone Number' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                            <input type='text' name='Fathers Address' placeholder='Physical Address' className='border bg-[#F8F8F8] p-2 w-[95%]' required />
                        </div>
                        <h1 className='text-[#F0B323] text-3xl'>3. Details of The Mother</h1>
                        <div className='mt-[30px] mr-[10px] flex flex-wrap gap-4 mb-[20px]'>
                            <input type='text' name='Mothers FName' placeholder='First Name' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                            <input type='text' name='Mothers LName' placeholder='Last Name' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                            <input type='email' name='Mothers Email' placeholder='Email Address' className='border bg-[#F8F8F8] p-2 w-[350px]' />
                            <input type='text' name='Mothers Number' placeholder='Phone Number' className='border bg-[#F8F8F8] p-2 w-[350px]' required />
                            <input type='text' name='Mothers Address' placeholder='Physical Address' className='border bg-[#F8F8F8] p-2 w-[95%]' required />
                        </div>
                        <div className='flex flex-col items-center'>
                            <input type='submit' value='Register' className='border text-white text-xl px-10 bg-[#F0B323] py-2 rounded-lg cursor-pointer' required />
                        </div>
                    </form>
                </section>
            </body>
        </>
    );
}

export default DedicationForm;