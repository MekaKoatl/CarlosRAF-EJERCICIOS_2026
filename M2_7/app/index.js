const url = "http://localhost:3000";

function registrarCliente() {
  fetch(`${url}/api/clientes/registrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      numdoc: document.getElementById("numdoc").value,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      document.getElementById("msg-cliente").textContent = data.message;
      document.getElementById("nombre").value = "";
      document.getElementById("apellido").value = "";
      document.getElementById("numdoc").value = "";
      getClientes();
    });
}

function getClientes() {
  fetch(`${url}/api/clientes`)
    .then((r) => r.json())
    .then((data) => {
      const clientes = data.data || [];
      document.getElementById("lista-clientes").innerHTML = clientes.length
        ? clientes
            .map(
              (c) =>
                `<div class="card">${c.nombre} ${c.apellido} — ${c.numdoc} - <button onclick="eliminarCliente('${c.numdoc}')">Eliminar Cliente</button></div>`,
            )
            .join("")
        : "<p>No hay clientes.</p>";
    });
}

function eliminarCliente(numdoc) {
  fetch(`${url}/api/clientes/eliminar`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ numdoc }),
  })
  .then((c) => c.json())
  .then(() => getClientes());
}

function getHabitaciones() {
  fetch(`${url}/api/habitaciones`)
    .then((r) => r.json())
    .then((data) => {
      const habs = data.data || [];
      document.getElementById("lista-habitaciones").innerHTML = habs.length
        ? habs
            .map(
              (h) => `<div class="card">
              Hab. ${h.roomnum} — <span class="${h.estado}">${h.estado}</span>
              ${h.estado === "ocupado" ? `<button onclick="checkout(${h.roomnum})">Checkout</button>` : ""}
            </div>`,
            )
            .join("")
        : "<p>No hay habitaciones.</p>";
    });
}

function checkout(roomnum) {
  fetch(`${url}/api/habitaciones/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roomnum }),
  })
    .then((r) => r.json())
    .then(() => getHabitaciones());
}

function getReservas() {
  fetch(`${url}/api/reservas`)
    .then((r) => r.json())
    .then((data) => {
      const reservas = data.data || [];
      document.getElementById("lista-reservas").innerHTML = reservas.length
        ? reservas
            .map(
              (r) => `<div class="card">
              ${r.client} — Hab. ${r.habitacion} | Check-in: ${r.checkin} | Check-out: ${r.checkout}
            </div>`,
            )
            .join("")
        : "<p>No hay reservas.</p>";
    });
}

getClientes();
getHabitaciones();
getReservas();
