regx=/meets+$/m;

str1=`cat eat rat 
and meet`;
str2="rat eat wheat";
str3="bat eat meets";
 
result1=regx.test(str1)
result2=regx.test(str2)
result3=regx.test(str3)

console.log(result1);
console.log(result2);
console.log(result3);