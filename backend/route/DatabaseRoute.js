import express from "express";
import { 
    createAbout,
    createAboutAlbum,
    createAboutProduct,
    createCoffeePowder,
    createCoffeePowderS,
    createContact,
    createDetailCM,
    createDetailCS,
    createDetailGM,
    createDetailGS,
    createDetailRM,
    createDetailRS,
    createGreenBeanM,
    createGreenBeanS,
    createLocation,
    createMandhelingCoffeeAlbum,
    createNavbarAlbum, 
    createProduct, 
    createRoastBeanM, 
    createRoastBeanS, 
    createServices, 
    createSipirokCoffeeAlbum, 
    createTeam, 
    deleteAbout, 
    deleteAboutAlbum, 
    deleteAboutProduct, 
    deleteCoffeePowderM, 
    deleteCoffeePowderS, 
    deleteContact, 
    deleteDetailCM, 
    deleteDetailCS, 
    deleteDetailGM, 
    deleteDetailGS, 
    deleteDetailRM, 
    deleteDetailRS, 
    deleteGreenBeanM, 
    deleteGreenBeanS, 
    deleteLocation, 
    deleteMandhelingCoffeeAlbum, 
    deleteNavbarAlbum, 
    deleteProduct, 
    deleteRoastBeanM, 
    deleteRoastBeanS, 
    deleteServices, 
    deleteSipirokCoffeeAlbum, 
    deleteTeam, 
    getAbout, 
    getAboutAlbum, 
    getAboutAlbumById, 
    getAboutById, 
    getAboutProduct,  
    getAboutProductById, 
    getCoffeePowderM, 
    getCoffeePowderMById, 
    getCoffeePowderS, 
    getCoffeePowderSById, 
    getContact, 
    getContactById, 
    getDetailCM, 
    getDetailCMById, 
    getDetailCS, 
    getDetailCSById, 
    getDetailGM, 
    getDetailGMById, 
    getDetailGS, 
    getDetailGSById, 
    getDetailRM, 
    getDetailRMById, 
    getDetailRS, 
    getDetailRSById, 
    getGreenBeanM, 
    getGreenBeanMById, 
    getGreenBeanS, 
    getGreenBeanSById, 
    getLocation, 
    getLocationById, 
    getMandhelingCoffeeAlbum, 
    getMandhelingCoffeeAlbumById, 
    getNavbarAlbum, 
    getNavbarAlbumById, 
    getProduct, 
    getProductById, 
    getRoastBeanM, 
    getRoastBeanMById, 
    getRoastBeanS, 
    getRoastBeanSById, 
    getServices, 
    getServicesById, 
    getSipirokCoffeeAlbum, 
    getSipirokCoffeeAlbumById, 
    getTeam, 
    getTeamById, 
    updateAbout, 
    updateAboutAlbum, 
    updateAboutProduct,  
    updateCoffeePowderM, 
    updateCoffeePowderS, 
    updateContact, 
    updateDetailCM, 
    updateDetailCS, 
    updateDetailGM, 
    updateDetailGS, 
    updateDetailRM, 
    updateDetailRS, 
    updateGreenBeanM, 
    updateGreenBeanS, 
    updateLocation, 
    updateMandhelingCoffeeAlbum, 
    updateNavbarAlbum, 
    updateProduct, 
    updateRoastBeanM, 
    updateRoastBeanS, 
    updateServices,
    updateSipirokCoffeeAlbum,
    updateTeam
} from "../controller/DatabaseController.js";

const router = express.Router();

// ---Navbar Album ---
router.post('/navbar', createNavbarAlbum);
router.get('/navbar', getNavbarAlbum);
router.get('/navbar/:id', getNavbarAlbumById);
router.patch('/navbar/:id', updateNavbarAlbum);
router.delete('/navbar/:id', deleteNavbarAlbum);

// ---Services Album ---
router.post('/services', createServices);
router.get('/services', getServices);
router.get('/services/:id', getServicesById);
router.patch('/services/:id', updateServices);
router.delete('/services/:id', deleteServices);

// ---Services Album ---
router.post('/about', createAbout);
router.get('/about', getAbout);
router.get('/about/:id', getAboutById);
router.patch('/about/:id', updateAbout);
router.delete('/about/:id', deleteAbout);

// ---About Album ---
router.post('/aboutalbum', createAboutAlbum);
router.get('/aboutalbum', getAboutAlbum);
router.get('/aboutalbum/:id', getAboutAlbumById);
router.patch('/aboutalbum/:id', updateAboutAlbum);
router.delete('/aboutalbum/:id', deleteAboutAlbum);

// ---Mandheling Coffee Product ---
router.post('/mandhelingcoffee', createMandhelingCoffeeAlbum);
router.get('/mandhelingcoffee', getMandhelingCoffeeAlbum);
router.get('/mandhelingcoffee/:id', getMandhelingCoffeeAlbumById);
router.patch('/mandhelingcoffee/:id', updateMandhelingCoffeeAlbum);
router.delete('/mandhelingcoffee/:id', deleteMandhelingCoffeeAlbum);

// ---Sipirok Coffee Product ---
router.post('/sipirokcoffee', createSipirokCoffeeAlbum);
router.get('/sipirokcoffee', getSipirokCoffeeAlbum);
router.get('/sipirokcoffee/:id', getSipirokCoffeeAlbumById);
router.patch('/sipirokcoffee/:id', updateSipirokCoffeeAlbum);
router.delete('/sipirokcoffee/:id', deleteSipirokCoffeeAlbum);

