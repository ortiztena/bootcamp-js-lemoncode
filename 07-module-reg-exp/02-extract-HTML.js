const values = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';
const pattern = /img.{0,}\.[a-z]{3,4}/;

let frase = pattern.exec(values)[0];
let url = frase.slice(9);

console.log(url);


const html = `<html>
  <body>
    <img
      src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
    />
    <h1>ejemplo</h1>
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    />
  </body>
</html>`;

const pattern2 = /(https.+\.(png))/;
const pattern3 = /(https.+\.(jpg))/;

let png = pattern2.exec(html);
let jpg = pattern3.exec(html);

console.log(png[0]);
console.log(jpg[0]);