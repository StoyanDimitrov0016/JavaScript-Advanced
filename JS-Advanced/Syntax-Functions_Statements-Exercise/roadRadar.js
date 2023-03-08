function speedCalculator(speed, areaType) {
    let status = '';

    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    if (speedLimits[areaType] >= speed) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[areaType]} zone`);
    } else {
        if (speed <= speedLimits[areaType] + 20) {
            status = 'speeding';
        } else if (speed <= speedLimits[areaType] + 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${speed - speedLimits[areaType]} km/h faster than the allowed speed of ${speedLimits[areaType]} - ${status}`);
    }
}
speedCalculator(40, 'city');
speedCalculator(21, 'residential');
speedCalculator(120, 'interstate');
speedCalculator(200, 'motorway');