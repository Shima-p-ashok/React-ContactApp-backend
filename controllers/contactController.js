const Contact = require('../model/contactModel')

// Add Contact
exports.createContact = async (req, res) => {
  console.log("Inside createContact controller");
  const { name, email, phone, favorite } = req.body;

  try {
    // Check if email already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json("Contact with this email already exists...");
    }

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      phone,
      favorite: favorite || false,
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json("Error: " + err.message);
  }
};

// Get All Contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json("Error: " + err.message);
  }
};

// Get Contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json("Contact not found");
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json("Error: " + err.message);
  }
};

// Update Contact
exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedContact) return res.status(404).json("Contact not found");
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(500).json("Error: " + err.message);
  }
};

// Delete Contact
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json("Contact not found");
    res.status(200).json("Contact deleted successfully");
  } catch (err) {
    res.status(500).json("Error: " + err.message);
  }
};
