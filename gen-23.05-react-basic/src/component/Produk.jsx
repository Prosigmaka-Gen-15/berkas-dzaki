import React from "react";


function Cart({gambar, NamaProduk, HargaProduk, Keterangan}) {
    return (
        <div className='justtify-center items-center m-2 p-2 border-2 rounded-xl w-72  bg-gray-200'>
            <section className="items-center justify-center flex-col gap-4 p-4 flex-wrap ">
                <img src={gambar} className='w-[200px] bg-inherit'/>
                <div>
                    <div className='flex justify-between font-sans'>
                        <a className='lg:flex-warp'>{NamaProduk}</a>
                        <span className='item-end font-bold'>{HargaProduk}</span>
                    </div>
                    <p className='flex justify-start text-sm font-semibold'>{Keterangan}</p>
                    <button className='text-center flex rounded-xl px-2 border-2 border-gray-500 hover:bg-green-600 transition'>Beli</button>
                </div>
            </section>
        </div>
    );
}
function Produk(){
    return(
        <div className='items-center justify-center flex flex-wrap md:m-2 md:p-2'>
            <Cart gambar={'./src/images/Sony1.jpg'} NamaProduk={"Sony A6000"} HargaProduk={"7.500.000"} Keterangan={"Body Only"}/>
            <Cart gambar={'./src/images/nikon.jpg'} NamaProduk={"Nikon"} HargaProduk={"4.500.000"} Keterangan={"Body Only"}/>
            <Cart gambar={'./src/images/canon.jpg'} NamaProduk={"Canon"} HargaProduk={"5.300.000"} Keterangan={"Body Only"} />
            <Cart gambar={'./src/images/lumix.jpg'} NamaProduk={"Lumix"} HargaProduk={"8.000.000"} Keterangan={"Body Only"}/>
            <Cart gambar={'./src/images/lumix.jpg'} NamaProduk={"Lumix"} HargaProduk={"8.000.000"} Keterangan={"Body Only"}/>
            <Cart gambar={'./src/images/lumix.jpg'} NamaProduk={"Lumix"} HargaProduk={"8.000.000"} Keterangan={"Body Only"}/>
            <Cart gambar={'./src/images/lumix.jpg'} NamaProduk={"Lumix"} HargaProduk={"8.000.000"} Keterangan={"Body Only"}/>
            <Cart gambar={'./src/images/lumix.jpg'} NamaProduk={"Lumix"} HargaProduk={"8.000.000"} Keterangan={"Body Only"}/>
        </div>
    )
}
export default Produk;