const db = require("../routes/connection")
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
    // const { email, password: Npassword } = req.body
    const { name, email, password, phoneNo } = req.body

    if (!email || !password) return res.json({ status: "error", error: "please Enter your Username Or Password" });
    else {
        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.json({ status: "error", error: "Email has already been registered" })
            else {
                const hpassword = await bcrypt.hash(password, 8);
                // const hconpass=await bcrypt.hash(conpass,8);

                db.query('INSERT INTO users SET ?', { name: name, email: email, password: hpassword, phoneNo: phoneNo}, (eror, results) => {
                    if (eror) throw eror;
                    
                 return res.json({ status: "success", success: "User has been registered" })
                    
                })
            }
        })
    }
}

const Submitt = async (req, res) => {
    const { college, course, sem } = req.body;
    db.query('INSERT INTO userss SET ?', { college:college, course: course, sem: sem }, (eror, results) => {
        if (eror) throw eror;
        
     return res.json({ status: "success", success: "User has been registered" })
        
    })

}
module.exports=Submitt;

module.exports = register;