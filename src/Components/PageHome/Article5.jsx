import React, { useRef } from 'react'
import "../../Style/page1/article5/article5.css"
import event from "../../Assets/article5/envi1.jpg"
import event1 from "../../Assets/article5/envi2.jpg"
import { motion, useTransform, useScroll } from 'framer-motion'


function Article5() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target : container,
        offset : ['start end', 'center end']
    })

    const xl = useTransform(scrollYProgress, [0, 1], [600, 0]);
    const xl_l = useTransform(scrollYProgress, [0, 1], [900, 0]);
    const opacity  = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const xll = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
    const xlll = useTransform(scrollYProgress, [0, 1], [-1500, 0]);
  return (
    <div ref={container} className="container_article5">
        <div className="contenttt">
            <div className="side_images">
                <motion.img style={{ x : xll, transition : '.8s' }} className='i2' src={event} />
                <motion.img style={{ x : xlll, transition : '.8s' }} className='i1' src={event1} />
            </div>
            <div className="side_description">
                <motion.h2 style={{ opacity : opacity, y : xl, transition : '1s' }}>A Stylized Forest Environment With Modular House</motion.h2>
                <motion.p style={{ opacity : opacity, y : xl_l , transition : '1s'}}>
                    
                </motion.p>
            </div>
            
        </div>
    </div>
  )
}

export default Article5
