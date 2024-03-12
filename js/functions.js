
// функция для проверки длины строки

const checkStringLength = (string = '', length = 1) => string.length <= length;

checkStringLength('Меня зовут Наташа', 20);

//функция для проверки строки на палиндромность

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toUpperCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return reversedString === normalizedString;
};

isPalindrome('Топот');

//функция для извлечения числа

const extractNumbers = (string) => {
  let result = '';
  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

extractNumbers('2021 год');
