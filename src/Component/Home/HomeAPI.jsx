import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeAPI = () => {
    const [data, setdata] = useState([])
    const [nextItems, setnextItems] = useState(5)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setdata(response.data);
                console.log(response)
            })
            .catch(error => {
                console.error("Error fetching Data:", error)
            })

    }, [])
    const showMore = () => {
        setnextItems(nextItems + 10);

    }
    return (
        <>
            <div className="h-[100vh] w-full py-10 px-10 grid grid-cols-4 gap-4">
                {data.slice(0, nextItems).map((value) =>
                    <div className="h-auto w-[15rem] border-4 border-black">
                        <h1 className="text-2xl px-10 py-8">ID:-{value.id}</h1>
                        <p className="text-2xl px-10">Title :-{value.title}</p>
                    </div>
                )}
                <button className="h-[5rem] w-[10rem] border border-red-700 rounded bg-teal-400 text-2xl" onClick={showMore}>Show More</button>
            </div>

        </>
    )
}
export default HomeAPI