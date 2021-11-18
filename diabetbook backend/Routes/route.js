const {router} = require("express")
const router = Router();
const controllerBook = require("../controllers/controllerBook")


//creacion de las API y añadimos la rutas desde controllers


router.get("/book", controllerBook.book_get)
router.post("/create-book", controllerBook.book_post)
router.delete("/book/:id", controllerBook.book_delete)


module.exports = router