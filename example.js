/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // LOOPS
  document.write("LOOPS<br/><br/>");

  document.write("CONTINUE & BREAK<br/>");

  var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed', 'Dandelion', 'Deadly Nightshade'];
  var i;
  var upperLimit=flowers.length;
  
  document.write("<br/>All of our flowers ...<br/>");  
  for(i=0; i<upperLimit; i++) {
    document.write(flowers[i] + "<br/>");	
  }

  document.write("<br/><br/>NOT all of our flowers ...<br/>");  
  for(i=0; i<upperLimit; i++) {
    if(i==2)
      continue;
    if(i==4)
      break;
    document.write(flowers[i] + "<br/>");	
  }

  
}

