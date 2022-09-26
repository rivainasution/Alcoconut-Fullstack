import path from "path";
import fs from "fs";
import NavbarAlbum from "../model/NavbarModel.js";
import Services from "../model/ServiceModel.js";
import AboutUs from "../model/AboutUsModel.js";
import AboutAlbum from "../model/AboutAlbumModel.js";
import AboutProduct from "../model/AboutProductModel.js";
import GreenBeanM from "../model/GreenBeanM.js";
import RoastBeanM from "../model/RoastBeanM.js";
import CoffeePowderM from "../model/CoffeePowderM.js";
import GreenBeanS from "../model/GreenBeanS.js";
import RoastBeanS from "../model/RoastBeanS.js";
import CoffeePowderS from "../model/CoffeePowderS.js";
import Teams from "../model/TeamsModel.js";
import Contact from "../model/ContactModel.js";
import Location from "../model/LocationModel.js";
import MandhelingCoffee from "../model/MandhelingCoffee.js";
import SipirokCoffee from "../model/SipirokCoffe.js";
import Product from "../model/ProductListModel.js";
import DetailGM from "../model/DetalGM.js";
import DetailRM from "../model/DetailRM.js";
import DetailCM from "../model/DetailCM.js";
import DetailGS from "../model/DetailGS.js";
import DetailRS from "../model/DetailRS.js";
import DetailCS from "../model/DetailCS.js";

