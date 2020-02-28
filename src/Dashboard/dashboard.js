import React, { Component } from "react";
import Modal from "./../components/modal/modal";
import Alert from "./../components/alert/alert";
import Button from "./../components/button/button";
import Select from "./../components/select/select";
import Input from "./../components/input/input";
import './dashboard.scss';

class Dashboard extends Component {
  state = { 
    show: false,
    comunas: []
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/gonzalo-bulnes/chilean_cities/master/data/comunas.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ comunas: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <main>
        <div className="banner">
          <div className="banner__components">
            <h1>Consolida tus deudas</h1>
            <p>Tenemos una oferta Pre-Aprobada de hasta:</p>
            <h2>$X.XXX.XXX</h2>
            <p>Para consolidar tus deudas, <b>bajando tu carga mensual hasta un 30%,</b> con Tarjetas de Crédito, Líneas de Crédito y/o Créditos Comerciales.</p>
            <Alert text={'Para acceder a esta oferta debes abonar $ XX.XXX a tu deuda de corto plazo, hazlo desde tu sitio privado Santander, tarjetas de otros bancos o en sucursales.'} />
          </div>
          <div className="banner__img">
          </div>
        </div>

        {/* footer */}
        <div className="footer">
          <p>Si ya realizaste tu abono, solicita tu oferta ahora:</p>
          <Button
            text="SOLICICTAR"
            action={this.showModal}
            />
          <Button 
            text="¡Lo quiero! llámenme"
            />
        </div>

        {/* Modal */}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
          <Input
            name="nombre"
            placeholder="Nombre"
          />
          <Select comunas={this.state.comunas} />
          <Input
            name="email"
            placeholder="Email"
          />
          <Alert 
            text={'La aprobación y condiciones definidas en esta campaña se encuentran condicionadas a la solicitud del cliente y al resultado de la evaluación comercial, conforme a las políticas del Banco.'} 
          />
        </Modal>
      </main>
    );
  }
}

export default Dashboard;