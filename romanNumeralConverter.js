/*This project consist of a JavaScript code that converts an input number into its equivalent roman numeral.
It is important to note that this works for only numbers up to 99999 but the functionality can be easily extended*/
function convertToRoman(num) {
   
   //Defining variables and doing some initialization
   let answ=[] // container array for the letters that will make up the equivalent roman numeral (letters will be stored in order)
   let fLetters=["I","X","C","M"]; //various letters that represent
   let mLetters=["V","L","D"];
   let ans=[];
   let q=1;
   let stringifiedNum=num.toString(); // Converting the input argument (num) into a string so as to allow easy handling of the individual digits that make up 'num'
   let arrOfDigits=[...stringifiedNum]; // upacking the stringified 'num' into an array 
   
   /* Defining the various nested functions that will be necessary for the code algorithm*/
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
   for (let i=arrOfDigits.length-1;i>=0;i--){ //iterating through the digits of 'num' from the last digit through to the first digit
     let res=convSingDig(parseInt(arrOfDigits[i]),q++);
     ans=[];
     answ.unshift(...res);
   }
 return answ.join("");
}
