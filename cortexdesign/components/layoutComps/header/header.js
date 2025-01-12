import React from 'react';
import Image from "next/image";
import Logo from "../../../public/logo/logo.svg"

const Header = () => {
    return (
        <header className={'xl:px-44 xl:py-10 flex flex-row justify-between items-start'}>
            <Image
                src={Logo}
                alt={"Logo Cortex Design"}
                width={182}
                height={60}
                >
            </Image>
            <div className={'flex justify-center items-center gap-4 rounded-full border-2 px-6 py-3'}>
                <span>Menu</span>
                <div className={'flex flex-col items-end gap-1.5'}>
                    <span className={'w-5 h-[2px] bg-white block rounded-full'}></span>
                    <span className={'w-3.5 h-[2px] bg-white block rounded-full'}></span>
                    <span className={'w-5 h-[2px] bg-white block rounded-full'}></span>
                </div>
            </div>

        </header>
    );
};

export default Header;
