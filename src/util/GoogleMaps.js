const url = "https://www.google.com/maps/search/?api=1"
export const GoogleMaps = {
    createQuery (address,zipCode,city) {
        return encodeURI(`${url}&query=${address}+${zipCode}+${city}`);
    }
}