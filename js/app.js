new Vue({
    el: '#app',
    data: {
        keyword: '',
        city_api: 'https://developers.zomato.com/api/v2.1/locations?query=',
        collections_api: 'https://developers.zomato.com/api/v2.1/search?',
        city: null,
        collections: [],
        restaurants: [],
    },
    methods: {
        searchCity: function() {
            var vue = this;
            var getCity  = axios({
                method: 'get',
                url: this.city_api + vue.keyword,
                headers: {
                    'user-key': '1e80753a90af89a2064a61e97e335b86'
                }
            }).then(function (response) {
                var city = response.data.location_suggestions[0];
                console.log(city);
                return axios({
                    method: 'get',
                    url: vue.collections_api + 'entity_type=' + city.entity_type + '&entity_id=' + city.entity_id,
                    headers: {
                        'user-key': '1e80753a90af89a2064a61e97e335b86'
                    },
                });
            })
            .then(function (response) {
                console.log(response.data.restaurants);
                vue.restaurants = response.data.restaurants;
            });
        },
    }
});
