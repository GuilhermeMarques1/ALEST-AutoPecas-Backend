'use strict'

const { async } = require('@firebase/util');
const firebase = require('../db');
const Product = require('../models/product'); 
const firestore = firebase.firestore();  

const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('produtos').doc().set(data); 
        res.send('Record saved succesfuly'); 
    } catch(error) {
        res.status(400).send(error.message); 
    }
}

const getAllProducts = async (req, res, next) => {
    try{
        const products = await firestore.collection('produtos');
        const data = await products.get();
        const productArray = [];
        if(data.empty) {
            res.status(404).send('No producsts record found');
        } else {
            data.forEach(doc => {
                const product = new Product(
                    doc.id,
                    doc.data().name,
                    doc.data().description,
                    doc.data().price
                );
                productArray.push(product); 
            });
            res.send(productArray); 
        }
    } catch(error) {
        res.status(400).send(error.message); 
    }
}

const getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await firestore.collection('produtos').doc(id);
        const data = await product.get(); 
        if(!data.exists) {
            res.status(404).send('Product with this name not found'); 
        } else {
            res.send(data.data()); 
        }
    } catch(error) {
        res.status(400).send(error.message); 
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product = await firestore.collection('produtos').doc(id);
        await product.update(data);
        res.send('Product record updated succesfuly'); 
    }catch(error) {
        res.status(400).send(error.message); 
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('produtos').doc(id).delete(); 
        res.send('Record deleted succesfuly'); 

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}