class SearchResult extends HTMLElement {
    set lastUpdate(value) {
        this._lastUpdate = value;
    }

    set country(value) {
        this._country = value;
    }

    set deaths(value) {
        this._deaths = value;
    }

    set recovered(value) {
        this._recovered = value;
    }

    set confirmed(value) {
        this._confirmed = value;
    }

    constructor(lastUpdate, country, confirmed, recovered, deaths) {
        super();
        this._lastUpdate = lastUpdate;
        this._country = country;
        this._confirmed = confirmed;
        this._recovered = recovered;
        this._deaths = deaths;
    }

    connectedCallback() {
        this.name = this.getAttribute("name") || null;
        this.renderDefault();
    }

    renderDefault() {
        this.innerHTML = `
        <div class="row">
            <div class="col-lg-8 offset-lg-2 d-none d-sm-block">
                <div class="mt-5">
                    <hr>
                    <p class="mb-0 text-secondary text-center fade-in-up">
                        <span class="badge badge-pill badge-success">INFO</span>
                        You can also click one of these links to get information regarding COVID-19.
                    </p>
                </div>
                <div class="op-0 mt-3 d-inline-block mx-2 d-flex justify-content-center align-items-center fade-in-up-delay-1">
                    <a class="btn btn-external btn-outline-primary rounded-full mx-2" 
                        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" 
                        rel="noopener"
                        target="_blank"
                        role="button">
                            WHO COVID-19
                    </a>
                    <a class="btn d-inline-block btn-external btn-outline-primary rounded-full mx-2" 
                        href="https://www.google.com/covid19/" 
                        rel="noopener"
                        target="_blank"
                        role="button">
                            Google COVID-19
                    </a>
                </div>
            </div>
        </div>
        `;
    }

    renderLoading() {
        this.innerHTML = `
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="mt-5 mb-1 d-flex justify-content-center align-items-center">
                    <p class="mb-0 text-secondary text-center">
                       loading....
                    </p>
                </div>
            </div>
        </div>
        `;
    }

    renderSuccess() {
        this.innerHTML = `
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="mt-5 mb-1 d-flex justify-content-center justify-content-sm-between align-items-center">
                    <h4 class="mb-0 text-secondary text-uppercase d-none d-sm-block">${this._country}</h4>
                    <span class="badge badge-pill badge-primary px-2 py-1">last update: ${this._lastUpdate}</span>
                </div>
                <hr class="mt-0">
                <div class="row">
                     <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card bg-primary border-primary card-raised">
                            <div class="card-body">
                                <p class="card-title text-white text-uppercase text-bold ls-wide">CONFIRMED</p>
                                <h3 class="card-text text-white">${this._confirmed}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card bg-success border-success card-raised">
                            <div class="card-body">
                                <p class="card-title text-white text-uppercase text-bold ls-wide">recovered</p>
                                <h3 class="card-text text-white">${this._recovered}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card bg-danger border-danger card-raised">
                            <div class="card-body">
                                <p class="card-title text-white text-uppercase text-bold ls-wide">DEATHS</p>
                                <h3 class="card-text text-white">${this._deaths}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    renderFailed(err) {
        if (err === undefined) {
            this.innerHTML = `
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="mt-5 mb-1 d-flex justify-content-center align-items-center">
                        <h4 class="mb-0 text-secondary text-center text-danger">
                            Sorry, we can't found what you're looking for.
                        </h4>
                    </div>
                </div>
            </div>
            `;
        } else {
            this.innerHTML = `
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="mt-5 mb-1">
                        <h4 class="mb-1 text-secondary text-center text-danger">
                            Sorry, something is wrong. Cannot connect to the server. 
                        </h4>
                        <p class="mb-0 text-muted text-center">
                            ${err}
                        </p>
                    </div>
                </div>
            </div>
            `;
        }

    }
}

customElements.define('search-result', SearchResult);
