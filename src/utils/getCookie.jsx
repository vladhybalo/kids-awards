const getCookie = (cookieName) => {
    let cookie = {};

    document.cookie.split(';').forEach(item => {
        let [key, value] = item.split('=');
        cookie[key.trim()] = value;
    })

    return cookie[cookieName];
}

export default getCookie;