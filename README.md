# Домашнее задание по курсу EPAM: JavaScript: Arrays, Objects, Functions #13
## Учитель: Vitaliy Zhyrytskyy
## Массивы

### Задание 1
Создайте двумерный массив размером **14x8** из символов **'#'** и **'.'** таким образом, чтобы при выводе в консоль получился стилизованный британский флаг, как на примере:
```
# # . . . . . # # . . . . . # #
. . # # . . . # # . . . # # . .
. . . . # # . # # . # # . . . .
# # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # #
. . . . # # . # # . # # . . . .
. . # # . . . # # . . . # # . .
# # . . . . . # # . . . . . # #
```

### Задание 2
Дано графическое отображение маршрута в виде двумерного массива. Точка начала координат находится в левом верхнем углу карты. **S** - начало маршрута, **E** - конец маршрута, **'#'** - промежуточные точки. Маршрут может идти только влево, вверх,вправо и вниз. Самопересечения маршрута невозможны. Маршрут может соприкосаться сам с собой только по диагонали. Напишите программу, которая по графическому отображению маршрута, составит последовательный массив координат от начала и до конца маршрута. В результате должен получиться массива вида: **[[x1, y1], [x2, y2], ...]**, где x - координата по оси абсцисс, y - координата по оси ординат. Самой первой точкой от начала координат считаем **[0, 0]** по аналогии на первым индексом массива.
Два примера маршрута, по которым можно проверить программу приведены ниже:

#### Пример 1: 

##### Карта:
```
0------------------X
|  E . . . . . S
|  # . . . . . #
|  # . # # # . #
|  # . # . # . #
|  # # # . # # #
|
Y
```
##### Карта в виде массива:
```
[
  ['E', '.', '.', '.', '.', '.', 'S'],
  ['#', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '#', '#', '#', '.', '#'],
  ['#', '.', '#', '.', '#', '.', '#'],
  ['#', '#', '#', '.', '#', '#', '#']
];
```
##### Ответ:
```
[
  [ 6, 0 ], [ 6, 1 ], [ 6, 2 ], [ 6, 3 ], [ 6, 4 ], [ 5, 4 ],
  [ 4, 4 ], [ 4, 3 ], [ 4, 2 ], [ 3, 2 ], [ 2, 2 ], [ 2, 3 ],
  [ 2, 4 ], [ 1, 4 ], [ 0, 4 ], [ 0, 3 ], [ 0, 2 ], [ 0, 1 ],
  [ 0, 0 ] 
]
```

#### Пример 2: 

##### Карта:
```
0-------------------X
| # # # . . . . .
| E . # # . . . .
| . . . # . . . .
| . . . # # # # .
| . . . . . . # #
| . . . # # # . #
| . . # # . # . #
| . . S . . # # #
|
Y
```
##### Карта в виде массива:
```
[
  ['#', '#', '#', '.', '.', '.', '.', '.'],
  ['E', '.', '#', '#', '.', '.', '.', '.'],
  ['.', '.', '.', '#', '.', '.', '.', '.'],
  ['.', '.', '.', '#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.', '.', '#', '#'],
  ['.', '.', '.', '#', '#', '#', '.', '#'],
  ['.', '.', '#', '#', '.', '#', '.', '#'],
  ['.', '.', 'S', '.', '.', '#', '#', '#']
]
```
##### Ответ:
```
[ 
  [ 2, 7 ], [ 2, 6 ], [ 3, 6 ], [ 3, 5 ], [ 4, 5 ], [ 5, 5 ],
  [ 5, 6 ], [ 5, 7 ], [ 6, 7 ], [ 7, 7 ], [ 7, 6 ], [ 7, 5 ],
  [ 7, 4 ], [ 6, 4 ], [ 6, 3 ], [ 5, 3 ], [ 4, 3 ], [ 3, 3 ],
  [ 3, 2 ], [ 3, 1 ], [ 2, 1 ], [ 2, 0 ], [ 1, 0 ], [ 0, 0 ],
  [ 0, 1 ] 
]
```