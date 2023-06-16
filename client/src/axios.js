import axios from "axios";

export const makeRequest = axios.create({
    baseURL:"http://localhost:2000/api/",
    withCredentials:true,
});

// file ini digunakan agar tidak berulang2 menggunakan axios
// dan selalu mengirim access token ke server