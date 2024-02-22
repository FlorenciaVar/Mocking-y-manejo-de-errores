{{>greetings}}

{{>categories}}

<div class="container mainContainer">
    <div class="row">
        {{#if products.payload}}
        {{#each products.payload}}
        <div class="col-12 col-md-6">
            <div class="card border-light mb-3 container artifactCard">
                <div class="row">
                    <div class="col-4 d-flex align-items-center justify-content-center">
                        <img src="{{this.thumbnails.[0]}}" class="img-fluid" alt="...">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h4 class="card-title itemName">{{this.title}}</h4>
                            <p class="card-text itemType">{{this.description}}</p>
                            <p class="card-text">Codigo: {{this.code}}</p>
                            <p class="card-text">Stock: {{this.stock}}</p>
                            <p class="card-text">Precio: {{this.price}} <img src="" alt="Cervezas" /></p>
                            <a class="btn btn-primary" href="/products/{{this._id}}" role="button">Ver Detalles</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{/each}}
        {{else}}
        <div class="col-12">
            <p>No se encontraron productos</p>
        </div>
        {{/if}}
    </div>
</div>