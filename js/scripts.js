// Business Logic for AddressBook
function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//User Interface Logic
$(document).ready(function() {
  $("form#addresses").submit(function(event) {
    event.preventDefault();
    var firstName = ($("input#firstName").val());
    var lastName = ($("input#lastName").val());
    var phoneNumber = ($("input#phoneNumber").val());
  });
});
