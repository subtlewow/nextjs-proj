import * as React from 'react';
import Image from 'next/image';

const navigation = [
    { name: 'EXPERTISE', href: '#' },
    { name: 'PORTFOLIO', href: '#' },
    { name: 'BAKEWELL-WHITE', href: '#' },
    { name: 'AWARDS', href: '#' },
    { name: 'CONTACT US', href: '#' },
]

const Navbar = (prop) => {
    return (
        <div className="">
            <Image src={prop.img} className="object-cover h-24" />
            <nav className="flex w-full justify-around p-4 font-OxygenMono tracking-wide absolute top-0 bg-transparent">
                {navigation.map((i) => (
                    <a key={i.name} href={i.href} className="text-white">{i.name}</a>
                ))}
            </nav>
        </div>
    );
}

export default Navbar;