# menunavservice
## Сервисное меню-навигатор для InstantCMS 2
[Официальный сайт](http://instantcms.ru/forum "Официальный сайт")
[Автор виджета](http://instantcms.ru/users/12494 "Автор виджета")
[Страница в каталоге дополнений](http://addons.instantcms.ru/addons/menunavservice.html "Страница в каталоге дополнений")

[![](https://github.com/vladimilin500278347/Service-menu-navigator-for-InstantCms-2/blob/main/icon.jpg)](https://github.com/vladimilin500278347/Service-menu-navigator-for-InstantCms-2/blob/main/icon.jpg)

**Виджет выводит удобное меню с якорями.**
Есть настройки внешнего вида, можно указать цвет, тень.

Виджет цепляется например к article, находит h2,h3,h4,h5,h6 и делает под них якоря. Что-то на подобии «Оглавление».

Виджет умеет создавать вложенность.
--- ---
H1
--H2
---H3
--H2
---H4
----H5
--- ---
итд

В архиве для разработчиков были оставлены SCSS файлы. В файле menunavservice.tpl.php есть комменты для вебмастеров.

Добавлена украинская локализация.

### Обновление

- Просто заменить файлы

### Что нового
Добавлены опции -- 2022/08/28
- Раскрывать виджет не сразу, а по клику.
- Выключить плавный скролл
