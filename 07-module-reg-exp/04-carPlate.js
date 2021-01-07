const pattern = /^(\d{4}\S?[A-Z]{3}$)|(\d{4}\s?[A-Z]{3}$)/;
const values = ['1234-ABC', '1234_ABC', 'MA 3456 CY', '0Y4M-ABC', '0894 BAC', '0894FKX'];
const pattern2 = /^(\d{4})(\s|-|_)?([A-Z]{3})$/;  

values.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));  
});

values.forEach(value => {  // Valoramos por partes de la cadena con el patron 2.
  console.log(`Regexp matchs with "${value}"? -> `, pattern2.exec(value));  
});