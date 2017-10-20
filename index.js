function produceDrivingRange(distanceLimit){

  return function withinRange(a, b){
    let distance = Math.abs(a.replace(/\D/g,'') - b.replace(/\D/g,''));
    if(distance <= distanceLimit ? true : false){
      return `within range by ${distanceLimit - distance}`;
    }else{
      return `${distance - distanceLimit} blocks out of range`;
    };
  }

}

function produceTipCalculator(tip){

  return function calulator(amount){
    return tip * amount;
  }

}

function createDriver(){
  let driverId = 0;
  return class Driver {
    constructor(name){
      this.name = name;
      this.id = ++driverId
    }
  }
}
