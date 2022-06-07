import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  //MFunction Definition
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  //Main Return
  return <div className="ui celled list">{renderContactList}</div>;
};
export default ContactList;
