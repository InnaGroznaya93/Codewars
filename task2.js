function recycle(array) {

  
    let paper = [];
    let glass = [];
    let organic = [];
    let plastic = [];
    for(let i = 0; i < array.length; i++) {
      
      
      if(array[i].material === 'paper' || array[i].secondMaterial === 'paper')
        paper.push(array[i].type)
      if(array[i].material === 'glass' || array[i].secondMaterial === 'glass')
        glass.push(array[i].type)
      if(array[i].material === 'organic' || array[i].secondMaterial === 'organic')
        organic.push(array[i].type)
      if(array[i].material === 'plastic' || array[i].secondMaterial === 'plastic')
        plastic.push(array[i].type)
    }
    
    return [paper, glass, organic, plastic];  
  
  }
  
  