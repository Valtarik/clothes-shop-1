import React from 'react';

function AdminSidebar() {
    return (
        <div className="h-full p-3 space-y-2 w-60">
            <h1 className="text-3xl font-bold">Адміністратор</h1>
            <div className="divide-y divide-gray-700">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li>
                        <span
                            className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 active:bg-gray-200">Додати товар</span>
                    </li>
                    <li>
                        <span
                            className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 active:bg-gray-200">Керування товарами</span>
                    </li>
                    <li>
                        <span
                            className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 active:bg-gray-200">Керувати розмірами</span>
                    </li>
                    <li>
                        <span
                            className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 active:bg-gray-200">Керувати категоріями</span>
                    </li>
                    <li>
                        <span
                            className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 active:bg-gray-200">Замовлення</span>
                    </li>
                </ul>
                <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                        <span
                            className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 active:bg-gray-200">Змінити тему</span>
                    </li>
                    <li>
                        <span
                            className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 active:bg-gray-200">Вийти</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminSidebar