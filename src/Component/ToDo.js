import React, { useState } from 'react'

function ToDo(props) {
    const [isEditing, setEditing] = useState(false)
    const editingTemplate = (
        <form>
            <div>
                <label>New name for {props.name}</label>
                <input id={props.id} type='text'
                // value={newName} 
                // onChange={handleChange}
                />
            </div>
            <div>
                <button className='border-2 border-red-500 m-2 p-2'>
                    Cancel
                    <span> renaming {props.name}</span>
                </button>
                <button className='border-2 border-red-500 m-2 p-2 bg-red-600 text-white'>Save
                    <span> new name for {props.name}</span>

                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div>
            <div>
                <input id={props.id} type="checkbox" defaultChecked={props.completed}
                // onChange={}
                />
                <label htmlFor={props.id}>{props.name}</label>
            </div>
            <div>

                <button className='border-2 border-red-500 m-2 p-2'
                    onClick={() => setEditing(true)}
                >edit {props.name}</button>
                <button
                    className='border-2 border-red-500 m-2 p-2 bg-red-600 text-white'
                    onClick={() => props.deleteTask(props.id)}
                >

                    Delete {props.name}
                </button>

            </div>

        </div>

    );
    return (
        <div>
            <li>
                {/* <div className='flex content-center m-2'>
                    <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                    <label htmlFor={props.id} className=''>{props.name}</label>

                </div>

                <div className='flex m-0  '>
                    <button className='border-2 border-red-500 m-2 p-2'
                        onClick={() => props.editTask(props.id)}
                    >
                        edit {props.name}</button>
                    <button className='border-2 border-red-500 m-2 p-2 bg-red-600 text-white'
                        onClick={() => props.deleteTask(props.id)}
                    >Delete {props.name}</button>

                </div> */}

                {isEditing ? editingTemplate : viewTemplate}

            </li>
        </div>
    )
}

export default ToDo
