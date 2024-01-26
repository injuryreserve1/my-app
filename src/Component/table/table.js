import React from 'react';
import './index.css';
//ФИО, возраст, пол, номер телефона и адрес (город и название улицы).
export default function Table({
    children,
    handleSortedByName,
    handleSortedByAge,
    handleSortedByGender,
}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th
                        onClick={() => {
                            handleSortedByName();
                        }}
                    >
                        ФИО
                    </th>
                    <th
                        onClick={() => {
                            handleSortedByAge();
                        }}
                    >
                        Возраст
                    </th>
                    <th
                        onClick={() => {
                            handleSortedByGender();
                        }}
                    >
                        Пол
                    </th>
                    <th>Номер телефона</th>
                    <th>Адрес</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    ); // сама таблица
}
