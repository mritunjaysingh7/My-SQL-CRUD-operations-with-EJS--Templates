const ejs = require('ejs')
const db = require('../config/db')
const getUser = (req, res) => {
    try {
        db.query("SELECT * FROM user ", (err, rows) => {
            if (err) {
                return res.json({
                    sucess: false,
                    message: err
                })
            }
            return res.render('form.ejs', { rows })
        })


    } catch (err) {

    }
    // res.render("form.ejs")

}
const createnewuser = (req, res) => {
    return res.render('new.ejs')

}
const createUser = (req, res) => {
    const { name, email } = req.body
    console.log(name, email)
    try {
        db.query("INSERT into user(name,email) values (?,?)", [name, email], (err) => {
            if (err) {
                return res.json({
                    sucess: false,
                    message: err
                })
            }
            return res.redirect('/api/v1/getuser')
        })
    } catch (err) {
        return res.json({
            sucess: false,
            message: err
        })
    }


}

const veiwEdit = (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        db.query("SELECT * FROM user WHERE id=?", [id], (err, rows) => {
            if (err) {
                return res.json({
                    sucess: false,
                    message: err
                })
            }
            return res.render('edit.ejs', { rows })
        })
    } catch {

    }

}
const edit = (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    try {
        db.query("UPDATE user SET name=? , email= ? WHERE id= ?", [name, email, id], (err) => {
            if (err) {
                return res.json({
                    sucess: false,
                    message: err
                })
            }
            return res.redirect('/api/v1/getuser')
        })

    } catch (err) {
        if (err) {
            return res.json({
                sucess: false,
                message: err
            })
        }
    }

}

const deletee=(req,res)=>{
    const {id}=req.params
    console.log(id)
    try{
        db.query("DELETE FROM user WHERE id=?",[id],(err)=>{
           if (err) {
                return res.json({
                    sucess: false,
                    message: err
                })
            } 
            return res.redirect('/api/v1/getuser')
        })
    }catch(err){
        if (err) {
            return res.json({
                sucess: false,
                message: err
            })
        }

    }

}



module.exports = {
    getUser,
    createnewuser,
    createUser,
    veiwEdit,
    edit,
    deletee
}