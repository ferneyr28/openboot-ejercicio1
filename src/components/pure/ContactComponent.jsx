import React from "react";
import PropTypes from "prop-types";
import { ContactModel } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
    console.log(contact)
  return (
    <div>
        <h1>Datos contacto</h1>
        <p>
            Nombre: {contact.nombre}
            <br/>
            Apellido: {contact.apellido}
            <br/>
            Correo: {contact.email}
            <br/>
            { contact.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
        </p>
    </div>
);
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(ContactModel),
};

export default ContactComponent;
