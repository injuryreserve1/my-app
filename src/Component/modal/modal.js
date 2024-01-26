import React from 'react';
import './index.css';

export default function Modal({ user, hide }) {
    return (
        <div className="modal" onClick={() => hide()}>
            <div className="window" onClick={(e) => e.stopPropagation()}>
                <img alt={user.id} src={user.image}></img>
                <div>
                    <h2>
                        {user.firstName} {user.lastName}
                    </h2>

                    <p>Возраст: {user.age}</p>
                    <p>Адрес: {user.address.city}</p>
                    <p>Рост: {user.height}</p>
                    <p> Вес: {user.weight}</p>
                    <p>Номер телефона: {user.phone}</p>
                    <p>email-адрес: {user.email}</p>
                </div>
            </div>
        </div>
    );
}

//ФИО, возраст, адрес (город и название улицы), рост, вес, номер телефона и email-адрес.
