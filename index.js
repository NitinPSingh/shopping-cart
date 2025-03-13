const prices = {
    Apple: 35,
    Banana: 20,
    Melon: 50,
    Lime: 15,
  };
  
  function calculateCartCost(basket) {
      
    const itemCount = basket.reduce((count, item) => {
      count[item] = (count[item] || 0) + 1;
      return count;
    }, {});
  
    let totalCost = 0;
  //   console.log(Object.entries(itemCount))
    
    for (const [item, count] of Object.entries(itemCount)) {
      switch (item) {
        case 'Apple':
        case 'Banana':
          totalCost += prices[item] * count
          break;
        case 'Melon':
          totalCost += prices[item] * Math.ceil(count / 2)
          break;
        case 'Lime':
          totalCost += prices[item] * (count - Math.floor(count / 3))
          break;
        default:
          console.log(`${item} not found`);
      }
    }
  
    return totalCost;
  }
  
  
  const basket = ['Apple', 'Apple','Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
  const totalCost = calculateCartCost(basket);
  console.log(`Total cost: ${(totalCost).toFixed(2)} p`);
