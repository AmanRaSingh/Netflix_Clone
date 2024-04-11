import React from 'react'

const Category = () => {
    const Data = [
        {
            id: 1,
            poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Netflix'
        },
        {
            id: 2,
            poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Netflix'
        },
        {
            id: 3,
            poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Netflix'
        },
        {
            id: 4,
            poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Netflix'
        },
        ,
        {
            id: 5,
            poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Netflix'
        },

    ]

    return (
        <>
            <div className='h-auto w-full px-20 py-16 grid grid-cols-3 gap-10'>
                {Data.map((value) =>
                    <div className='h-[40vh] w-[20vw] border border-red-500 rounded relative'>
                        <h2 className='text-5xl font-bold absolute bg-black text-green-500  text-center'>{value.name}</h2>
                        <img className='h-full w-full object-cover' src={value.poster} />
                    </div>
                )}

            </div>

        </>
    )
}

export default Category