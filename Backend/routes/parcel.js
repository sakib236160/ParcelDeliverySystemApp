const express = require("express");
const router = express.Router();
const { createParcel, getAllParcels, updateParcel, getOneParcel, getUsersParcel, deleteParcel } = require("../controllers/parcel");

// ADD PARCEL
router.post("/", createParcel)

// GETALL PARCEL

router.get("/", getAllParcels)

// UPDATE PARCEL

router.put("/:id", updateParcel)

// GET ONE PERSEL

router.get("/find/:id", getOneParcel)

// GET USER PERCEL

router.post("/me", getUsersParcel)

// DELETE PERCEL

router.delete("/:id", deleteParcel)

module.exports = router;