import React from 'react'

const InputText = ({ labelName, type, name, placeholder }) => {
    return (
        <label className='mb-5'>
            <span className='ml-5'>{labelName}:</span>
            <input
                type={type}
                name={name}
                className='w-full bg-slate-100 px-6 py-2 rounded-full'
                placeholder={placeholder}
            />
        </label>
    )
}

export default InputText