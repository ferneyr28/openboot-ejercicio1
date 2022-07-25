import React from "react";
import PropTypes from "prop-types";
import ContactComponent from "../pure/ContactComponent";
import { ContactModel } from "../../models/contact.class";

const ContactsComponent = () => {
    const contactDefault = new ContactModel("Ferney", "Rodriguez", "ferrodriguez.com@gmail.com", true);

  return (
    <div>
    <ContactComponent contact={contactDefault}></ContactComponent>
  </div>
  );
};

ContactsComponent.propTypes = {};

export default ContactsComponent;
