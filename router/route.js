// backend/routes/contactRoutes.js
const express = require('express')
const contactController = require('../controllers/contactController')

const router = express.Router()

// Routes
router.post('/api/addContact', contactController.createContact)        // Create contact
router.get('/api/getContact', contactController.getContacts)           // Get all contacts
router.get('/api/getContact/:id', contactController.getContactById)
router.put('/api/updateContact/:id', contactController.updateContact)
router.delete('/api/deleteContact/:id', contactController.deleteContact)

module.exports = router
