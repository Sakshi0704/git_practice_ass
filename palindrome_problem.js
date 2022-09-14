// Problem2 : Check whether a string is palindrome or not.
let i;
let str = "kakaakak";
let k=str.length-1;
for( i=0; i<str.length; i++){
if (str[i] != str[k]){ 
break;
} k--;}
if(i==str.length){ console.log("Yes");
}else{
console.log("No");}