import axios from "axios";

const generateFormData = function (data) {
    const bodyFormData = new FormData();
    for (const [key, value] of Object.entries(data)) {
        bodyFormData.append(key, value);
    }

    return bodyFormData;
};

const form = function (url, data) {
    const bodyFormData = generateFormData(data);

    return axios({
        method: 'post',
        url: url,
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data'}
    });
};

export default {
    axios: axios,
    form: form,
    get: axios.get,
    post: axios.post
};
