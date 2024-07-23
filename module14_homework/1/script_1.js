const parser = new DOMParser();

const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
let studentNode = listNode.querySelectorAll("student");

let result = {};
let arrayStudent = [];

for (let i = 0; i < studentNode.length; i++) {
  let firstName = studentNode[i].querySelector("first").textContent;
  let secondName = studentNode[i].querySelector("second").textContent;
  let ageNode = studentNode[i].querySelector("age").textContent;
  let profNode = studentNode[i].querySelector("prof").textContent;
  let langAttr = studentNode[i].querySelector("name").getAttribute("lang");

  result = {
    name: firstName + ' ' + secondName,
    age: Number(ageNode),
    prof: profNode,
    lang: langAttr
  }
  arrayStudent.push(result);
};

let list = {
  list: arrayStudent
};

console.log(list);

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }