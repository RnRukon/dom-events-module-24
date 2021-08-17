function deliveryCost(value) {



    if (value <= 100) {
        let firstShirtShippinUnder_100 = value * 100;
        return firstShirtShippinUnder_100;
    }
    else if (value <= 200) {
        let firstShirtShippinUnder_100 = 100 * 100;
        let restOfShirtPice = value - 100;
        let secondShippingPice = restOfShirtPice * 80;
        let secondShirtShippingUnder_200 = firstShirtShippinUnder_100 + secondShippingPice;

        return secondShirtShippingUnder_200;

    }
    else {
        const firstShirtShippinUnder_100 = 100 * 100;
        const secondShirtShippingUnder_200 = 80 * 100;
        const restOfShirtPice = value - 200;
        const thirdShippingPice = restOfShirtPice * 50;
        const thirdShirtShippingOutOf_200 = firstShirtShippinUnder_100 + secondShirtShippingUnder_200 + thirdShippingPice;
        return thirdShirtShippingOutOf_200;
    }

}






let shirtNumber = 101;
let totalCost = deliveryCost(shirtNumber);
console.log(totalCost);