import axios from 'axios';
const urlBase = window.location.href;

const body = (method = 'GET', data = {}, parameters = '') => {
    return axios({
            method: `${method}`,
            url: `${urlBase}/${parameters}`,
            data: data
        }).then(res => Requests.handleError(res))
        .then(res => res)
}

const Requests = {
    sendEmail: data => body('POST', data, 'send'),
    handleError: res => {
        if (res.status !== 200) {
            console.error('HandleError', res.responseText)
        }
        return res
    }
}
export default Requests