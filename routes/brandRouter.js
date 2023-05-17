const Router = require("express")
const brandContoller=require("../controllers/brandController")
const router = new Router();

router.post("/",brandContoller.create)
router.get("/",brandContoller.getAll)



module.exports=router