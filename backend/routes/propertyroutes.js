const express = require('express');
const router = express.Router();
const Property = require('../models/property');

// @route   POST /property/add
// @desc    Add a new property
router.post('/add', async (req, res) => {
  try {
    const { ownerId, title, address, description, cost, contact } = req.body;

    if (!ownerId || !title || !address || !description || !cost || !contact) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const property = new Property({
      ownerId,
      title,
      address,
      description,
      cost,
      contact
    });

    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.error("Add property error:", error);
    res.status(500).json({ message: 'Failed to add property', error });
  }
});

// @route   GET /property/all
// @desc    Get all properties (for renters)
router.get('/all', async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error("Fetch all properties error:", error);
    res.status(500).json({ message: 'Failed to fetch properties', error });
  }
});

// @route   GET /property/owner/:id
// @desc    Get properties by owner ID
router.get('/owner/:id', async (req, res) => {
  try {
    const properties = await Property.find({ ownerId: req.params.id });
    res.status(200).json(properties);
  } catch (error) {
    console.error("Fetch owner properties error:", error);
    res.status(500).json({ message: 'Failed to fetch owner properties', error });
  }
});

// @route   DELETE /property/:id
// @desc    Delete a property by ID
router.delete('/:id', async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error("Delete property error:", error);
    res.status(500).json({ message: 'Failed to delete property', error });
  }
});

// @route   PUT /property/:id
// @desc    Update a property by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error("Update property error:", error);
    res.status(500).json({ message: 'Failed to update property', error });
  }
});

module.exports = router;
