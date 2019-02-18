(function(){
    let position = 0;
    let direction = "right";

    function moveForward(distance) {
        if (direction === "right") {
            position = position + distance;
        } else if (direction === "left") {
            position = position - distance;
        }
        console.log(`${position} to the ${direction}`);
    }

    function moveBackward(distance) {
        if (direction === "right") {
            position = position - distance;
        } else if (direction === "left") {
            position = position + distance;
        }
        console.log(`${position} to the ${direction}`);
    }

    function turnAround() {
        if (direction === "right") {
            direction = "left";
        }
        else if (direction === "left") {
            direction = "right";
        }
    }

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