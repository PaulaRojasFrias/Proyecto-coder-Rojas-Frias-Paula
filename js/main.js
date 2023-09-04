class Requests {
  constructor(nombre, apellido , email, numeroTelefono, tattooDescription, placement, approximateSize, dates) {
    this.nombre = nombre;
    this.apellido  = apellido ;
    this.email = email;
    this.numeroTelefono =numeroTelefono ;
    this.tattooDescription = tattooDescription;
    this.placement = placement;
    this. approximateSize =  approximateSize;
    this.dates = dates;
  }
}

//--------------AL COMIENZO DESCOMENTAR 
// const appointmentsRequests = [];
// localStorage.setItem("appointmentsRequests", JSON.stringify(appointmentsRequests));


let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  let nombre=inputs[1].value;
  let apellido=inputs[3].value;
  let email= inputs[6].value;
  let numeroTelefono= inputs[8].value;
  let tattooDescription = inputs[10].value;
  let placement = inputs[14].value;
  let approximateSize= inputs[16].value;
  let dates= inputs[19].value;

  let infoSolicitudes = localStorage.getItem("appointmentsRequests");
  let solicitudes = JSON.parse(infoSolicitudes);

  solicitudes.push(new Requests(nombre, apellido, email, numeroTelefono, tattooDescription, placement, approximateSize,dates ));

  localStorage.setItem("appointmentsRequests", JSON.stringify(solicitudes));

});
