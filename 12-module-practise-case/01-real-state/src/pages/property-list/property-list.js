import {
    mapPropertyListApiToVm,
    mapFilterToQueryParams,
  } from './property-list.mappers';
import {
    getPropertyList,
    getSaleTypeList,
    getProvinceList,
  } from './property-list.api';
import {
    addPropertyRows,
    setOptions,
    clearPropertyRows,
  } from './property-list.helpers';
import {
    roomOptions,
    bathroomOptions,
    minPriceOptions,
    maxPriceOptions,
  } from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';
  
Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList()]).then(
    ([propertyList, saleTypeList, provinceList]) => {
        loadPropertyList(propertyList);
        setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
        setOptions(provinceList, 'select-province', '¿Dónde?');
        setOptions(roomOptions, 'select-room', '¿Habitaciones?');
        setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
        setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
        setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR');
    }
);
  
const loadPropertyList = propertyList => {
    const viewModelPropertyList = mapPropertyListApiToVm(propertyList);
    addPropertyRows(viewModelPropertyList);
};
  
let filter = {
    saleTypeId: '',
    provinceId: '',
    minRoom: '',
    minBathRooms: '',
    minPrice: '',
    maxPrice: '',
};
  
onUpdateField('select-sale-type', e => {
    const value = e.target.value;
    filter = {
      ...filter,
      saleTypeId: value,
    };
});
  
onUpdateField('select-province', e => {
    const value = e.target.value;
    filter = {
      ...filter,
      provinceId: value,
    };
});
  
onUpdateField('select-room', e => {
    const value = e.target.value;
    filter = {
      ...filter,
      minRooms: value,
    };
});
  
onUpdateField('select-bathroom', e => {
    const value = e.target.value;
    filter = {
      ...filter,
      minBathrooms: value,
    };
});
  
onUpdateField('select-min-price', e => {
    const value = e.target.value;
    filter = {
      ...filter,
      minPrice: value,
    };
});
  
onUpdateField('select-max-price', e => {
    const value = e.target.value;
    filter = {
      ...filter,
      maxPrice: value,
    };
});
  
onSubmitForm('search-button', () => {
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    getPropertyList(queryParams).then(propertyList => {
      loadPropertyList(propertyList);
    });
});