document.addEventListener("submit", (e) => {
    e.preventDefault();

    let oferta = [
        {
            "tipo": "estudiante",
            "oferta": 80
        },
        {
            "tipo": "trainee",
            "oferta": 50
        },
        {
            "tipo": "junior",
            "oferta": 15
        }
    ];

    let descuento;
    let cantidad = parseInt(e.target.cantidad.value);

    oferta.forEach(est => {
        if (est.tipo == e.target.categoria.value) { return descuento = est.oferta }
    });

    let precioConDescuento = cantidad*(200-(200 * descuento / 100));
    document.getElementById("pagar").textContent = "Total a pagar: $" + precioConDescuento;


})

