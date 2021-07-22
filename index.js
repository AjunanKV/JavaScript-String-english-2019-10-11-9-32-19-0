// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
// TODO write your code here...
var name = 'hello';
name=name.toUpperCase();
console.log("'"+name+"'")



// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.'; 
//TODO write your code here...
 var wholeword = "";
 var words = sentence.split(" "); 
console.log(words.length);
 for (let i = 0; i < words.length; i++) {
     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      wholeword+=words[i]; 
       if(i<words.length-1) 
     {
         wholeword+=" ";
     }
 }
 console.log(wholeword);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(parseFloat(money.substring(1)));
