import {
    atom,
} from 'recoil';


export const apiValue = atom({
    key: 'api',
    default: '/latest',
});



export const apiLatest = atom({
    key: 'apiLatest',
    default: '/latest',
});
