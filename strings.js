var numOfSandwhiches = 4*2;
 console.log("numOfSandwhiches", numOfSandwhiches);

// challenge 2
 var name= "christian";
 var string = "Hello, "+ name + " how are you doing today?"
 console.log("string",string);

 // challenge3
  var DNA= "GCAT"
  var RNA= DNA.replace('T','U');
  console.log("RNA",RNA);

  //challenge 4
  //var animal = "Goat";
  var animal = "AlliGATor";
  if (animal.toLowerCase()=== "alligator"){
      //console.log("small");
  } else {
      console.log("wide");
  }

  var yarn = "the better string";
  var domString = "<h4>" + yarn + "</h4>";
  var myDiv = document.getElementById('yarn-holder');
  myDiv.innerHTML = domString;

  // challenge 5
    var str = 'IBMWLOVEbmcatsbmw';
    var lovecats= str.replace(/[BMWbmw]/g,"");
    var catString = "<h1>" + lovecats + "</h1>";
    var catDiv = document.getElementById('cats');
    catDiv.innerHTML = catString;
    
