/* eslint-disable no-inner-declarations */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
// b = prompt('На сколько оцените его?', ''),
// c = prompt('Один из последних просмотренных фильмов?', ''),
// d = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[b]= d;

// console.log(personalMovieDB);




let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms (){
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
              if ( a!= null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
              } else {
                console.log('error');
              i--;
              }
}
}
// rememberMyFilms();

    
         
            function detectPersonalLevel(){
                 if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов'); 
              } else if (personalMovieDB.count >= 10 && personalMovieDB.count  < 30) {
                console.log('Вы классический зритель');
              } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
              } else {
                console.log('Произошла ошибка');
              }

            }
// detectPersonalLevel();

function showMyDB (hidden) {
if (!hidden) {
console.log(personalMovieDB);
}
}

showMyDB(personalMovieDB.privat);


function whriteYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] =  prompt (`Ваш любимый жанр под номером ${i}`);
    }
}
whriteYourGenres (); 