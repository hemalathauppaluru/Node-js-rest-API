const express = require( "express" );
const { saveBlog } = require( '../controllers/blogs' );

const router = express.Router();

router.post( '/saveblog', saveBlog );

module.exports = router