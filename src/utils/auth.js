// export const URL_MAIN = 'http://localhost:3000';
export const URL_MAIN = 'https://api.find-films.students.nomoredomains.icu';

export const register = (email, password, name) => {
    return fetch(`${URL_MAIN}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name })
    })
        .then((res => res.json()))
        .catch(() => {
            return Promise.reject('Произошла ошибка при попытке зарегистрироваться');
        });
}

export const login = (email, password) => {
    return fetch(`${URL_MAIN}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
        .then((res => res.json()))
        .catch(() => {
            return Promise.reject('Произошла ошибка при попытке авторизоваться');
        });
}

export const getContent = (jwt) => {
    return fetch(`${URL_MAIN}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .catch(() => {
            return Promise.reject('Произошла ошибка при попытке проверить токен');
        });
}