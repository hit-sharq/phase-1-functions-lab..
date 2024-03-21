// Code your solution in this file!
function  distanceFromHqInBlocks(pickup){
    const hq = 42;
    let distance;
    hq < pickup ? (distance = pickup - hq) : (distance = hq - pickup)
    return distance
}
function distanceFromHqInFeet(pickup) {
    const distanceInBlocks = distanceFromHqInBlocks(pickup);
    return distanceInBlocks * 264;
}
function distanceTravelledInFeet(start, destination) {
    let distance;
    start < destination? (distance = destination - start): (distance = start - destination);n
    return distance * 264
}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0;
    }else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        let distance = distanceInFeet - 400;
        const price = (distance * 2) / 100;
        return price;
    }else if (distanceInFeet > 2000 && distanceInFeet <=2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}








