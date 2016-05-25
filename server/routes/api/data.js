var express = require('express'),
    router = express.Router(),
    /*
      'path' is needed because relative paths ../../ are considered malicious
      when importing modules in node. Example: importing routes in index.js
    */
    path = require('path'),
    Item = require('../../models/item');

router.get('/', function(req, res, next) {
  Item.find( function(err, dbItems){
    res.json( { items: dbItems } );
  });
});

router.post('/', function( req, res, next){
  Item.create(req.body, function( err, dbItem){
    res.json({ item: dbItem });
  });
});

router.put('/:id', function(req, res, next){
  Item.findByIdAndUpdate( req.params.id , req.body, function(err, dbItem){
    res.json({ item: dbItem });
  })
});

router.delete('/:id', function(req, res, next){
  Item.findByIdAndRemove(req.params.id, function(err, dbItems){
    res.json( {items: dbItems });
  });
});

module.exports = router;
