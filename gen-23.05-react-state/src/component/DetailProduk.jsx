import React from "react";
import { useState } from "react";

import Sony1 from "../images/Sony1.jpg";
import Sony2 from "../images/Sony2.jpg";
import Sony3 from "../images/Sony3.jpg";
import Sony4 from "../images/Sony4.jpg";
import Sony5 from "../images/Sony5.jpg";

const DetailProduk = () => {
    const [mainGambar, previewGambar] = useState(Sony1);
    const [count, setCount] = useState(1);
    return (
        <section className='flex mt-10 flex-wrap justify-evenly bg-white ms-10 me-10'>

            <div className='flex flex-col justify-between w-auto gap-4 mb-8'>
                <img
                    src={mainGambar} alt={Sony1}
                    className='object-contain w-96 h-96 aspect-square bg-contain rounded cursor-pointer ' />
                <div className='flex flex-row justify-evenly h-24'>
                    <img
                        onMouseEnter={()=>previewGambar(Sony2)} src={Sony2} alt={Sony1}
                        onMouseLeave={()=>previewGambar(Sony1)}
                        className='w-20 h-20 rounded-md cursor-pointer' />
                    <img
                        onMouseEnter={()=>previewGambar(Sony3)} src={Sony3} alt={Sony1}
                        onMouseLeave={()=>previewGambar(Sony1)}
                        className='w-15 h-12 mt-4 rounded-md cursor-pointer '/>
                    <img
                        onMouseEnter={()=>previewGambar(Sony5)} src={Sony5} alt={Sony1}
                        onMouseLeave={()=>previewGambar(Sony1)}
                        className='w-20 h-16 mt-3 rounded-md cursor-pointer '/>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-10 w-auto xl:w-2/4 justify pl-8'>
                <h1 className='font-sans mb-3 font-bold text-xl'>Sony A6000 (Body Only)</h1>
                <h2 className='font-sans mb-6 font-semibold'>Rp 7.500.000</h2>
                <p className='text-lg justify-evenly'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam velit magnam voluptate eos nostrum optio similique corporis laudantium earum ullam quam eaque dolorem ratione reprehenderit, delectus dolores vel beatae pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus dolore non ratione. Tenetur, deleniti, atque corrupti incidunt amet ea in, officiis nihil officia mollitia eaque. Et modi expedita qui?</p>
            </div>

            <div className='flex flex-row items-center mb-8'>
                <button onClick={()=> setCount(count-1)} className='border-solid border-2 border-r-0 px-4 py-2 text-xl font-bold rounded-l-xl'>-</button>
                <span className='border-solid border-t-2 border-b-2 px-4 py-2 text-lg font-bold justify-center'>{count}</span>
                <button onClick={()=> setCount(count+1)} className='border-solid border-2 border-l-0 px-4 py-2 text-xl font-bold rounded-r-xl'>+</button>

                <button className='border-solid border-2 px-6 py-2 font-bold text-white rounded-xl bg-green-600 hover:bg-white hover:text-black hover:border-solid transition-all duration-700'>Add to Cart</button>
            </div>
        </section>

    );
}

export default DetailProduk;