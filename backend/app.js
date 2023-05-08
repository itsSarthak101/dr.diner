const express = require('express')
const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://DrDiner:DrDiner123@cluster0.jpb8inp.mongodb.net/DrDiner?retryWrites=true&w=majority'
// const MongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true });
//         console.log('Connection Successful!');

//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(async function (err, data) {
//             const foodCategory = await mongoose.connection.db.collection("food_category");
//             foodCategory.find({}).toArray(function (err, categoryData) {
//                 if(err) console.log(err);
//                 else {
//                     global.food_items = data;
//                     global.foodCategory = categoryData;
//                     // console.log(global.food_items);
//                 }
//             });
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

const MongoDB = async (err, result) => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connection Successful!');

        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();
        global.food_items = fetched_data;
        global.foodCategory = foodCategory;
        
        if (err) console.log(err);
        else {
            global.food_items = fetched_data;
            global.foodCategory = foodCategory;
            // console.log(global.food_items);
        }
    } catch (err) {
        console.log(err);
    }
}


module.exports = MongoDB;