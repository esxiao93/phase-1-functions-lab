//Write a function: distanceFromHqInBlocks()
  //1) takes in pickup location for passenger
  //2) returns the number of blocks from HQ on 42
function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42;
  } else {
    return 42 - location;
  }
}
































/*
function distanceFromHqInBlocks(block) {
    if(block > 42){
        return block - 42;
    } else {
        return 42 - block;
    }
  }

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block)*264;
}

function distanceTravelledInFeet(origin, destination){
    if(origin < destination){
      return (destination - origin)*264;
    } else {
      return (origin - destination)*264;
    }
  }

function calculatesFarePrice(origin, destination){
    let distance = distanceTravelledInFeet(origin, destination)
    if(distance <= 400){
      return 0;
    } else if (distance > 400 && distance <= 2000){
      return .02*(distance-400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  */