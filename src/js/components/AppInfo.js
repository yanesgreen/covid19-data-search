class AppInfo extends HTMLElement {
    // initial value
    connectedCallback() {
        this.name = this.getAttribute("name") || null;
        this.render();
    }

    //render
    render() {
        this.innerHTML = `
        <div class="modal fade" id="about-us" tabindex="-1" role="dialog" aria-labelledby="about-us" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <h4 class="text-center text-primary mb-0">About This App</h4>
                        <hr>
                        <p class="pb-3">Sebuah project sederhana untuk prasyarat kelulusan program pelatihan <span
                                class="text-danger">"Kelas Progress Aksi Belajar
                            Fundamental Front-End Web Development"</span> di Dicoding.
                        </p>
                        <hr class="mt-5">
                        <div class="d-flex justify-content-between align-items-baseline">
                            <small class="text-muted">Coded by: Yulyanes</small>
                            <small class="text-muted">API Source: https://covid19.mathdro.id/</small>
                        </div>
                    </div>
                    <div class="modal-close shadow" data-dismiss="modal">X</div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('app-info', AppInfo);
