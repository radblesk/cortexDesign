import React from 'react';
import Image from "next/image";
import HeroBG from "../../../public/hero.png";

const Hero = () => {
    return (
        <section className={'xl:mx-44 xl:my-10 relative'} style={{
            backgroundImage: `url("../../../public/hero.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Image
                src={HeroBG}
                alt={"Interiérový dizajn"}
                height={700}
                width={1450}
                >
            </Image>
            <div className={"absolute left-0 top-0 flex flex-col max-w-[30rem] gap-3"} >
                <h1 className={"font-bold text-5xl"}>Dizajn, ktorý vás <br/> nechá dýchať.</h1>
                <p className={'font-light'}>Pohodlie, štýl a praktickosť v jednom. Objavte dizajn, ktorý mení priestor na domov.</p>
            </div>

        </section>
    );
};

export default Hero;
