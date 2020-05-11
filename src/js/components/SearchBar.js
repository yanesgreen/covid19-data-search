class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <label for="search-input" class="sr-only sr-only-focusable" href="#content">Skip to main content</label>
        <input type="text"
        id="search-input"            
        class="form-control p-4 rounded-full shadow-sm"
        autofocus>
        `;
    }
}

customElements.define('search-bar', SearchBar);
