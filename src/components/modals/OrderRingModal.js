import React, { Component } from "react";

class OrderRingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      street: "",
      city: "",
      message: "",
    };
    this.nameRef = React.createRef();
    this.lastnameRef = React.createRef();
    this.streetRef = React.createRef();
    this.cityRef = React.createRef();
  }

  async submitOrderHandler() {
    let userInfo = {
      name: this.state.name,
      lastname: this.state.lastname,
      street: this.state.street,
      city: this.state.city,
    };
    let order = this.props.order
      ? {
          profile: this.props.order.profile,
          color: this.props.order.color,
          color2:
            this.props.order.alocation === "bi-1"
              ? this.props.order.color2
              : null,
          measure: this.props.order.measure,
          size: this.props.order.size,
          surface: this.props.order.surface,
          surface2:
            this.props.order.alocation === "bi-1"
              ? this.props.order.surface2
              : null,
          seam: this.props.order.seam,
          alocation: this.props.order.alocation,
        }
      : null;
    let response = "";
    try {
      response = await fetch(
        "https://ring-design-generator-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            customer: userInfo,
            order: order,
          }),
        }
      );
      if (response.status === 200 || response.status === 204) {
        this.setState({
          ...this.state,
          message: "Uspešno ste poručili prsten.",
        });
      } else {
        this.setState({ ...this.state, message: "Došlo je do greške." });
      }
    } catch {
      this.setState({ ...this.state, message: "Došlo je do greške." });
    }
  }

  render() {
    return (
      <div className="order-ring-modal-container">
        <div className="stone-container">{this.props.stoneImg}</div>
        <div className="img-container">{this.props.ringImg}</div>
        <div className="form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(this.nameRef.current.value);
              if (
                this.nameRef.current.value.length > 2 &&
                this.lastnameRef.current.value.length > 2 &&
                this.streetRef.current.value.length > 2 &&
                this.cityRef.current.value.length > 2
              ) {
                this.submitOrderHandler();
                this.setState({
                  ...this.state,
                  name: "",
                  lastname: "",
                  street: "",
                  city: "",
                });
              } else {
                this.setState({
                  ...this.state,
                  message: "Polja moraju imati više od 2 karaktera.",
                });
              }
            }}
          >
            <label htmlFor="fname">Ime:</label>
            <input
              ref={this.nameRef}
              type="text"
              id="fname"
              name="fname"
              value={this.state.name}
              onChange={(e) =>
                this.setState({ ...this.state, name: e.target.value })
              }
            />
            <label htmlFor="lname">Prezime:</label>
            <input
              ref={this.lastnameRef}
              type="text"
              id="lname"
              name="lname"
              value={this.state.lastname}
              onChange={(e) =>
                this.setState({ ...this.state, lastname: e.target.value })
              }
            />
            <label htmlFor="street">Ulica i broj:</label>
            <input
              ref={this.streetRef}
              type="text"
              id="street"
              name="street"
              value={this.state.street}
              onChange={(e) =>
                this.setState({ ...this.state, street: e.target.value })
              }
            />
            <label htmlFor="city">Grad:</label>
            <input
              ref={this.cityRef}
              type="text"
              id="city"
              name="city"
              value={this.state.city}
              onChange={(e) =>
                this.setState({ ...this.state, city: e.target.value })
              }
            />
            <input className="submit-btn" type="submit" value="Potvrdi" />
            <span className="form-message">{this.state.message}</span>
          </form>
        </div>
      </div>
    );
  }
}

export default OrderRingModal;
