// describe('авторизация',() =>{
//     it('None-existent login test',() =>{
//         cy.fixture('cypressTest').then(data =>{
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//         })
//     })
// })

// describe('Негативный сценарий авторизации', () => {
//     it('Попытка входа с некорректными учетными данными', () => {
//       cy.fixture('cypressTest').then(data => {
//         cy.log('Переход на страницу авторизации');
//         cy.visit(data.login_url);
  
//         cy.log('Ввод некорректного логина');
//         cy.get('.form-input--text').type('несуществующий_логин');
  
//         cy.log('Ввод некорректного пароля');
//         cy.get('.form-input--password').type('неверный_пароль');
  
//         cy.log('Клик по кнопке "Войти"');
//         cy.get(':nth-child(3) > .button').click();
  
//         cy.log('Проверка отображения сообщения об ошибке');
//       });
//     });
// });
  
// describe('Сетевой город', () => {
//     it('Проверка сетевого города', () => {
//       cy.fixture('cypressTest').then(data => {
//         cy.log('Переход на страницу авторизации');
//         cy.visit(data.login_url);
  
//         cy.log('Проверка отображения кнопки "Сетевой город"');
//         cy.get('.button-login__network-city-desktop')
//         .click();
          
//         cy.log('Проверка отображения сетевого города');
//         cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button')
//         .click();
//         });
//     });
//   });

//   describe('Негативный сценарий сетевого города', () => {
//     it('Попытка продолжить без выбора сетевого города', () => {
//       cy.fixture('cypressTest').then(data => {
//         cy.log('Переход на страницу авторизации');
//         cy.visit(data.login_url);
  
//         cy.log('Проверка отображения кнопки "Сетевой город"');
//         cy.get('.button-login__network-city-desktop').should('be.visible')
//             .click();

//         cy.log('Ввод некорректного логина');
//         cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(1) > .form-control--medium > .form-input--text')
//         .type('несуществующий_логин');
  
//         cy.log('Ввод некорректного пароля');
//         cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(2) > .form-control--medium > .form-input--password')
//         .type('неверный_пароль');
        
//         cy.log('Клик по кнопке "Войти"');
//         cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button > .button')
//         .click();
//       });
//     });
//   });
  
// describe('Создание вакансии', () => {
//     it('Должно быть успешным', () => {
//       cy.fixture('cypressTest').then(data => {
//         // Логинимся на сайт
//         cy.visit(data.login_url);

//         cy.log('Ввод логина');
//         cy.get('.form-input--text')
//             .type(data.login1);

//         cy.log('Ввод пароля');
//         cy.get('.form-input--password')
//             .type(data.password);

//         cy.log('вход');
//         cy.get(':nth-child(3) > .button')
//             .click();

//         cy.log('переход на вакансии');
//         cy.get(':nth-child(7) > .menu-item__item-name')
//             .click()  

//         cy.log('переход на создание вакансий')
//         cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
//             .click()

//         cy.log('Создание вакансии');
//         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
//             .type('Новые данные', {force: true});
        
//         cy.log('выбор зп');
//         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__input')
//             .click()    

//         cy.log('тип занятости')
//         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')
//             .click()
//         cy.get('.form-select__items > :nth-child(2)')
//             .click()

//         cy.log('график работы')
//         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(2) > .radio-component__input')            .click()

//         cy.log('требование');
//         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
//             .type('Новые данные', {force: true});

//         cy.log('обязательсятва');
//         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')     
//             .type('Новые данные', {force: true});

//         cy.log('готово')
//         cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
//             .click({ force: true })
//       });
//     });
//   });
  
//   describe('Создание вакансии (негативный сценарий)', () => {
//     it('Должен завершиться неуспешно', () => {
//       cy.fixture('cypressTest').then(data => {
//         // Логинимся на сайт
//         cy.visit(data.login_url);

//         cy.log('Ввод логина');
//         cy.get('.form-input--text')
//             .type('несуществующий_логин');
        
//         cy.log('Ввод пароля');
//         cy.get('.form-input--password')
//             .type('несуществующий_логин');

