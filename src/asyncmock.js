const misProductos = [
    { id: 1, nombre: "Aventura", precio: 9300, img: "./img/Gravel/Aventura.jpg" },
    { id: 2, nombre: "Grail", precio: 7200, img: "./img/Gravel/Grail.jpg" },
    { id: 3, nombre: "Spectral", precio: 8500, img: "./img/Montaña/Spectral.jpg" },
    { id: 4, nombre: "Grand", precio: 1500, img: "./img/Montaña/Grand.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}