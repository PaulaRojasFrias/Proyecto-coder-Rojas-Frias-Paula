
const botonn = document.getElementById("boton");

let contenedor = document.getElementById("contenedor");

const renderizado = (solicitudes) => {
    contenedor.innerHTML = "";
  
    solicitudes.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Request ${solicitudes.indexOf(item)+1}</h2>
        <p>Name: ${item.nombre}</p>
        <p>Last name: ${item.apellido}</p>
        <p>Email: ${item.email}</p>
        <p>Phone number: ${item.numeroTelefono}</p>
        <p>Tattoo description: ${item.tattooDescription}</p>
        <p>Placement: ${item.placement}</p>
        <p>Approximate size: ${item.approximateSize}</p>
        <p>Dates available: ${item.dates}</p>
      `;
  
       contenedor.append(div);
    });
};

  boton.onclick = () => {
    let infoSolicitudes = localStorage.getItem("appointmentsRequests");
    let solicitudes = JSON.parse(infoSolicitudes);
    renderizado(solicitudes);
  };