import React, { useState, useEffect } from 'react';

import Table from './Component/table';
import SearchBar from './Component/searchBar';
import ItemTable from './Component/itemTable';
import Modal from './Component/modal';

import { data, searchUser } from './Component/data';

import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [state, setState] = useState({
        isSorted: false,
        isError: false,
    });
    const [user, setUser] = useState([]);

    const [isHide, setIsHide] = useState(false);

    const [def, setDef] = useState([]);

    // ПОЛУЧАЕМ ДАННЫЕ
    useEffect(() => {
        data()
            .then((res) => {
                setUsers(res);
                setDef(res);
            })
            .catch(() => setState({ isSorted: false, isError: true }));
    }, []);

    ////////// Поиск пользователя
    const handlechangeInput = (e) => {
        searchUser(e).then((res) => setUsers(res));
    };

    /////////// отобразить таблицу по умолчанию (без сортировки) (нажать на кнопку reset to default)
    function handleReset() {
        setUsers(def);
        setState({
            isSorted: !state.isSorted,
            isError: false,
        });
    }
    /////////// Сортировка по имени, возрасту и полу. сортировка по возрастанию и убыванию чередуются по клику. (нажимать на заголовки таблицы -  фио, возраст и пол)
    const handleSortedByName = () => {
        const sortedUsers = [...users];
        setState({
            isSorted: !state.isSorted,
            isError: false,
        });

        state.isSorted
            ? sortedUsers.sort((a, b) => (a.firstName < b.firstName ? -1 : 1))
            : sortedUsers.sort((a, b) => (a.firstName < b.firstName ? 1 : -1));

        setUsers(sortedUsers);
    };

    const handleSortedByAge = () => {
        const sortedUsers = [...users];
        setState({
            isSorted: !state.isSorted,
            isError: false,
        });

        state.isSorted
            ? sortedUsers.sort((a, b) => a.age - b.age)
            : sortedUsers.sort((a, b) => b.age - a.age);
        setUsers(sortedUsers);
    };

    const handleSortedByGender = () => {
        const sortedUsers = [...users];
        setState({
            isSorted: !state.isSorted,
            isError: false,
        });

        state.isSorted
            ? sortedUsers.sort((a, b) => (a.gender < b.gender ? -1 : 1))
            : sortedUsers.sort((a, b) => (b.gender > a.gender ? 1 : -1));
        setUsers(sortedUsers);
    };

    ///////// прячем/открываем модальное окно
    function hide() {
        setIsHide(!isHide);
    }

    function handleModalInfo(i) {
        const {
            id,
            image,
            firstName,
            lastName,
            age,
            address,
            height,
            weight,
            phone,
            email,
        } = i;
        hide();
        setUser({
            id,
            image,
            firstName,
            lastName,
            age,
            address,
            height,
            weight,
            phone,
            email,
        });
    }

    return (
        <div className="content">
            <SearchBar onchangeInput={handlechangeInput}></SearchBar>

            <div className="container">
                <button className="btn" onClick={handleReset}>
                    reset to default
                </button>
                {isHide && <Modal user={user} hide={hide}></Modal>}
                {state.isError ? (
                    <div>Невозможно отобразить таблицу</div>
                ) : (
                    <Table
                        handleSortedByName={handleSortedByName}
                        handleSortedByAge={handleSortedByAge}
                        handleSortedByGender={handleSortedByGender}
                    >
                        <ItemTable
                            content={users}
                            handleModalInfo={handleModalInfo}
                        ></ItemTable>
                    </Table>
                )}
            </div>
        </div>
    );
}

export default App;
