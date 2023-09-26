const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/userController.js");
const AdminController = require("../controllers/adminController.js");
const CartController = require("../controllers/cartController.js");
const categoryController = require("../controllers/categoryController.js");
const customerController = require("../controllers/customerController.js");
const order_itemController = require("../controllers/order_itemController.js");
const orderController = require("../controllers/orderController.js");
const paymentController = require("../controllers/paymentController.js");
const postController = require("../controllers/postController.js");
const shipmentController = require("../controllers/shipmentController.js");
const subAdminController = require("../controllers/subAdminController.js");
const userController = require("../controllers/userController.js");
const wishlistController = require("../controllers/wishlistController.js");

//Product Create Read Delete Update
router.post("/CreateProduct", ProductController.create);
router.get("/ReadProduct", ProductController.read);
router.get("/DeleteProduct/:id", ProductController.delete);
router.post("/UpdateProduct/:id", ProductController.update);

//Admin Create Read Delete Update
router.post("/CreateAdmin", AdminController.create);
router.get("/ReadAdmin", AdminController.read);
router.get("/DeleteAdmin/:id", AdminController.delete);
router.post("/UpdateAdmin/:id", AdminController.update);

//Cart Create Read Delete Update
router.post("/CreateCart", CartController.create);
router.get("/ReadCart", CartController.read);
router.get("/DeleteCart/:id", CartController.delete);
router.post("/UpdateCart/:id", CartController.update);

//Category Create Read Delete Update
router.post("/CreateCategory", categoryController.create);
router.get("/ReadCategory", categoryController.read);
router.get("/DeleteCategory/:id", categoryController.delete);
router.post("/UpdateCategory/:id", categoryController.update);

//Customer Create Read Delete Update
router.post("/CreateCustomer", customerController.create);
router.get("/ReadCustomer", customerController.read);
router.get("/DeleteCustomer/:id", customerController.delete);
router.post("/UpdateCustomer/:id", customerController.update);

//Order_item Create Read Delete Update
router.post("/CreateOrder_item", order_itemController.create);
router.get("/ReadOrder_item", order_itemController.read);
router.get("/DeleteOrder_item/:id", order_itemController.delete);
router.post("/UpdateOrder_item/:id", order_itemController.update);

//Order Create Read Delete Update
router.post("/CreateOrder", orderController.create);
router.get("/ReadOrder", orderController.read);
router.get("/DeleteOrder/:id", orderController.delete);
router.post("/UpdateOrder/:id", orderController.update);

//Payment Create Read Delete Update
router.post("/CreatePayment", paymentController.create);
router.get("/ReadPayment", paymentController.read);
router.get("/DeletePayment/:id", paymentController.delete);
router.post("/UpdatePayment/:id", paymentController.update);

//Post Create Read Delete Update
router.post("/CreatePost", postController.create);
router.get("/ReadPost", postController.read);
router.get("/DeletePost/:id", postController.delete);
router.post("/UpdatePost/:id", postController.update);

//Shipment Create Read Delete Update
router.post("/CreateShipment", shipmentController.create);
router.get("/ReadShipment", shipmentController.read);
router.get("/DeleteShipment/:id", shipmentController.delete);
router.post("/UpdateShipment/:id", shipmentController.update);

//SubAdmin Create Read Delete Update
router.post("/CreateSubAdmin", subAdminController.create);
router.get("/ReadSubAdmin", subAdminController.read);
router.get("/DeleteSubAdmin/:id", subAdminController.delete);
router.post("/UpdateSubAdmin/:id", subAdminController.update);

//User Create Read Delete Update
router.post("/CreateUser", userController.create);
router.get("/ReadUser", userController.read);
router.get("/DeleteUser/:id", userController.delete);
router.post("/UpdateUser/:id", userController.update);

//Wishlist Create Read Delete Update
router.post("/CreateWishlist", wishlistController.create);
router.get("/ReadWishlist", wishlistController.read);
router.get("/DeleteWishlist/:id", wishlistController.delete);
router.post("/UpdateWishlist/:id", wishlistController.update);

module.exports = router;
