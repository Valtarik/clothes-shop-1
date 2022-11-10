import React from 'react';
import {Link} from "react-router-dom";
import InputText from "../components/InputText";
import AddButton from "../components/AddButton";

function Registration() {
    return (
        <div className='flex justify-center flex-col items-center my-10'>
            <h1 className='text-[20px] mb-10'>Реєстрація</h1>
            <form
                //onSubmit={onSubmit}
                className=' px-8 py-6 flex flex-col border-2 max-w-[500px]'
            >
                <InputText
                    labelName={'Пошта'}
                    name={'email'}
                    placeholder={'Введіть Email'}
                />
                <InputText
                    labelName={'Логін'}
                    name={'login'}
                    placeholder={'Придумайте логін'}
                />
                <InputText
                    labelName={'Ім\'я'}
                    name={'login'}
                    placeholder={'Ваше ім\'я'}
                />
                <InputText
                    labelName={'Пароль'}
                    name={'userPassword'}
                    placeholder={'Придумайте пароль'}
                />
                <InputText
                    labelName={'Підтвердження паролю'}
                    name={'userPassword'}
                    placeholder={'Підтвердіть пароль'}
                />

                <AddButton type={'submit'} text={'Зареєструватися'} />
            </form>
            <p className='mt-4'>
                Якщо ви вже зареєстровані - <Link className='text-blue-500 hover:underline' to='/login'>авторизуйтесь</Link>
            </p>
        </div>
    );
}

export default Registration