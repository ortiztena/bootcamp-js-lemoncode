const pattern = /^[50-55]{2}\d{2}(\s?|-)\d{4}(\s?|-)\d{4}(\s?|-)\d{4}(\s?|-)$/; 
const values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

const pattern2 = /^([50-55]{2}\d{2})(\s?|-)(\d{4})(\s?|-)(\d{4})(\s?|-)(\d{4})(\s?|-)$/

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));  
  });

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern2.exec(value));  
  });