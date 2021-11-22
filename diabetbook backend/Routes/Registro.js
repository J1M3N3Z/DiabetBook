const router = express.Router();
const controllerRegistro = require("../controllers/controllerRegistro")
const auth = require("../middlewares/Authentication");

//creacion de las API y añadimos la rutas desde controllers

router.get("/get-book",[auth.ensureAuth], controllerRegistro.book_get)
router.post("/create-book", controllerRegistro.book_post)
router.delete("/delete-book/:id",[auth.ensureAuth], controllerRegistro.book_delete)
router.put("/update-book/:id", [auth.ensureAuth], controllerRegistro.book_update)


module.exports = router