// ---About Product Album---
router.post('/aboutproduct', createAboutProduct);
router.get('/aboutproduct', getAboutProduct);
router.get('/aboutproduct/:id', getAboutProductById);
router.patch('/aboutproduct/:id', updateAboutProduct);
router.delete('/aboutproduct/:id', deleteAboutProduct);

// ---Product Album---
router.post('/product', createProduct);
router.get('/product', getProduct);
router.get('/product/:id', getProductById);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

// ---Green Bean Mandheling Album---
router.post('/greenbeanm', createGreenBeanM);
router.get('/greenbeanm', getGreenBeanM);
router.get('/greenbeanm/:id', getGreenBeanMById);
router.patch('/greenbeanm/:id', updateGreenBeanM);
router.delete('/greenbeanm/:id', deleteGreenBeanM);

// ---Green Bean Mandheling Album---
router.post('/roastbeanm', createRoastBeanM);
router.get('/roastbeanm', getRoastBeanM);
router.get('/roastbeanm/:id', getRoastBeanMById);
router.patch('/roastbeanm/:id', updateRoastBeanM);
router.delete('/roastbeanm/:id', deleteRoastBeanM);

// ---Coffee Powder Mandheling Album---
router.post('/coffeepowderm', createCoffeePowder);
router.get('/coffeepowderm', getCoffeePowderM);
router.get('/coffeepowderm/:id', getCoffeePowderMById);
router.patch('/coffeepowderm/:id', updateCoffeePowderM);
router.delete('/coffeepowderm/:id', deleteCoffeePowderM);

// ---Green Bean Sipirok Album---
router.post('/greenbeans', createGreenBeanS);
router.get('/greenbeans', getGreenBeanS);
router.get('/greenbeans/:id', getGreenBeanSById);
router.patch('/greenbeans/:id', updateGreenBeanS);
router.delete('/greenbeans/:id', deleteGreenBeanS);

// ---Green Bean Sipirok Album---
router.post('/roastbeans', createRoastBeanS);
router.get('/roastbeans', getRoastBeanS);
router.get('/roastbeans/:id', getRoastBeanSById);
router.patch('/roastbeans/:id', updateRoastBeanS);
router.delete('/roastbeans/:id', deleteRoastBeanS);

// ---Coffee Powder Sipirok Album---
router.post('/coffeepowders', createCoffeePowderS);
router.get('/coffeepowders', getCoffeePowderS);
router.get('/coffeepowders/:id', getCoffeePowderSById);
router.patch('/coffeepowders/:id', updateCoffeePowderS);
router.delete('/coffeepowders/:id', deleteCoffeePowderS);

// ---Detail Green Bean Mandheling Controller---
router.post('/detailgm', createDetailGM);
router.get('/detailgm', getDetailGM);
router.get('/detailgm/:id', getDetailGMById);
router.patch('/detailgm/:id', updateDetailGM);
router.delete('/detailgm/:id', deleteDetailGM);

// ---Detail Roast Bean Mandheling Controller---
router.post('/detailrm', createDetailRM);
router.get('/detailrm', getDetailRM);
router.get('/detailrm/:id', getDetailRMById);
router.patch('/detailrm/:id', updateDetailRM);
router.delete('/detailrm/:id', deleteDetailRM);

// ---Detail Coffee Powder Mandheling Controller---
router.post('/detailcm', createDetailCM);
router.get('/detailcm', getDetailCM);
router.get('/detailcm/:id', getDetailCMById);
router.patch('/detailcm/:id', updateDetailCM);
router.delete('/detailcm/:id', deleteDetailCM);

// ---Detail Green Bean Sipirok Controller---
router.post('/detailgs', createDetailGS);
router.get('/detailgs', getDetailGS);
router.get('/detailgs/:id', getDetailGSById);
router.patch('/detailgs/:id', updateDetailGS);
router.delete('/detailgs/:id', deleteDetailGS);

// ---Detail Roast Bean Sipirok Controller---
router.post('/detailrs', createDetailRS);
router.get('/detailrs', getDetailRS);
router.get('/detailrs/:id', getDetailRSById);
router.patch('/detailrs/:id', updateDetailRS);
router.delete('/detailrs/:id', deleteDetailRS);

// ---Detail Coffee Powder Sipirok Controller---
router.post('/detailcs', createDetailCS);
router.get('/detailcs', getDetailCS);
router.get('/detailcs/:id', getDetailCSById);
router.patch('/detailcs/:id', updateDetailCS);
router.delete('/detailcs/:id', deleteDetailCS);

// ---Teams Controller---
router.post('/teams', createTeam);
router.get('/teams', getTeam);
router.get('/teams/:id', getTeamById);
router.patch('/teams/:id', updateTeam);
router.delete('/teams/:id', deleteTeam);

// ---Contact Album ---
router.post('/contact', createContact);
router.get('/contact', getContact);
router.get('/contact/:id', getContactById);
router.patch('/contact/:id', updateContact);
router.delete('/contact/:id', deleteContact);

// ---Location Album ---
router.post('/location', createLocation);
router.get('/location', getLocation);
router.get('/location/:id', getLocationById);
router.patch('/location/:id', updateLocation);
router.delete('/location/:id', deleteLocation);

export default router;