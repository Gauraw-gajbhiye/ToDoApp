import React, { useState } from 'react'

function Form(props) {
    const [name, setname] = useState("");
    const [newName, setNewName] = useState("");


    const handlechange = (e) => {
        // setname(e.target.value)
        // console.log(name);
        setNewName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(name)
        // console.log(name);
        // alert('hello world')
        setname("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className='font-bold text-lg'>What needs to be done?</h3>
                <input className='border-2 border-black rounded m-2'
                    type="text"
                    placeholder='to do'
                    value={name}
                    onChange={handlechange}
                />
                <button className='border-2 border-red-500 bg-black text-white m-1 p-1'>
                    Add
                </button>

            </form>

        </div>
    )
}

export default Form
