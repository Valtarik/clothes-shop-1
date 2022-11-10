import React from 'react'

const AddButton = ({onClick, text, type}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className='px-6 py-2 rounded-3xl bg-purple-300 hover:bg-purple-500 hover:text-white duration-200'
        >
            {text}
        </button>
    )
}

export default AddButton