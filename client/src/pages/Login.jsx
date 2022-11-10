import React from 'react';
import {Link} from "react-router-dom";
import InputText from "../components/InputText";
import AddButton from "../components/AddButton";

function Login() {

    return (
        <div className='flex justify-center flex-col items-center my-10 px-4'>
            <h1 className='text-[20px] mb-10'>Авторизація</h1>
            <form
                // onSubmit={onSubmit}
                className=' px-8 py-6 flex flex-col border-2 max-w-[500px]'
            >
                <InputText
                    labelName={'Логін'}
                    name={'userName'}
                    placeholder={'Введіть логін'}
                />
                <InputText
                    labelName={'Пароль'}
                    name={'userPassword'}
                    placeholder={'Введіть пароль'}
                />
                <AddButton type={'submit'} text={'Авторизуватися'} />
            </form>
            <p className='mt-4'>Якщо ви ще не зареєстровані - <Link className='text-blue-500 hover:underline' to='/registration'>зареєструйтесь</Link></p>
            <Link className='mt-4 text-blue-500 hover:underline' to='/restoring'>Забули пароль?</Link>
        </div>
    );
}

export default Login;