({
    block: 'page',
    title: 'Бери мебель - главная',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: ''}},
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        { elem: 'css', url: '/libs/css/reset.css'},
        { elem: 'css', url: '/libs/css/all.css'},
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
                                                    attrs: { class: 'icon basket black'}
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
                } // main
            ]
        }, // header
        {
            tag: 'nav',
            content: [
                {
                    block: 'container',
                    content: [
                        {
                            block: 'top-menu',
                            links: [
                                {
                                    title: 'Мягкая мебель',
                                    src: 'link01'
                                },
                                {
                                    title: 'Корпусная мебель',
                                    src: 'link02'
                                },
                                {
                                    title: 'Столы/стулья',
                                    src: 'link02'
                                },
                                {
                                    title: 'Матрасы/подушки',
                                    src: 'link02'
                                },
                                {
                                    title: 'Офисная мебель',
                                    src: 'link02'
                                },
                                {
                                    title: 'Аксессуары/текстиль',
                                    src: 'link02'
                                },
                                {
                                    title: 'Другое',
                                    src: 'link02'
                                },
                                {
                                    title: 'Распродажа',
                                    src: 'link02'
                                }
                            ]
                        }
                    ]
                    
                }
            ]
        }, // top nav
        {
            block: 'slider',
            content: [
                {
                    block: 'container',
                    content: [
                        {
                            tag: 'img',
                            attrs: {src: '/img/slider-filler.png'}
                        }
                    ]
                }
            ]
        }, // slider
        {
            tag: 'section',
            content: [
                {
                    block: 'container',
                    content: [
                        {
                            block: 'justified',
                            content: [
                                {
                                    block: 'goods-category',
                                    goods: [
                                        {
                                            title: 'ГОТОВИМСЯ К ШКОЛЕ',
                                            image: '/img/images/cat-1.png',
                                            name: 'Компьютерный стол (СТ-27)',
                                            price: '9 754 руб.',
                                            buying_link: '/',
                                            sub_link_names: [ 'Компьютерные столы и стулья', 'Компьютерные кресла', 'Столы трансформеры'],
                                            sub_link_urls: [ 'href1', 'href2', 'href' ]
                                        },
                                        {
                                            title: 'ваш здоровый сон',
                                            image: '/img/images/cat-1.png',
                                            name: 'Матрас Breeze (Бриз)',
                                            price: '9 754 руб.',
                                            buying_link: '/',
                                            sub_link_names: [ 'Аксессуары для сна', 'Матрасы', 'Подушки'],
                                            sub_link_urls: [ 'href1', 'href2', 'href' ]
                                        },
                                        {
                                            title: 'стол для всей семьи',
                                            image: '/img/images/cat-1.png',
                                            name: 'Компьютерный стол (СТ-27)',
                                            price: '9 754 руб.',
                                            buying_link: '/',
                                            sub_link_names: [ 'Компьютерные столы и стулья', 'Компьютерные кресла', 'Столы трансформеры'],
                                            sub_link_urls: [ 'href1', 'href2', 'href' ]
                                        },
                                        {
                                            title: 'РАСПРОДАЖА мебели',
                                            image: '/img/images/cat-1.png',
                                            name: 'Компьютерный стол (СТ-27)',
                                            price: '9 754 руб.',
                                            buying_link: '/',
                                            sub_link_names: [ 'Компьютерные столы и стулья', 'Компьютерные кресла', 'Столы трансформеры'],
                                            sub_link_urls: [ 'href1', 'href2', 'href' ]
                                        }
                                    ]
                                } // goods category
                            ]
                        }    
                    ]
                }
            ] 
        },
        {
            tag: 'section',
            content: [
                {
                    block: 'container',
                    content: [
                        {
                            block: 'news',
                            cls: 'justified',
                            content: [
                                {
                                    tag: 'h4',
                                    cls: 'red',
                                    content: 'НОВОСТИ КОМПАНИИ'
                                },
                                {
                                    block: 'news-list',
                                    news: [
                                        {
                                            date: '30.03.2014',
                                            title: 'Мы переехали!',
                                            href: '/',
                                            text: 'Уважаемые клиенты! Начиная со 2 апреля мы работаем по новому адресу: г.Тверь, пр-т 50 лет Октября, д.3, вход в магазин "Столы и стулья".'
                                        },
                                        {
                                            date: '30.03.2014',
                                            title: 'Мы переехали!',
                                            href: '/',
                                            text: 'Уважаемые клиенты! Начиная со 2 апреля мы работаем по новому адресу: г.Тверь, пр-т 50 лет Октября, д.3, вход в магазин "Столы и стулья".'
                                        },
                                        {
                                            date: '30.03.2014',
                                            title: 'Мы переехали!',
                                            href: '/',
                                            text: 'Уважаемые клиенты! Начиная со 2 апреля мы работаем по новому адресу: г.Тверь, пр-т 50 лет Октября, д.3, вход в магазин "Столы и стулья".'
                                        },
                                        {
                                            date: '30.03.2014',
                                            title: 'Мы переехали!',
                                            href: '/',
                                            text: 'Уважаемые клиенты! Начиная со 2 апреля мы работаем по новому адресу: г.Тверь, пр-т 50 лет Октября, д.3, вход в магазин "Столы и стулья".'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            tag: 'footer',
            content: [
                {
                    block: 'container',
                    content: [
                        {
                            block: 'bar-code',
                            content: [
                                {
                                    tag: 'img',
                                    attrs: { src: '/img/images/bar-code.png'}
                                }
                            ]
                        },
                        {
                            block: 'vertical-menu',
                            cls: 'main',
                            links: [
                                { name: [ 'Главная' ], href: [ '/' ] },
                                { name: [ 'Контакты' ], href: [ '/' ] },
                                { name: [ 'Акции и подарки' ], href: ['/' ] },
                                { name: [ 'Как купить' ], href: [ '/' ] },
                                { name: [ 'Доставка' ], href: [ '/' ] }
                            ]
                        },
                        {
                            block: 'vertical-menu',
                            cls: 'services',
                            links: [
                                { name: [ 'Занос в помещения и подъём' ], href: [ '/' ] },
                                { name: [ 'Сборка и установка' ], href: [ '/' ] },
                                { name: [ 'Оплата' ], href: ['/' ] },
                                { name: [ 'Оплата наличными средствами' ], href: [ '/' ] },
                                { name: [ 'Оплата безналичными средствами' ], href: [ '/' ] }
                            ]
                        },
                        {
                            block: 'vertical-menu',
                            cls: 'info',
                            links: [
                                { name: [ 'Кредит' ], href: [ '/' ] },
                                { name: [ 'Электронные деньги' ], href: [ '/' ] },
                                { name: [ 'FAQ' ], href: ['/' ] },
                                { name: [ 'Полезно' ], href: [ '/' ] },
                                { name: [ 'О нас' ], href: [ '/' ] }
                            ]
                        },
                        {
                            block: 'parthners',
                            content: [
                                { tag: 'h4', content: 'Наши партнеры' },
                                { tag: 'a', content: 'мебельвкубе.рф', attrs: { href: '/'} },
                                { tag: 'a', content: 'elitemebelshop.ru', attrs: { href: '/'} }
                            ]
                        },
                        {
                            block: 'social',
                            content: [ 
                                { tag: 'div', cls: 'icon vk' },
                                { tag: 'div', cls: 'icon fbk' },
                                { tag: 'div', cls: 'icon tw' }
                            ]
                        }
                    ]
                },
                {
                    block: 'container',
                    content: [
                        {
                            block: 'bottom-pane',
                            content: [
                                {
                                    elem: 'copy',
                                    content: [
                                        {
                                            tag: 'p',
                                            content: '© 2010 — 2014 ООО «Бери Мебель». Все права защищены.'
                                        },
                                        {
                                            tag: 'p',
                                            content: 'Воспроизведение материалов сайта допускается с разрешения владельца'
                                        }
                                    ]
                                },
                                {
                                    elem: 'cards',
                                    content: [
                                        {
                                            tag: 'a',
                                            cls: 'icon visa',
                                            attrs: { href: '/'}
                                        },
                                        {
                                            tag: 'a',
                                            cls: 'icon mc',
                                            attrs: { href: '/'}
                                        },
                                        {
                                            tag: 'a',
                                            cls: 'icon pay',
                                            attrs: { href: '/'}
                                        },
                                        {
                                            tag: 'a',
                                            cls: 'icon card',
                                            attrs: { href: '/'}
                                        },
                                        {
                                            tag: 'span',
                                            content: '- оплата в кредит'
                                        }

                                    ]
                                },
                                {
                                    elem: 'logo-sm',
                                    content: [
                                        {
                                            tag: 'a',
                                            attrs: { href: '/'},
                                            content: [
                                                {
                                                    tag: 'img',
                                                    attrs: { src: '/img/logo-sm.png'}
                                                }
                                            ]

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})