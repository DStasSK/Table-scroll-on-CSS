// генерация заголовков таблиц
let th = '', th2 = '';
// первая строка заголовка
for(let i = 1; i < 21; i++){th += '<th>' + i + '</th>';}
// вторая строка заголовка
for(let i = 1; i < 11; i++){th2 += '<th colspan="2">' + i + '</th>';}



// генерация содержимого таблицы
const k = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let fillTbody = '';
for(let j = 0; j < 26; j++){
   fillTbody += '<tr><td>' + k[j] + '</td>';
   for(let t = 1; t < 21; t++){
      fillTbody += '<td>' + k[j] + t + '</td>';
   }
   fillTbody += '</tr>';
}



// сборка элемента tbody для таблиц
let table = '<tbody><tr><th>~</th>' + th + '</tr>' + fillTbody + '</tbody>';
// таблица для сложного заголовка
let table2 = '<thead><tr><th rowspan="2">~</th>' + th2 + '</tr><tr>' + th + '</tr></thead><tbody>' + fillTbody + '</tbody>';



// вставка таблиц в тело документа
const arrayOfTable = document.getElementsByName("table");
const arrayOfTable2 = document.getElementsByName("table_2_body");
for(let i = 0; i < arrayOfTable.length; i++){
   arrayOfTable[i].innerHTML = table;
}
for(let j = 0; j < arrayOfTable2.length; j++){
   arrayOfTable2[j].innerHTML = table2;
}
