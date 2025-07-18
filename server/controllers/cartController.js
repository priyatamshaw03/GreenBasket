import User from "../models/User.js";

// update user cartData: /api/cart/update

export const updateCart = async (req, res) => {
  try {

    const userId = req.userId;
    const { cartitems } = req.body;

    await User.findByIdAndUpdate(userId, { cartitems })
    res.json({ success: true, message: "Cart Updated" })

  } catch (error) {
    console.log(error.message)
    res.json({ success: false, message: error.message })
  }
}
