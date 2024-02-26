// функция для проверки длины строки

const checkStringLength = (string = '', length = 1) => string.length <= length;

checkStringLength();

// функция для проверки строки на палиндромность

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toUpperCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return reversedString === normalizedString;
};

isPalindrome('Топот');


