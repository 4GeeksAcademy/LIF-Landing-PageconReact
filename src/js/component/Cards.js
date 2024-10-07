import React from 'react'

const Cards = () => {
  let infoProducto = [
    { title: "Bordeadora Hiunday", description: "Eléctrica. Diámetro de corte 30 cm, con lentes y escobilla de regalo.", bootomTitle: "Compralo Ya!" },
    { title: "Desmalezadora Trakete", description: "Nafta. Lamejor de corte 50 cm, incluye 10 metros de tanza y obsequio sorpresa", bootomTitle: "Animate a comprarlo!" },
    { title: "Cortadora de pasto eléctrica", description: "Black+Decker GR3800 con bolsa recolectora de 1600W y 220V color naranja/negro", bootomTitle: "Lo querés? Compralo!" },
    { title: "Robot Cortacesped", description: "Husqvarna Automower Am105, aplicación IOS y Androdi. Atonmía 8 horas con cargador rápido", bootomTitle: "Tenes que comprarlo!" }
  ];

  return (
    <div className="container">
      <div className="row">
        {infoProducto.map((value, index, array) => {

          return (
            <div className="col">

              <div className="card" style={{ "width": "18rem", minHeigth: "40rem" }}>
                <img src="https://picsum.photos/320/500" className="card-img-top" alt="..." />
                <div className="card-body container text-center py-5">

                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text mb-5">{value.description}</p>
                  <a href="#" className="btn btn-primary">{value.bootomTitle}</a>
                </div>
              </div>
            </div>
          )


        })}
      </div>
    </div>

  )
}

export default Cards