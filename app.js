
var age = +prompt('Введите возраст')

// > - больше < - меньше

if (age <= 18 ){
    var first = ('Вы еще молоды, Вам нужно учиться');
    alert(first);
}else if(age <= 50){
    var second = ('Вам нужно работать');
    alert(second);
}else if (age <= 59){
    var third = ('Вам скоро на пенсию');
    alert(third);
}else if (age <= 100){
    var fourth = ('Вы пенсионер');
    alert(fourth);
}else{
    var oshibka = ('Что-то пошло не так')
    alert(oshibka)
    console.log(oshibka);
}