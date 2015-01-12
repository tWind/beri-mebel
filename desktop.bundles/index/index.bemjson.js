({
    block: 'page',
    title: 'Бери мебель - главная',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: ''}},
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        { elem: 'css', url: '/libs/css/reset.css'},
        { elem: 'css', url: '_index.css'},
        { elem: 'css', attrs: { rel: 'stylesheet/less'},url: '_index.less'}
    ],
    scripts: [
        { elem: 'js', url: '/libs/js/jquery.js'},
        { elem: 'js', url: '/libs/js/less.js'},
        { elem: 'js', url: '_index.js'}
    ],
    content: [
        { 
            tag: 'header',
            content: [
                {
                    block: 'top-bar',
                    content: [
                        {
                            block: 'container',
                            content: [
                                {
                                    block: 'search',
                                    content: [
                                        { tag: 'label', content: 'Поиск товара: '},
                                        { block: 'input'},
                                        { block: 'button'}
                                    ]
                                },
                                {
                                    block: 'extended-search',
                                    content: [
                                        { tag: 'span', attrs: { class: 'arrow right white'}},
                                        { tag: 'a', content: 'Расширенный поиск', attrs: { href:'/'}}
                                    ]
                                },
                                {
                                    block: 'register',
                                    content: [
                                        { tag: 'a', content: 'Вход', attrs: { href: '/'}},
                                        { tag: 'span', attrs: {class: 'divider'}, content: '/'},
                                        { tag: 'a', content: 'Регистрация', attrs: { href: '/'}}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'main',
                    content: [
                        {
                            block: 'container',
                            content: [
                                {
                                    block: 'logo',
                                    content: [
                                        {
                                            tag: 'a',
                                            attrs: { href: '/'},
                                            content: {tag: 'img', attrs: {src: '/img/logo-1.png'}}
                                        }
                                    ]
                                },
                                {
                                    block: 'discont',
                                    content: [
                                        {
                                            elem: 'left',
                                            content: 
                                            {
                                                tag: 'span',
                                                content: [
                                                    'дисконт',
                                                    { tag: 'br'},
                                                    'мебели',
                                                    { tag: 'br'},
                                                    'и интерьеров'
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'right',
                                            content: [
                                                {
                                                    tag: 'p',
                                                    content: [
                                                        '+7 (495) 729 81 82',
                                                        { tag: 'span', content: 'Москва'}
                                                    ]
                                                },
                                                {
                                                    tag: 'p',
                                                    content: [
                                                        '+7 (495) 729 81 82',
                                                        { tag: 'span', content: 'Тверь'}
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'shedule',
                                    content: [
                                        {
                                            elem: 'left',
                                            content: [
                                                {
                                                    tag: 'p',
                                                    content: 'пн-пт 10.00-19.00'
                                                },
                                                {
                                                    tag: 'p',
                                                    content: 'сб-вс 10.00-17.00'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'right',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    content: 'все контакты',
                                                    attrs: { href: '/'}
                                                },
                                                {
                                                    tag: 'a',
                                                    content: 'обратный звонок',
                                                    attrs: { href: '/'}
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'shopping_cart',
                                    content: [
                                        {
                                            elem: 'left',
                                            content: [
                                                {
                                                    tag: 'div',
                                                    attrs: { class: 'icon basket'}
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'right',
                                            content: [
                                                {
                                                    tag: 'p',
                                                    content: [
                                                        'Товаров:',
                                                        {
                                                            tag: 'span',
                                                            content: '0'
                                                        }
                                                    ]
                                                },
                                                {
                                                    tag: 'p',
                                                    content: [
                                                        'Стоимость:',
                                                        {
                                                            tag: 'span',
                                                            content: '0 руб'
                                                        }
                                                    ]
                                                },
                                                {
                                                    tag: 'a',
                                                    attrs: { href: '/'},
                                                    content: 'список товаров'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, // main
                {
                    block: 'top-menu'
                }
            ]
        }
    ]
})