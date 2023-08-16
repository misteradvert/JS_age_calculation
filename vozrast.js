function getAgeWord(age) {
    if (age % 10 === 1 && age % 100 !== 11) {
        return 'год';
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
        return 'года';
    } else {
        return 'лет';
    }
}

const getAge = prompt('Введите ваш год рождения');
const result = 2023 - getAge;

alert(`Вам ${result} ${getAgeWord(result)}`);
