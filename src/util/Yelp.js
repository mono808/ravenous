const apiKey = "3YszbDcH_ZOnlrRmlhVMziMYr3GLww4cdTE1seiVhVIDmC1t3imlbOAq-j2VpCoHMaF28ir5Ero0IIPSkdh_WdqH5ubXW2xl4d5WO3x-TsEu148bk5KqyW7a93Q8XnYx";
export const Yelp = {
    search: function (term,location,sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        )
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        url: business.url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        categories: business.categories,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                })
            }
        })
    }
};
