import {getApiData} from "./js/helpers.js"
import "./js/main.js"

(function main() {
    // fetch Element
    const searchBar = document.querySelector('search-bar');
    const search = searchBar.lastElementChild;
    const searchResult = document.querySelector('search-result');
    const footerText = document.querySelector('#footer-text');

    // static setValue
    footerText.innerText = `\xA9yulyanes ${new Date().getFullYear()}`;

    if ($(window).width() < 400 ) {
        search.placeholder  = "Type a country here...";
    }
    else {
        search.placeholder  = "Type a country here. Press 'enter' to search...";
    }

    //ael
    search.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {

            if (search.value.length === 0) {
                alert("Input must be at least 1 character.");
                search.value = "";
                return;
            }

            const letters = /[a-zA-Z][a-zA-Z ]+/;
            if (!search.value.match(letters)) {
                alert("Input must consist of alphabets only.");
                search.value = "";
                return;
            }

            let country = search.value;
            const url = `https://covid19.mathdro.id/api/countries/${country}`;
            getApiData(country, url, searchResult);
            search.value = "";
        }
    });
})();
