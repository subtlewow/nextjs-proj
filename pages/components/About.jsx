import * as React from 'react';
import Image from 'next/image';

const About = (prop) => {
    return (
        <div className="bg-red-400">
            <Image src={prop.Mesh}></Image>
        </div>
    );
}

export default About;