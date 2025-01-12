import React from 'react';
import Image from "next/image";
import HeroBG from "../../../public/hero2.jpg";

const Hero = () => {
    return (
        <section className={'xl:mx-44 xl:my-10 relative'} >
            <div className='maskovany-obrazok w-full h-[550px] relative' >
                <Image
                    src={HeroBG}
                    alt={"Interiérový dizajn"}
                    height={700}
                    width={1450}
                    className='object-cover object-bottom h-full w-full relative'
                >
                </Image>
            </div>
            <div className={"absolute left-0 top-0 flex flex-col max-w-[35%] lg:max-w-[25rem] gap-0"} >
                <h1 className={"font-bold text-[4.3vw] lg:text-[44px] leading-none"}>Dizajn, ktorý vás <br /> nechá dýchať.</h1>
                <p className={'font-light text-[1.2vw] lg:text-xs leading-none mt-1 lg:mt-3'}>Pohodlie, štýl a praktickosť v jednom. Objavte dizajn, ktorý mení priestor na domov.</p>
            </div>

        </section>
    );
};

export default Hero;