// ---Navbar Controller---
export const createNavbarAlbum = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const css = req.body.css;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/navbar/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/navbar/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await NavbarAlbum.create({name: name, css: css, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getNavbarAlbum = async(req, res)=>{
    try {
        const response = await NavbarAlbum.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getNavbarAlbumById = async(req, res)=>{
    try {
        const response = await NavbarAlbum.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNavbarAlbum = async(req, res)=>{
    const product = await NavbarAlbum.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/navbar/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/navbar/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const css = req.body.css;
    const url = `${req.protocol}://${req.get("host")}/navbar/${fileName}`;
    
    try {
        await NavbarAlbum.update({name: name, css: css, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNavbarAlbum = async(req, res)=>{
    const product = await NavbarAlbum.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/navbar/${product.image}`;
        fs.unlinkSync(filepath);
        await NavbarAlbum.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Services Controller---
export const createServices = async(req, res) => {
    try {
        await Services.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getServices = async(req, res) => {
    try {
        const response = await Services.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getServicesById = async(req, res) => {
    try {
        const response = await Services.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateServices= async(req, res) =>{
    try {
        await Services.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteServices = async(req, res) =>{
    try {
        await Services.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





// ---About Us Controller---
export const createAbout = async(req, res) => {
    try {
        await AboutUs.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getAbout = async(req, res) => {
    try {
        const response = await AboutUs.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getAboutById = async(req, res) => {
    try {
        const response = await AboutUs.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateAbout= async(req, res) =>{
    try {
        await AboutUs.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteAbout = async(req, res) =>{
    try {
        await AboutUs.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





// ---About Album Controller---
export const createAboutAlbum = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/aboutalbum/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/aboutalbum/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await AboutAlbum.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getAboutAlbum = async(req, res)=>{
    try {
        const response = await AboutAlbum.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAboutAlbumById = async(req, res)=>{
    try {
        const response = await AboutAlbum.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateAboutAlbum = async(req, res)=>{
    const product = await AboutAlbum.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/aboutalbum/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/aboutalbum/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/aboutalbum/${fileName}`;
    
    try {
        await AboutAlbum.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAboutAlbum = async(req, res)=>{
    const product = await AboutAlbum.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/aboutalbum/${product.image}`;
        fs.unlinkSync(filepath);
        await AboutAlbum.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---About Product Controller---
export const createAboutProduct = async(req, res) => {
    try {
        await AboutProduct.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getAboutProduct = async(req, res) => {
    try {
        const response = await AboutProduct.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getAboutProductById = async(req, res) => {
    try {
        const response = await AboutProduct.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateAboutProduct= async(req, res) =>{
    try {
        await AboutProduct.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteAboutProduct = async(req, res) =>{
    try {
        await AboutProduct.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





// ---Mandheling Coffee Album Controller---
export const createMandhelingCoffeeAlbum = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/mandhelingcoffealbum/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/mandhelingcoffealbum/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await MandhelingCoffee.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getMandhelingCoffeeAlbum = async(req, res)=>{
    try {
        const response = await MandhelingCoffee.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMandhelingCoffeeAlbumById = async(req, res)=>{
    try {
        const response = await MandhelingCoffee.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMandhelingCoffeeAlbum = async(req, res)=>{
    const product = await MandhelingCoffee.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/mandhelingcoffealbum/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/mandhelingcoffealbum/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/mandhelingcoffealbum/${fileName}`;
    
    try {
        await MandhelingCoffee.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMandhelingCoffeeAlbum = async(req, res)=>{
    const product = await MandhelingCoffee.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/mandhelingcoffealbum/${product.image}`;
        fs.unlinkSync(filepath);
        await MandhelingCoffee.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Sipirok Coffee Album Controller---
export const createSipirokCoffeeAlbum = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/sipirokcoffealbum/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/sipirokcoffealbum/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await SipirokCoffee.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getSipirokCoffeeAlbum = async(req, res)=>{
    try {
        const response = await SipirokCoffee.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSipirokCoffeeAlbumById = async(req, res)=>{
    try {
        const response = await SipirokCoffee.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateSipirokCoffeeAlbum = async(req, res)=>{
    const product = await SipirokCoffee.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/sipirokcoffealbum/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/sipirokcoffealbum/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/sipirokcoffealbum/${fileName}`;
    
    try {
        await SipirokCoffee.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteSipirokCoffeeAlbum = async(req, res)=>{
    const product = await SipirokCoffee.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/sipirokcoffealbum/${product.image}`;
        fs.unlinkSync(filepath);
        await SipirokCoffee.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}




// ---Product List Controller---
export const createProduct = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const type = req.body.type;
    const harga = req.body.harga;
    const code = req.body.code;
    const css = req.body.css;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/product/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/product/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({name: name, type: type, harga: harga, code: code, css: css, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getProduct = async(req, res)=>{
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductById = async(req, res)=>{
    try {
        const response = await Product.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProduct = async(req, res)=>{
    const product = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/product/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/product/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const type = req.body.type;
    const harga = req.body.harga;
    const code = req.body.code;
    const css = req.body.css;
    const url = `${req.protocol}://${req.get("host")}/product/${fileName}`;
    
    try {
        await Product.update({name: name, type: type, harga: harga, code: code, css: css, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = async(req, res)=>{
    const product = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/product/${product.image}`;
        fs.unlinkSync(filepath);
        await Product.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Green Bean Mandheling Controller---
export const createGreenBeanM = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/greenbeanm/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/greenbeanm/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await GreenBeanM.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getGreenBeanM = async(req, res)=>{
    try {
        const response = await GreenBeanM.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getGreenBeanMById = async(req, res)=>{
    try {
        const response = await GreenBeanM.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateGreenBeanM = async(req, res)=>{
    const product = await GreenBeanM.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/greenbeanm/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/greenbeanm/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/greenbeanm/${fileName}`;
    
    try {
        await GreenBeanM.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteGreenBeanM = async(req, res)=>{
    const product = await GreenBeanM.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/greenbeanm/${product.image}`;
        fs.unlinkSync(filepath);
        await GreenBeanM.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Roast Bean Mandheling Controller---
export const createRoastBeanM = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/roastbeanm/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/roastbeanm/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await RoastBeanM.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getRoastBeanM = async(req, res)=>{
    try {
        const response = await RoastBeanM.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getRoastBeanMById = async(req, res)=>{
    try {
        const response = await RoastBeanM.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRoastBeanM = async(req, res)=>{
    const product = await RoastBeanM.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/roastbeanm/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/roastbeanm/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/roastbeanm/${fileName}`;
    
    try {
        await RoastBeanM.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRoastBeanM = async(req, res)=>{
    const product = await RoastBeanM.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/roastbeanm/${product.image}`;
        fs.unlinkSync(filepath);
        await RoastBeanM.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Coffee Powder Mandheling Controller---
export const createCoffeePowder = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/coffeepowderm/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/coffeepowderm/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await CoffeePowderM.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getCoffeePowderM = async(req, res)=>{
    try {
        const response = await CoffeePowderM.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCoffeePowderMById = async(req, res)=>{
    try {
        const response = await CoffeePowderM.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCoffeePowderM = async(req, res)=>{
    const product = await CoffeePowderM.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/coffeepowderm/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/coffeepowderm/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/coffeepowderm/${fileName}`;
    
    try {
        await CoffeePowderM.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCoffeePowderM = async(req, res)=>{
    const product = await CoffeePowderM.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/coffeepowderm/${product.image}`;
        fs.unlinkSync(filepath);
        await CoffeePowderM.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Green Bean Sipirok Controller---
export const createGreenBeanS = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/greenbeans/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/greenbeans/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await GreenBeanS.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getGreenBeanS = async(req, res)=>{
    try {
        const response = await GreenBeanS.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getGreenBeanSById = async(req, res)=>{
    try {
        const response = await GreenBeanS.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateGreenBeanS = async(req, res)=>{
    const product = await GreenBeanS.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/greenbeans/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/greenbeans/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/greenbeans/${fileName}`;
    
    try {
        await GreenBeanS.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteGreenBeanS = async(req, res)=>{
    const product = await GreenBeanS.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/greenbeans/${product.image}`;
        fs.unlinkSync(filepath);
        await GreenBeanS.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Roast Bean Sipirok Controller---
export const createRoastBeanS = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/roastbeans/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/roastbeans/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await RoastBeanS.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getRoastBeanS = async(req, res)=>{
    try {
        const response = await RoastBeanS.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getRoastBeanSById = async(req, res)=>{
    try {
        const response = await RoastBeanS.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRoastBeanS = async(req, res)=>{
    const product = await RoastBeanS.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/roastbeans/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/roastbeans/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/roastbeans/${fileName}`;
    
    try {
        await RoastBeanS.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRoastBeanS = async(req, res)=>{
    const product = await RoastBeanS.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/roastbeans/${product.image}`;
        fs.unlinkSync(filepath);
        await RoastBeanS.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Coffee Powder Mandheling Controller---
export const createCoffeePowderS = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/coffeepowders/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/coffeepowders/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await CoffeePowderS.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getCoffeePowderS = async(req, res)=>{
    try {
        const response = await CoffeePowderS.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCoffeePowderSById = async(req, res)=>{
    try {
        const response = await CoffeePowderS.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCoffeePowderS = async(req, res)=>{
    const product = await CoffeePowderS.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/coffeepowders/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/coffeepowders/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/coffeepowders/${fileName}`;
    
    try {
        await CoffeePowderS.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCoffeePowderS = async(req, res)=>{
    const product = await CoffeePowderS.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/coffeepowders/${product.image}`;
        fs.unlinkSync(filepath);
        await CoffeePowderS.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}




// ---Detail Green Bean Mandheling Controller---
export const createDetailGM = async(req, res) => {
    try {
        await DetailGM.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailGM = async(req, res) => {
    try {
        const response = await DetailGM.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailGMById = async(req, res) => {
    try {
        const response = await DetailGM.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateDetailGM= async(req, res) =>{
    try {
        await DetailGM.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteDetailGM = async(req, res) =>{
    try {
        await DetailGM.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





// ---Detail Roast Bean Mandheling Controller---
export const createDetailRM = async(req, res) => {
    try {
        await DetailRM.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailRM = async(req, res) => {
    try {
        const response = await DetailRM.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailRMById = async(req, res) => {
    try {
        const response = await DetailRM.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateDetailRM= async(req, res) =>{
    try {
        await DetailRM.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteDetailRM = async(req, res) =>{
    try {
        await DetailRM.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





// ---Detail Coffee Powder Mandheling Controller---
export const createDetailCM = async(req, res) => {
    try {
        await DetailCM.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailCM = async(req, res) => {
    try {
        const response = await DetailCM.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailCMById = async(req, res) => {
    try {
        const response = await DetailCM.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateDetailCM= async(req, res) =>{
    try {
        await DetailCM.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteDetailCM = async(req, res) =>{
    try {
        await DetailCM.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}




// ---Detail Green Bean Sipirok Controller---
export const createDetailGS = async(req, res) => {
    try {
        await DetailGS.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailGS = async(req, res) => {
    try {
        const response = await DetailGS.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailGSById = async(req, res) => {
    try {
        const response = await DetailGS.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateDetailGS= async(req, res) =>{
    try {
        await DetailGS.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteDetailGS = async(req, res) =>{
    try {
        await DetailGS.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





// ---Detail Roast Bean Sipirok Controller---
export const createDetailRS = async(req, res) => {
    try {
        await DetailRS.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailRS = async(req, res) => {
    try {
        const response = await DetailRS.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailRSById = async(req, res) => {
    try {
        const response = await DetailRS.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateDetailRS= async(req, res) =>{
    try {
        await DetailRS.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteDetailRS = async(req, res) =>{
    try {
        await DetailRS.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





// ---Detail Coffee Powder Sipirok Controller---
export const createDetailCS = async(req, res) => {
    try {
        await DetailCS.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailCS = async(req, res) => {
    try {
        const response = await DetailCS.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getDetailCSById = async(req, res) => {
    try {
        const response = await DetailCS.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateDetailCS= async(req, res) =>{
    try {
        await DetailCS.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteDetailCS = async(req, res) =>{
    try {
        await DetailCS.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





export const createTeam = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const nick = req.body.nick;
    const position = req.body.position;
    const css = req.body.css;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/teams/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/teams/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Teams.create({name: name,nick: nick, position: position, css: css, image: fileName, url: url});
            res.status(201).json({msg: "Item Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const getTeam = async(req, res)=>{
    try {
        const response = await Teams.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTeamById = async(req, res)=>{
    try {
        const response = await Teams.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTeam = async(req, res)=>{
    const product = await Teams.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/teams/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/teams/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const nick = req.body.nick;
    const position = req.body.position;
    const css = req.body.css;

    const url = `${req.protocol}://${req.get("host")}/teams/${fileName}`;
    
    try {
        await Teams.update({name: name, nick: nick, position: position, css: css, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTeam = async(req, res)=>{
    const product = await Teams.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/teams/${product.image}`;
        fs.unlinkSync(filepath);
        await Teams.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}





// ---Contact Controller---
export const createContact = async(req, res) => {
    try {
        await Contact.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getContact = async(req, res) => {
    try {
        const response = await Contact.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getContactById = async(req, res) => {
    try {
        const response = await Contact.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateContact= async(req, res) =>{
    try {
        await Contact.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteContact = async(req, res) =>{
    try {
        await Contact.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}





// ---Contact Controller---
export const createLocation = async(req, res) => {
    try {
        await Location.create(req.body);
        res.status(201).json({msg: "Item Created"});
    } catch (error) {
        console.log(error.message); 
    }
}

export const getLocation = async(req, res) => {
    try {
        const response = await Location.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const getLocationById = async(req, res) => {
    try {
        const response = await Location.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message); 
    }
}

export const updateLocation= async(req, res) =>{
    try {
        await Location.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}

export const deleteLocation = async(req, res) =>{
    try {
        await Location.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Item Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }       
}