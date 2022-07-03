const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { signPayload } = require('../helpers/jwt');

class userController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user) throw { message: 'User not found' };
            const isValid = comparePassword(password, user.password);
            if (!isValid) throw { message: 'Invalid password' };
            const payload = {
                id: user.id,
                email: user.email,
            }
            const access_token = signPayload(payload);
            res.status(200).json({
                message: 'Login success',
                data: {
                    access_token,
                    email: user.email,
                    name: user.name,
                }
            });
        } catch (err) {
            console.log("err: ", err);
            res.status(500).json({
                message: err.message,
            });
        }
    }
}

module.exports = userController;