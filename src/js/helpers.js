export const getApiData = (country, url, el) => {
    el.renderLoading();
    fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                el.renderFailed();
                return;
            }

            response
                .json()
                .then(response => {
                    el.country = country;
                    el.lastUpdate = moment(response.lastUpdate).format('LLLL');
                    el.confirmed = numeral(response.confirmed.value).format();
                    el.recovered = numeral(response.recovered.value).format();
                    el.deaths = numeral(response.deaths.value).format();
                    el.renderSuccess();
                });
        })
        .catch(err =>   el.renderFailed(err));
};
