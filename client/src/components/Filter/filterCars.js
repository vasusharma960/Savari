export default function filterCars(cars, bookings, from, to) {
    if (bookings.length > 0) {
        cars = cars.filter((car) => {
            let counter = true;
            for (let i = 0; i < bookings.length; i++) {
                
                const bfrom = Date.parse(bookings[i].from);
                const bto = Date.parse(bookings[i].to);
                
                if (bookings[i].car_id === car._id) {
                    counter = false;
                    if ((from < bfrom && from < bto && to < bfrom && to < bto)
                        || (from > bfrom && from > bto && to > bfrom && to > bto)) {
                        counter = true;
                    }
                }
            }

            if (counter) {
                return car;
            }
        });
    } 

    return cars;
}