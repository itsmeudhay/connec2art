import { useEffect, useRef } from "react";
import { useScroll, transform } from 'framer-motion';

export default function Footer() {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => {
            paths.current.forEach( (path, i) => {
                const value = transform(e, [0, 1], [-40 + (i * 40), (i * 40)])
                path.setAttribute("startOffset", value + "%");
            })
        })
        console.log("Rendering");
    }, [scrollYProgress])

    return (
        <div ref={container}>
            <svg className="w-full mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[6px] uppercase text-light-50">
                    {
                        [...Array(6)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Creativity Meets Connectivity</textPath>
                        })
                    }
                </text>
            </svg>
        </div>
    )
}