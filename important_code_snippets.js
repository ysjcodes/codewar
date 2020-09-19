//js function to remove vowels from a string
vowelRemover=str=>str.remove('[aeiou]/ig','')

//js function to find whether a number is a perfect square
perfectSquare=num=>num>=0 && Math.sqrt(num)%1===0

//js function to remove the occurences of any substring from the given string
filteredString=givenString=>givenString.replace(/(substring)+/g,' ').trim() 

//beautiful use of reduce function on arrays having array or tuples as element of the array.
//accumulator stores the overall value throughout the iteration , number is the element taken on each iteration from the array.
total=givenArray=>givenArray.reduce((accumulator,number)=>accumulator+number[0]-number[1])