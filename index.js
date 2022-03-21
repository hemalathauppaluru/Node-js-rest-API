const express = require( 'express' );
require( 'dotenv' ).config();
const cors = require( 'cors' )

// Db connection
require( './config/db.js' )

// product routes
const productsRoutes = require( './routes/products' )

// user Routes
const userRoutes = require('./routes/users')

// blog routes
const blogRoutes = require('./routes/blogs')

const app = express();
const PORT = process.env.PORT || 4000;

// cors middleware
app.use(cors())

// body parser middleware
app.use( express.urlencoded( { extended: true } ) );
app.use(express.json())

// route middleware
app.use( '/products', productsRoutes )
app.use( '/users', userRoutes )
app.use( '/blogs', blogRoutes )
app.use('/employees',require('./routes/employee'))

app.get( '/test', ( req, res ) => {
    res.json({'test':'test the rest service'})
} )

// Error handling hardware
app.use( ( err, req, res, next ) => {
    res.status(500).json( {
        error: true,
        message: err.message,
        deta:null
    })
})

app.listen( PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})