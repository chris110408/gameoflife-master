/**
 * Created by leichen on 2017/2/26.
 */
import fetch from 'isomorphic-fetch';


export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
    process.env.BASE_URL || (`http://localhost:${process.env.PORT || 27017}/api`) :
    '/api';

export default function callApi(endpoint, method = 'get', body) {
    console.log(body)
    return fetch(`${API_URL}/${endpoint}`, {
        headers: { 'content-type': 'application/json' },
        method,
        body: JSON.stringify(body),
    })
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }

            return json;
        })
        .then(
            response => response,
            error => error
        );
}
