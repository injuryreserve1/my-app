import React from 'react';

import './index.css';

export default function SearchBar({ onchangeInput }) {
    return (
        <>
            <input
                defaultValue={''}
                onChange={(e) => {
                    onchangeInput(e.target.value);
                }}
                placeholder="Search..."
            />
        </>
    ); // поисковик. вводим человека, к-ого хотим найти
}
