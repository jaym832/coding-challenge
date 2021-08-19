module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/




let numArr=[a,b,c]
let totalSum=0

for(i=0;i<numArr.length;i++){
  
    let instances=numArr.filter(function(e){      
      return e==numArr[i]
    })


    if(instances.length>=2){
      totalSum+=0;
    }else{
      totalSum+=numArr[i];

    }
        
  
}
return totalSum

};
