function each(coll, func) { 
  if (Array.isArray(coll)) { 
        for (var i = 0; i < coll.length; i++) { 
              func(coll[i], i); 
        } 
  } else { 
        for (var key in coll) { 
              func(coll[key], key); 
        } 
  } 
}

function filter(array, predicate) {
  const acc = []; 
    each(array, function(element) {
      if (predicate(element)) {
        acc.push(element)
      }
    });
    return acc;
}


const pairsArray = []

const pair = function(name, level) {
  var pairObjects = {};

  pairObjects.name = name;
  pairObjects.level = level || 0;
  
  pairsArray.push(pairObjects);
  
  console.log(pairObjects);
  
  return pairObjects; 
}

const checkPair = function(name, level) {
  pairsArray.forEach(function(onePair){
    console.log(onePair)
    if (onePair.name === name) {
      alert('wrong entry!');
      throw console.error("this name is already registed in Database, skip this add please");
    }
    return 'Thank you!'
  });
  
}