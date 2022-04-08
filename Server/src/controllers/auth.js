import User from '../models/user';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    //khai báo
    const { email, name, password} = req.body;
    try {
        // kiem tra user co ton tai khong?
        const existUser = await User.findOne({email}).exec();
        //Nếu user tồn tại
        if(existUser){
            return res.status(400).json({
                message: "User da ton tai"
            })
        }
        //nếu user không tồn tại thì add giữ liệu
        const user = await new User({email, name, password}).save();
        res.json({
            //trả về thằng user với các trường id, email, name
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}
export const signin = async (req, res) => {
    //khai báo
    const { email, password} = req.body;
    //Kiểm tra user có tồn tại hay không
    const user = await User.findOne({email}).exec();
    //nếu user không tồn tại thì báo message
    if(!user){
        return res.status(400).json({
            message: "User khong ton tai"
        })
    }
    //Nếu passwword không đúng thì thông báo message
    if(!user.authenticate(password)){
        return res.status(400).json({
            message: "Mat khau khong dung"
        })
    }
    // mã hóa mật khẩu
    const token = jwt.sign({_id: user._id}, "123456", { expiresIn: 60 * 60 }); 
    // trả về giữ liệu
    return res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}