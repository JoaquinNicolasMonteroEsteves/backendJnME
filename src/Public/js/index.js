const socket = io();

const hola_div = document.getElementById("hola_div")

socket.on("hola", data => {
    console.log(data);
    let content = ''
    data.productsDB.forEach(p => {
        content += `<p><b>ID:</b> ${p._id} / <b>Product name:</b> ${p.title}</p>
                    <ul>
                        <li>${p.description}</li>
                        <li>${p.stock}</li>
                    </ul>`
    })
    hola_div.innerHTML = content
})
