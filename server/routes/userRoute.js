import express from "express";
import { cancelBooking, createUser, getAllFavourites, toFav } from "../controllers/userController.js";
import { bookVisit } from "../controllers/userController.js";
import { getAllBookings } from "../controllers/userController.js";    


const router = express.Router()

router.post("/register", createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBookings/:id",cancelBooking)
router.post("/toFav/:rid", toFav)
router.post("/allFav/", getAllFavourites)

export {router as userRoute}