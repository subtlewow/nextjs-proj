import * as React from 'react';
import Image from 'next/image';

const Banner = (prop) => {
    return (
        // <div className="flex justify-center relative bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 p-10">
        //     <Image src={prop.logo_large} />
        // </div>
        <div className="relative bg-gradient-to-b from-slate-900">
            <div className="absolute bottom-1 bg-gradient-to-t from-midnight via-midnight w-full text-center pb-10 px-20">
                <Image src={prop.logo_large} />

                <div className='flex justify-between text-white text-left pt-5'>
                    <ul>
                        <li>+64 9 480 6800</li>
                        <li>INFO@BAKEWELL-WHITE.COM</li>
                    </ul>

                    <ul className='text-center'>
                        <li>BAKEWELL-WHITE YACHT DESIGN LTD</li>
                        <li>PACE WITH GRACE / &copy; 2022</li>
                    </ul>

                    <ul className='text-right'>
                        <li>EST. 1994</li>
                        <li>AUCKLAND / NEW ZEALAND</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Banner;