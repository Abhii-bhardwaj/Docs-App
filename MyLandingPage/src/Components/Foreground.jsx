import React, { useRef } from 'react'
import Card from './Card'
const Foreground = () => {

    const ref = useRef(null);
    const data = [
        { desc: "This is first card.", fileSize: "0.9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }, },
        { desc: "This is second card.", fileSize: "0.9mb", close: false, tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }, },
        { desc: "This is third card.", fileSize: "0.9mb", close: true, tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }, }

    ];
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap py-10 px-10 '>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))

            }
        </div>
    )
}

export default Foreground