//         cy.log('вход');
//         cy.get(':nth-child(3) > .button')
//             .click();

//       });
//     });
//   });
  
// describe('верефикация',() =>{
//     it('проверка работы верефикации',() =>{
//         cy.fixture('cypressTest').then(data =>{
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//                 .type(data.login);

//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//                 .type(data.password);

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.log('верификация')
//             cy.get('.message-student > .button')
//                 .click()
            
//             cy.log('Выбор учреждения');
//             cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
//                 .type('ттит') // вводим текст для поиска учреждения
//                 .wait(2000) // ожидаем некоторое время
            
//             // Перезагрузка страницы может привести к тому, что алиас перестанет существовать,
//             // поэтому для следующих действий используем алиас
//             cy.get('.search-input__item')
//                 .first() // выбираем первое совпадение
//                 .click(); // кликаем по нему

//                 cy.log('Выбор специальности');
//                 cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
//                     .type('11.02.08 Средства связи с подвижными объектами') // вводим текст для поиска специальности
//                     .wait(2000); // ожидаем некоторое время
                
//                 // Перезагрузка страницы может привести к тому, что алиас перестанет существовать,
//                 // поэтому для следующих действий используем алиас
//                 cy.get('.search-input__item')
//                     .first() // выбираем первое совпадение
//                     .click(); // кликаем по нему
                
            
//             cy.log('квалификация')
//             cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
//                 .type('про')

//             cy.log('курс обучение')
//             cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(5)')
//                 .click()

//                 cy.log('Выбор года обучения от');
//             // Нажимаем на выпадающий список для выбора года обучения "от"
//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
//                 .click();
//             // Выбираем конкретный год обучения "от"
//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
//                 .type('2022'); // Здесь "2020" - это значение года обучения
            
//             cy.log('Выбор года обучения до');
//             // Нажимаем на выпадающий список для выбора года обучения "до"
//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
//                 .click();
//             // Выбираем конкретный год обучения "до"
//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
//                 .type('2025'); // Здесь "2025" - это значение года обучения
                
//             cy.log('завершиени')
//             cy.get('.desktop-modal__content > .student-form > .button')
//                 .click()
//         })
//     })
// })

// describe('Верификация (негатив)', () => {
//     it('Проверка работы верификации', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации');
//             cy.visit(data.login_url);

//             cy.log('Ввод неправильного логина');
//             cy.get('.form-input--text').type('неправильный_логин');

//             cy.log('Ввод неправильного пароля');
//             cy.get('.form-input--password').type('неправильный_пароль');

//             cy.log('Клик по кнопке "Войти"');
//             cy.get(':nth-child(3) > .button').click();

//         });
//     });
// });

// describe('Просмотр карточки работодателя', () => {
//     it('проверка просмотр карточки работодателя', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации');
//             cy.visit(data.login_url);

//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//                 .type(data.login1);
//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//                 .type(data.password);
    
//             cy.log('вход');
//             cy.get(':nth-child(3) > .button')
//                 .click();

//             cy.log('переход на  вакансии')
//             cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label')
//             .wait(1000)
//             .click()

                

//             cy.log('переход на карточку')
//             cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__title-wrapper > .card-info > .breadcrumb > :nth-child(1) > .card-info__company')
//                 .click()

//             cy.log('переход на карту')
//             cy.get(':nth-child(1) > .depiction__text > a')
//                 .click()
            
//             cy.log('проверка почты')
//             cy.get(':nth-child(2) > .depiction__text > a')
//                 .click()

//             cy.log('номер тел')
//             cy.get(':nth-child(3) > .depiction__text > a')
//                 .click()

//             cy.log('сайт')
//             cy.get(':nth-child(4) > .depiction__text > a')
//                 .click()

//             cy.log('полное описание')
//             cy.get('.profile-card__description > .button')
//                 .click()
//         });
//     });
// });

// describe('Отчет по профориентационной деятельности', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//                 .type(data.login2);

//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//                 .type(data.password);

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click();

