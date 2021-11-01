const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/users.model");
const Books = require("../models/books.model");

const { APP_SECRET } = process.env;

const createToken = (id) => {
    return jwt.sign({ id }, APP_SECRET, { expiresIn: "7 days" });
};

const viewRegister = (req, res) => {
    return res.render("register");
};

const viewLogin = (req, res) => {
    return res.render("login");
};

const viewUpdate = (req, res) => {
    return res.render("update");
};

const viewDashboard = async (req, res) => {
    const books = await  Books.findAll()
    
    return res.render("dashboard", {
        books
    });
};

const viewBook = async (req, res) => {
    const books = await  Books.findOne({ name: req.params.name });
    
    return res.render("book", {
        books
    });
};

const viewList = (req, res) => {
    return res.render("tambah");
};

const deleteBook = async (req, res) => { 
    const name = await  Books.findOne({ name: req.params.name });
    if (!name) {
        res.status(404);
        res.send('<h1>404</h1>');
    } else {
        Books.destroy({name : req.params.name});
        res.redirect('/dashboard')
    }
};


const updateBook = async (req, res) => { 
    const name = await  Books.findBook(req.params.name) 
    await Books.update({  
        name,
        author,
        category,
});
return res.status(301).redirect('/dashboard')
}


const createList = async (req, res) => {
    const { name, author, category } = req.body;

    await Books.create({
        name,
        author,
        category,
});
return res.status(301).redirect('/dashboard')
}


const createRegister = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email) {
        throw {
            message: `email must be valid`,
            code: 400,
            error: `bad request`,
        };
    }

    if (!password || password.length < 8) {
        throw {
            message: `password min length 8 character`,
            code: 400,
            error: `bad request`,
        };
    }

    const isExist = await User.findOne({
        where: {
            email,
        },
    });

    if (isExist) {
        throw {
            message: `users already exists`,
            code: 400,
            error: `bad request`,
        };
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
        email,
        password: passwordHash,
    });

    const token = await createToken(user.id);

    return res.status(301).redirect('/login');
    } catch (error) {
    next(error);
    }
};

    const createLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
    if (!email) {
        throw {
            message: `email must be valid`,
            code: 400,
            error: `bad request`,
        };
    }

    if (!password || password.length < 8) {
        throw {
            message: `password min length 8 character`,
            code: 400,
            error: `bad request`,
        };
    }

    const isExist = await User.findOne({
        where: {
            email,
        },
    });

    if (!isExist) {
        throw {
            message: `User Not Found`,
            code: 404,
            error: `bad request`,
            
        };
    }

    const isMatch = await bcrypt.compare(password, isExist.password);

    if (!isMatch) {
        throw {
            message: `Wrong Password`,
            code: 404,
            error: `bad request`,
        };
    }

    const token = await createToken(isExist.id);

    return res.status(301).redirect('/dashboard');
  } catch (error) {
    next(error);
  }
};





module.exports = { viewRegister, viewLogin, viewDashboard, viewList, viewUpdate, viewBook, createRegister, createLogin, createList, deleteBook, updateBook };