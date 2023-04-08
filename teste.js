const works = [
  "ana ",
  "bruno ",
  "camila ",
  "daniel ",
  "erica ",
  "fabia ",
  "gean ",
  "hebe ",
  "igor ",
  "jessica ",
  "kely ",
  "leandro ",
  "maria ",
  "nadia",
];

const newWorks = [];

works.forEach((item) => {
  const primeiraLetra = item[0].toUpperCase();
  const newItem = primeiraLetra + item.substring(1);
  newWorks.push(newItem);
});
