//js function to remove vowels from a string
vowelRemover=str=>str.remove('[aeiou]/ig','')

//js function to find whether a number is a perfect square
perfectSquare=num=>num>=0 && Math.sqrt(num)%1===0

//js function to remove the occurences of any substring from the given string
filteredString=givenString=>givenString.replace(/(substring)+/g,' ').trim() 