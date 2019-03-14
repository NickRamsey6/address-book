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
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + " " + this.state;
}

//User Interface Logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class = "new-address">' +
                                    '<div class="form-group">' +
                                      '<label for="new-street">Street</label>' +
                                      '<input type="text" class="form-control new-street">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                      '<label for="new-city">City</label>' +
                                      '<input type="text" class="form-control new-city">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                      '<label for="new-state">State</label>' +
                                      '<input type="text" class="form-control new-state">' +
                                    '</div>' +
                                  '</div>' +
                                '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });

   $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fulName() + "</span></li>");

   $(".contact").last().click(function() {
     $("#show-contact").show();
     $("show-contact h2").text(newContact.firstName);
     $(".first-name").text(newContact.lastName);
     $(".last-name").text(newContact.lastName);
     $("ul#addresses").text("");
     newContact.addresses.forEach(function(address) {
       $("ul#address").append("<li>" + address.fullAddress() + "</li>");
     })
   });

   $("input#new-first-name").val("");
   $("input#new-last-name").val("");
   $("input.new-street").val("");
   $("input.new-state").val("");
 });
});
