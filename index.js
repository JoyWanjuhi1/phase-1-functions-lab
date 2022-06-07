// Code your solution in this file!
function distanceFromHqInBlocks(meters) {
    if (meters>42 ) {
        return meters-42;

    }
    else {
        return 42-meters;
    }


}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) *264;

    return distanceFromHqInFeet('43');

}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    if(destination>start){
        return (destination-start)*264;
    }
        else {
            return (start-destination)*264;

        }
    }
    function calculatesFarePrice(start, destination) {
        //returns the fare for the customer

        if(destination-start <=400){
            return 0;

        }
            else if (distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<2000){
                return (distanceTravelledInFeet(start, destination)- 400)*0.02+2.56
            }
            else if (distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<=2500){
                return 25+25
            }
            else if (distanceTravelledInFeet(start, destination)>2500){
                 return 'cannot travel that far'
            }
            }

        

