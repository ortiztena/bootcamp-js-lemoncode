import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;
// const url2 = `${process.env.BASE_API_URL}/account-list`;

//export const getMovements = id => Axios.get(url, {params: { accountId:id }}).then(({ data }) => data );

export const getMovements = (id) =>
  Axios.get(url, {params : {accountId: id}}).then(response => {
    return response.data
});

// export const getHeaders = () =>
//   Axios.get(url2, {params : {accountId: id}}).then(response => {
//     return response.data;
    
// });