//             cy.log('Переход на список студентов')
//             cy.get(':nth-child(5) > .menu-item__item-name')
//                 .click();

//             cy.log('переход на студента')
//             cy.get(':nth-child(1) > .responses-list-item__content-company > .button')
//                 .click();

//             //Сайт не дает отчет
//           })
//         })
//       })


// describe('потребности', () => {
//     it('Вход', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login1)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password)

//             cy.log('Клик по кнопке "Войти"');
//             cy.get(':nth-child(3) > .button')
//                 .click();

//             cy.log('Переход по кнопке вакансии');
//             cy.get(':nth-child(6) > .menu-item__item-name')
//                 .click();

//             cy.log('Переход к создании потребности');
//             cy.get('.needs-block__filters-wrapper > .button')
//                 .click();
            
//             cy.log('Вписываем название потребности');
//             cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
//                 .type('Кладовщик', {force: true});
      
//             cy.log('Заработная плата')
//             cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__label')
//                 .click();
        

//             cy.log('Обязанности')
//             cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
//                 .type('кладовщик');

//             cy.log('Требования')
//             cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
//                 .type('Уметь все делать');

//             cy.log('Тип занятости')
//             cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-select > :nth-child(2) > .form-select__selected')
//                 .click();
//             cy.get('.form-select__items > :nth-child(3)')
//                 .click({force: true });
               
//             cy.log('Опубликовать')
//             cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
//                 .click({force: true });
//             })
//         })
//     })


// describe('авторЛичный кабинет студентаизация', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password)

//             cy.log('Клик по кнопке "Войти"');
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.log('Отклики')
//             cy.get(':nth-child(4) > .menu-item__item-name')
//                 .click()

//             cy.log('На рассмотрении')
//             cy.get(':nth-child(4) > .menu-item__item-name')
//                 .click()

//             cy.log('Одобренны')
//             cy.get(':nth-child(3) > .navigation-item__title')
//                 .click()

//             cy.log('Отклонены')
//             cy.get(':nth-child(4) > .navigation-item__title')
//                 .click()

//             cy.log('Открытие выбора')
//             cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
//                 .click({ force: true })

//             cy.log('вакансии')
//             cy.get('.form-select__items > :nth-child(2)')
//                 .click()
//                 .wait(2000)

//             cy.log('Открытие выбора')
//             cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
//                 .click({ force: true })


//             cy.log('Потребности')
//             cy.get('.form-select__items > :nth-child(3)')
//                 .click()
//                 .wait(2000)

//             cy.log('Открытие выбора')
//             cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
//                 .click({ force: true })

//             cy.log('Стажировка')
//             cy.get('.form-select__items > :nth-child(4)')
//                 .click()
//                 .wait(2000)

//         })
//     })
// })
    


// describe('смена фамилии(негатив)', () => {
//     it('проверка просмотр карточки ', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации');
//             cy.visit(data.login_url);

//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//                 .type(data.login1);
//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//                 .type(data.password);
    
//             cy.log('вход');
//             cy.get(':nth-child(3) > .button')
//                 .click();

//              cy.log('Профиль');
//              cy.get(':nth-child(2) > .menu-item__item-name')
//              .click();
                
//              cy.log('Смена Фамилии');
//              cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text') 
//              .wait(2000)
//              .clear()
//              .type('4') 
//              .click()
//              ;

             
//         });
//     });
// });



// describe('смена почты(негатив)', () => {
//     it('проверка просмотр карточки ', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации');
//             cy.visit(data.login_url);

//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//                 .type(data.login1);
//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//                 .type(data.password);
    
//             cy.log('вход');
//             cy.get(':nth-child(3) > .button')
//                 .click();

//              cy.log('Профиль');
//              cy.get(':nth-child(4) > .menu-item__item-name')
//              .click();
                
//              cy.log('Почта');
//              cy.get('.contacts__fields > :nth-child(2) > .form-control--max > .form-input--text')
//              .wait(2000)
//              .clear()
//              .type('dcds88') 
//              .click()
//              ;
             
//         });
//     });
// });