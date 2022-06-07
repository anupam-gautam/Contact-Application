import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    set;
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import Information from "./practice/Information";
// import Display from "./practice/Display";

// function App() {
//   const details = [
//     {
//       name: "Pukar Adhikari",
//       email: "puskaradhikari@gmail.com",
//       address: "Samakhusi",
//       id: 34,
//     },
//     {
//       name: "Puskar Adhikari",
//       email: "puskaradhikari@gmail.com",
//       address: "Samakhusi",
//       id: 67,
//     },
//     {
//       name: "Raghav Sharma",
//       email: "puskaradhikari@gmail.com",
//       address: "Samakhusi",
//       id: 21,
//     },
//     {
//       name: "Anupam Gautam",
//       email: "anupam.gautam46@gmail.com",
//       address: "Dhapasi",
//       id: 54,
//     },
//     {
//       name: "Suaazine Amgain",
//       email: "puskaradhikari@gmail.com",
//       address: "Samakhusi",
//       id: 89,
//     },
//   ];

//   return (
//     <div className="ui container">
//       <Information info={details} />
//     </div>
//   );
// }

// export default App;
