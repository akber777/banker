import { baseUrl } from "../api/api";

// axios
import axios from 'axios';

// api

import { vacancySelectable } from '../api/include';

export const requiredNew = async (key, data) => {

    const res = await axios.get(baseUrl + 'news' + key.queryKey[1]);

    return res.data
}




// export const newsCategory = async (key, data) => {

//     const res = await axios.get(baseUrl + `news/home${key.queryKey[1]}?include=homeNews`);

//     return res.data
// }


export const relatedNews = async (key, data) => {

    const res = await axios.get(baseUrl + `news/related${key.queryKey[1]}`);

    return res.data
}


// vacancies

export const vacancySelect = async (key, data) => {

    const res = await axios.get(baseUrl + `vacancy/selectable?include=${vacancySelectable}${key.queryKey[1]}`);

    return res.data
}


export const filterVacancy = async (key, data) => {

    const res = await axios.post(baseUrl + `vacancy/job`, key.queryKey[1]);

    return res.data
}



export const headerMenu = async (key, data) => {

    const res = await axios.get(baseUrl + `news/menu/header-menu`, key.queryKey[1]);

    return res.data
}


export const staticPage = async (key, data) => {

    const res = await axios.get(baseUrl + `news/page${key.queryKey[1]}`);

    return res.data
}


export const homeCategory = async (key, data) => {

    const res = await axios.get(baseUrl + `news/menu/homepage-category${key.queryKey[1]}`);

    return res.data
}



export const homeBlog = async (key, data) => {

    const res = await axios.get(baseUrl + `news/blog/home${key.queryKey[1]}`);

    return res.data
}


export const exhange = async (key, data) => {

    const res = await axios.get(baseUrl + `currency/exchage/${key.queryKey[1]}`);

    return res.data
}

