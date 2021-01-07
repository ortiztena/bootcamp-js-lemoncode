import { getPropertyDetails, getEquipment, setContact } from './property-details.api'
import { history } from '../../core/router/history'
import { mapPropertyFromApiToVm, mapContactVmToApi } from  './property-details.mappers'
import { setPropertyValues } from './property-detail.helpers';
import { onUpdateField, onSetError, onSetFormErrors, onSubmitForm, } from '../../common/helpers';
import { formValidation } from './property-details.validations';
  
let contact = {
  email: '',
  message: '',
};

const params = history.getParams();

Promise.all([getPropertyDetails(params.id), getEquipment()]).then(
  ([propertyList, equipmentsList]) => {
    loadProperty(propertyList, equipmentsList);
  }
);

const loadProperty = (propertyList, equipmentsList) => {
  const vMProperty = mapPropertyFromApiToVm( propertyList, equipmentsList);
  setPropertyValues(vMProperty);
};


onUpdateField('email', e => {
  const value = e.target.value;
  contact = {
    ...contact,
    email: value,
  };
  formValidation.validateField('email', contact.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', e => {
  const value = e.target.value;
  contact = {
    ...contact,
    message: value,
  };
  formValidation.validateField('message', contact.message).then((result) => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(contact).then(result => {
    onSetFormErrors(result);
    const map = mapContactVmToApi(contact);

    if (result.succeeded) {
      setContact(map).then(() => {
        history.back();
      });
    }
  });
});