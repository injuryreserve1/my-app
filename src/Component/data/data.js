const data = async () => {
    let data = await fetch('https://dummyjson.com/users');
    let res = await data.json();

    return res.users;
}; // http запрос получения пользователей

const searchUser = async (id) => {
    const user = await fetch(`https://dummyjson.com/users/search?q=${id}`);
    let res = await user.json();

    return res.users;
}; // ф-ция поиска пользователя

export { data, searchUser };
