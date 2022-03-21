const employeeModel = require( '../models/employee' );
const departmentModel = require( '../models/department' );

const saveEmployeeDetails = async ( req, res, next ) => {
    const { ename, gender, salary, department } = req.body;

    try {
        const emp = new employeeModel( {
            ename,salary,gender
        } )
        const employeeData = await emp.save()
        
        const dept = new departmentModel( {
            dname: department.dname,
            dlocation: department.dlocation,
            empid:employeeData._id
        } )
        const departmentData = await dept.save()

        res.json( {
            error:false,
            message: 'employee data saved successfully',
            data: {
                employeeData,
                departmentData
            }
        })
    } catch ( err ) {
        next(err)
    }
}

const getEmployeeDataUsingDepartmentModel = async ( req, res, next ) => {
    const { empid } = req.body
    try {
        const employeeData = await departmentModel.find( { empid } ).populate( 'empid' )
        res.json( {
            error: false,
            message: "fetched successfull",
            data:employeeData
        })
    } catch ( err ) {
        next(err)
    }
}
module.exports = {
    saveEmployeeDetails,
    getEmployeeDataUsingDepartmentModel
}