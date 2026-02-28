"use client";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AnimationLayout = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        const initAos = async () => {
            await import("aos");
            Aos.init({
                duration: 1000,
                easing: 'ease',

                anchorPlacement: "top-center",
            })

        }
        initAos();
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default AnimationLayout