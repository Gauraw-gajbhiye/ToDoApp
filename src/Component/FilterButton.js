import React from 'react'

function FilterButton() {
    return (
        <div className='flex m-2 p-2 justify-center'>
            <button className='border-2 border-red-500 m-2 p-2'>Show all Task</button>
            <button className='border-2 border-red-500 m-2 p-2'>Show active Task</button>
            <button className='border-2 border-red-500 m-2 p-2'>Show Completed Task</button>


        </div>
    )
}

export default FilterButton
