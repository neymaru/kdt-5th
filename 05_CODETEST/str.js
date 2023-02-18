// 문자열
const str = "Hello, World! World!"; // -> H +  e + l + l + o

// 문자열 길이 length
console.log(str.length);

// 특정 문자열 찾기
str.indexOf("world"); // 여러개 있으면 처음 만나는 index 반환

// 문자열 자르기 slice
console.log(str.slice(0, 6));
console.log(str.slice(0, str.indexOf("World")));

// 문자열 바꾸기 replace
console.log(str.replace("World", "뽀로로"));
console.log(str); // 원본은 바뀌지 않음

// 문자열 반복 repeat
const str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr);

// 문자열 앞 뒤 공백문자 제거하기
const str3 = "           Hellom World        ";
console.log(str3.trim());
