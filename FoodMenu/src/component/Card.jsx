import React from 'react'


function Card({items}) {
    return (
        <>
            {items.map((menuItems) => {
                const { id, img, title, price, desc } = menuItems;
                return <div key={id}>
                    <article className='flex justify-center content-center gap-4'>
                        <div >
                            <img className='w-[260px] h-[160px] rounded-md m-2 border-4 border-pink-700' src={img} alt={title} />
                        </div>
                        <div className='w-[400px]'>
                            <div className='gap-4'>
                                <div className='flex justify-between border-b-2 border-gray'>
                                <h1 className='text-black font-bold'>{title} </h1> 
                                <span className='text-pink-700 font-bold'>{price}</span>
                                </div>
                                <p >
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            })}
        </>
    )
}

export default Card