  import Axios from 'axios';

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;
const saleTypes = `${process.env.BASE_API_URL}/saleTypes`;
const postProperty = `${process.env.BASE_API_URL}/properties`;

export const getProvinceList = () =>
  Axios.get(provinceListUrl).then((response) => {
    return response.data;
  });

export const getEquipmentsList = () =>
  Axios.get(equipmentsUrl).then((response) => {
    return response.data;
  });

export const getSaleTypes = () =>
  Axios.get(saleTypes).then((response) => {
    return response.data;
  });

export const postHouse = home =>
  Axios.post(postProperty, home).then(response => {
    return response.data;
  })