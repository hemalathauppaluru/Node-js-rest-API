const mongoose = require( 'mongoose' );
const departmentSchema = new mongoose.Schema( {
    dname: String,
    dlocaion: String,
    empid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee'
    }
} );

module.exports = mongoose.model( 'departments', departmentSchema );
