new Vue({
    el: '#app',
    data: {
        text: 'Wala pang laman hehe',
        categories: []
    },
    methods: {
        getCategories: function() {
            var vue = this;
            response  = axios({
                method: 'get',
                url: 'https://developers.zomato.com/api/v2.1/categories',
                headers: {
                    'user-key': '1e80753a90af89a2064a61e97e335b86'
                }
            }).then(function (response) {
                vue.categories = response.data.categories;
            });
        },
    }
});
