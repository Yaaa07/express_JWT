import { useEffect, useState } from 'react'
import React from 'react'

const Form = () => {
    const [text, setText] = useState('Halo');

    useEffect(()=> {
        console.log('halo')
    });

    return (
        <div>
            <form>
                <div className='flex gap-1'>
                    <p> nama kamu</p>
                    <input onChange={(e) => setText (e.target.value)} className='border border-black rounded-md'/>
                </div>
                <p className=''>nama kamu adalah {text}</p>
            </form>
        </div>
    )
}

export default Form
