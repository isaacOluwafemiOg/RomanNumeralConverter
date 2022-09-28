/*This project consist of a JavaScript code that converts an input number into its equivalent roman numeral.
It is important to note that this works for only numbers up to 99999 but the functionality can be easily extended*/
function convertToRoman(num) {
   let answ=[]
   let fLetters=["I","X","C","M"];
   let mLetters=["V","L","D"];
   let ans=[];
   let q=1;
   let numModStr=num.toString();
   let strToArr=[...numModStr];
   function lessthan(n,times){
     while (times>0){
       ans.push(n)
       times--;
     }
   }
   function greathan(n,times){
     while(times>0){
       ans.push(n);
       times--;
     }
   }
   function convSingDig(value,place){
      if(value==0){return ""};
      if (value<4){
        lessthan(fLetters[place-1],value)
        return ans;
      }
      if(value==9){
        ans.push(fLetters[place-1]);
        ans.push(fLetters[place])
        return ans;
      }
      if(value==4){
        ans.push(fLetters[place-1]);
        ans.push(mLetters[place-1]);
        return ans;
      }
      if (value>4){
        greathan(fLetters[place-1],value-5)
        ans.unshift(mLetters[place-1])
        return ans;
      }
   }
   for (let i=strToArr.length-1;i>=0;i--){
     let res=convSingDig(parseInt(strToArr[i]),q++);
     ans=[];
     answ.unshift(...res);
   }
 return answ.join("");
}