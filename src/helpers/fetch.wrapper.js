const { VITE_APP_USER_MAIL, VITE_APP_USER_TOKEN } = import.meta.env;

const headerAuth = btoa(`${VITE_APP_USER_MAIL}:${VITE_APP_USER_TOKEN}`)

const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const fetchHeaders = {
            method,
            headers: {
                Authorization: `Basic ${headerAuth}`,
            }
        }
        if (body) {
            fetchHeaders.headers['Content-Type'] = 'application/json;charset=utf-8';
            fetchHeaders.body = JSON.stringify(body);
        }
        return fetch(url, fetchHeaders).then(handleResponse);
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
} 

export default fetchWrapper
