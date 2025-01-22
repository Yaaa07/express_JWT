import axios from 'axios'
import React, { useEffect, useState } from 'react'

const List = () => {
const [data, setData] = useState([]);
useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setData(res.data)
        })
    })
    return (
        <div>
            {data.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </div>
    )
}

export default List
