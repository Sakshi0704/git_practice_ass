// Problem 1 : Check whether a number is Prime or not

let N=5;
let flag="Yes"
for(let i=2;i<N;i++)
{
    if(N%i==0)
        flag="No";
}

console.log(flag);
