import {url} from '../utils/url'

const logar = dados =>{
    return fetch({url},{
    method : 'POST',
    body : JSON.stringify(dados),
    headers : {
        'content-type' : 'application/json'
        }
    })
}

export default{
    logar
}