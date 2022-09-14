// Problem 1 : Check whether a number is Prime or not

let num=5;
for(let i=0;i<num;i++)
{
	if(num%i==0)
		break;
}
if(i==num)
	console.log("Yes");
else
	console.log("No");
