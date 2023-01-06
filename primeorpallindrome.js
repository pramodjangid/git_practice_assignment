let count=0;

for(let i=1;i<=num;i++){
if(num%i==0){
    count++;
}
}
if(count==2){
    console.log("Yes");
}else{
    console.log("No");
}



let str="naman";
let bag="";

for(i=str.length-1;i>=0;i--){
    bag=bag+str[i];
}
if(str==bag){
    console.log("Yes")
}else{
    console.log("No");
}
