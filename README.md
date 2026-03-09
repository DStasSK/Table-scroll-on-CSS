## Фиксированный заголовок и первая колонка таблицы на чистом CSS.

<br>

Представляю вашему вниманию <span style="color:blue">[CSS стили](https://dstassk.github.io/Table-scroll-on-CSS/)</span> для таблиц, в которых:


- первая строка (или группа строк) и первый столбец будут зафиксированы относительно элемента документа;
- основное содержимое будет свободно перемещаться внутри таблицы;
- зафиксированные элементы будут согласованно смещаться относительно содержимого таблицы;
- JavaScript не будет использован - только CSS.



```html
<div class="yourBox">
  <table class="scroll_table">
    ...
  </table>
</div>
```

```css
.scroll_table {
  border-collapse: collapse;
  border:solid transparent; border-width:0 .1px .1px 0; /* *1 */
  --th_bg-color: #b0e0e6;   /* th background-color */
  --th1_bg-color: #5F9EA0;  /* th:nth-child(1) background-color */
  --td_bg-color: #fffacd;   /* td background-color */
  --td1_bg-color: #f0e68c;  /* td:nth-child(1) background-color */
  --b-size: 1px;            /* border-size through the box-shadow */
  --b-size-n: -1px;         /* border-size */
  --b-color: #000;          /* border-color */
}

.scroll_table th, .scroll_table td { border: none }
.scroll_table th { background: var(--th_bg-color) }
.scroll_table td { background: var(--td_bg-color) }
.scroll_table tr th:nth-child(1) { background: var(--th1_bg-color) }
.scroll_table tr td:nth-child(1) { background: var(--td1_bg-color) }

.scroll_table th {
  position:sticky; top:0; z-index:3;
  box-shadow: inset var(--b-size-n) var(--b-size-n) 0 var(--b-color),
              inset 0 var(--b-size) 0 var(--b-color);
}
.scroll_table tr th:nth-child(1) {
  left:0; z-index:4;
  box-shadow: inset var(--b-size-n) var(--b-size-n) 0 var(--b-color),
              inset var(--b-size) var(--b-size) 0 var(--b-color);
}
.scroll_table td {
  box-shadow: inset var(--b-size-n) var(--b-size-n) 0 var(--b-color)
}
.scroll_table tr td:nth-child(1) {
  position:sticky; left:0; z-index:2;
  box-shadow: inset var(--b-size-n) var(--b-size-n) 0 var(--b-color),
              inset var(--b-size) 0 0 var(--b-color);
}
```

\*1 - добавил правую и нижнюю прозрачную границу таблицы так как иногда пропадали соответствующие границы у последних ячеек. Думаю что проблема на аппаратном уровне, или же все дело в магии, а именно - в магии иллюзии ;-)
