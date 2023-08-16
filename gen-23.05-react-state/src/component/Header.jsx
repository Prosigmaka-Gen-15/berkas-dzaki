import React from "react";
import {useNavigate} from "react-router-dom"
import Blanja from "../images/Blanja.png";

function Header() {
    const navigate = useNavigate();
    return (
        <nav className='flex flex-col md:flex-row gap-4 items-center justify-between px-10 bg-fuchsia-200'>
            <div onClick={() => navigate("/")}>
                <img src={Blanja} alt='Blanja' className='cursor-pointer w-[70px] mb-2' />
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <a onClick={() => navigate("/")} className='font-sans font-bold cursor-pointer'>Beranda</a>
                <a onClick={() => navigate("/detail")} className='font-sans font-bold cursor-pointer'>Produk</a>
                <input type='text' className='bg-fuchsia-100 p-1 rounded' placeholder='Cari Produk'></input>
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <a className='font-sans font-bold cursor-pointer'>Daftar</a>
                <a className='font-sans font-bold cursor-pointer'>Masuk</a>
            </div>
        </nav>
    )
}

export default Header;