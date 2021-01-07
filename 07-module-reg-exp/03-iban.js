const pattern = /^[A-Z]{2}\d{22}$/; 
const values = ['ES6600190020961234567890'];

const values2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
const pattern2 = /^([A-Z]{2}\d{2}\s?)(\d{4}\s?)(\d{4}\s?)(\d{4}\s?)(\d{4}\s?)\d{4}$/;

const pattern3 = /^([A-Z]{2})(\d{2})\d{20}$/ ;

values.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));  
});

values2.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, pattern2.test(value));  
});

values.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, pattern3.exec(value));  
});