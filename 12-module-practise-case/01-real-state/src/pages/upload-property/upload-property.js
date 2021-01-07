import { history } from '../../core/router';
import { mapPropertyDetailVmToApi } from './upload-property.mappers';
import { formValidation } from './upload-property.validations';
import {
  getProvinceList,
  getEquipmentsList,
  getSaleTypes,
  postHouse,
} from './upload-property.api';
import {
  setOptionList,
  setCheckboxList,
  formatCheckboxId,
  onAddFeature,
  onRemoveFeature,
  formatDeleteFeatureButtonId,
  onAddImage,
} from './upload-property.helpers';
import {
  onUpdateField,
  onSubmitForm,
  onAddFile,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';

let property = {
  id:'',
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  address: '',
  city: '',
  provinceId: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equiptments: [],
  images: [],
};

const requestValues = ['title','notes', 'email' , 'phone',
 'price', 'address', 'city', 'provinceId', 'squareMeter', 'rooms',
'bathrooms', 'locationUrl'];

Promise.all([getProvinceList(), getEquipmentsList(), getSaleTypes()]).then(
  ([provinceList, equipmentsList, saleTypesList]) => {
    setOptionList(provinceList, 'province');
    setCheckboxList(equipmentsList, 'equipments');
    setCheckboxList(saleTypesList, 'saleTypes');
    eBox(saleTypesList, 'saleTypes');
    eBox(equipmentsList, 'equiptments');
  }
);

const addElement = (value, id) =>
  property = { ...property, [id]: [...property[id], value] };

const removeElement = (value, id) => {
  property[id].pop(value);
};

const eBox = (list, id) => {
  list.forEach( element => {
    const checkBox = formatCheckboxId(element);
    onUpdateField(checkBox, e => {
      const value = e.target.value;
      e.target.checked ? addElement(value, id) : removeElement(value, id);
    });
  });
};

onSubmitForm('insert-feature-button', () => {
  const feature = document.getElementById('newFeature').value;
  if (feature) {
    property = {
      ...property,
      mainFeatures: [...property.mainFeatures, feature],
    };

    onAddFeature(feature);
    const btnId = formatDeleteFeatureButtonId(feature);
    onSubmitForm(btnId, () => {
      onRemoveFeature(feature);
      property.mainFeatures.pop(feature);
    });
  }
});

onAddFile('add-image', img => {
  onAddImage(img);
  property = {
    ...property,
    images: [...property.images, img],
  };
});

onSubmitForm('save-button', () => {
  formValidation.validateForm(property).then((result) => {
    onSetFormErrors(result);
    const map = mapPropertyDetailVmToApi(property);
      if (result.succeeded) {
        postHouse(map).then(() => {
          history.push('/pages/property-list/property-list.html');
        });
      }
  });
});

for (let id of requestValues) {
  onUpdateField(id, e => {  
    const value = e.target.value;
    property = {
      ...property,
      [id]: value,
    };

    formValidation.validateField(id, property[id]).then(
    result => {
      onSetError(id, result);
    });
  });
}
