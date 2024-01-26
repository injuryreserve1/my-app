import React from 'react';

export default function ItemTable({ content, handleModalInfo }) {
    return content.map((item) => {
        const { id, firstName, lastName, age, gender, phone, address } = item;
        return (
            <tr key={id} onClick={() => handleModalInfo(item)}>
                <td className="full-name">
                    {firstName} {lastName}
                </td>
                <td className="age">{age}</td>
                <td className="gender">{gender}</td>
                <td className="phone">{phone}</td>
                <td className="city">
                    {address.city}, {address.address.replace(/\d+/, '')}
                </td>
            </tr>
        ); /*Ввод данных в таблицу*/
    });
}
