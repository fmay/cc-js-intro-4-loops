/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // LOOPS
  document.write("LOOPS<br/><br/>");

  // FOR
  document.write("FOR<br/>");

  var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed'];
  var i;
  var upperLimit=flowers.length;
  for(i=0; i<upperLimit; i++) {
    document.write(flowers[i] + "<br/>");	
  }

  // WHILE
  document.write("<br/>WHILE<br/>");

  i=0;
  while(i<upperLimit) {
    document.write(flowers[i++] + "<br/>");
  }
  
  // DO ... WHILE
  document.write("<br/>DO ... WHILE<br/>");  
  i=0;
  do {
    document.write(flowers[i] + "<br/>");    
  } while(++i<upperLimit);
  
}

