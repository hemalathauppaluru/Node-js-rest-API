const express = require( 'express' );
const {saveEmployeeDetails,getEmployeeDataUsingDepartmentModel} =require('../controllers/employee')
const router = express.Router();

router.post( '/save', saveEmployeeDetails )
router.get('/employees',getEmployeeDataUsingDepartmentModel)

module.exports=router