const router = express.Router();
const controllerAuth = require("../controllers/authController");

router.post("/refresh-access-token", controllerAuth.refreshAccessToken);

module.exports = router;