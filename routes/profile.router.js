const express = require('express');
const passport = require('passport');
const { checkRoles } = require('./../middlewares/auth.handler');
const CustomerService = require('./../services/customers.service');
const OrderService = require('../services/order.service');

const router = express.Router();
const service = new OrderService();
const profileService = new CustomerService();

router.get('/my-orders',
passport.authenticate('jwt', { session: false }),
checkRoles('admin', 'seller', 'customer'),
  async (req, res, next) => {
    try {
      const user = req.user;
      const orders = await service.findByUser(user.sub);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/my-profile',
passport.authenticate('jwt', {session: false}),
checkRoles('admin', 'seller', 'customer'),
  async (req, res, next) => {
    try {
      const user = req.user;
      const customer = await profileService.findByUser(user.sub);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
