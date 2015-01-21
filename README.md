Work repository for beri-mebel.ru site


2changes:

1. goods.category.bemhtml
Изменить шаблон вывода категорий так, чтобы подкатегории внизу формировались с помощью map(), используя входные данные bemjson. (кол-во пунктов, данные по каждому пункту)
<i> на данный момент - ручная установка номера элемента массива </i>
2. vertical-menu.bemhtml
привести к виду двух вложенных массивов в записи JSON:

links: [
	{	
		name: [ 'name_1', 'name_2', 'name_3', '...'  ],
		href: [ '_href1', '_href2', '_href3', '...' ]
	}
]