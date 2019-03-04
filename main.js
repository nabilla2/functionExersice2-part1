(function(){
    //initial positions and direction
    let position = 0;
    let direction = "right";

    //moveForward:takes a distance parameter.
    //Move the character forward
    //(based on the direction they are facing) 
    //the specified distance.
    //the specified distance is the argument where the function is being called at the very bottom
    function moveForward(distance) {
        if (direction === "right") {
            position = position + distance;
        } else if (direction === "left") {
            position = position - distance;
        }
        console.log(`${position} to the ${direction}`);
    }

    //moveBackward:takes a distance parameter.
    //Move the character backward
    //(basedon the direction they are facing) t
    //he specified distance.
    //the specified distance is the argument where the function is being called at the very bottom
    function moveBackward(distance) {
        if (direction === "right") {
            position = position - distance;
        } else if (direction === "left") {
            position = position + distance;
        }
        console.log(`${position} to the ${direction}`);
    }

    //turnAround:reverse the direction the character is facing.
    function turnAround() {
        if (direction === "right") {
            direction = "left";
        }
        else if (direction === "left") {
            direction = "right";
        }
    }

    //printLocation:logs the current position to the console.
    function printLocation() {
        console.log(`you are at this postiosn ${position}`);
    }

    moveForward(5);
    moveBackward(3);
    printLocation();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();
})();