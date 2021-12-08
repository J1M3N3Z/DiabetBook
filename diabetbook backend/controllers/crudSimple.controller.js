const CrudSimple = require('../models/crudSimple.model');
let response = {
  msg: '',
  exito: false,
};

exports.create = function (req, res) {
  let crudSimple = new CrudSimple({
    fila_1: req.body.fila_1,
    fila_2: req.body.fila_2,
    fila_3: req.body.fila_3,
  });

  crudSimple.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = 'Error al guardar');
      res.json(response);
      return;
    }

    (response.exito = true), (response.msg = 'Se guardó correctamente');
    res.json(response);
  });
};

exports.find = function (req, res) {
  CrudSimple.find(function (err, crudSimples) {
    res.json(crudSimples);
  });
};

exports.findOne = function (req, res) {
  CrudSimple.findOne({ _id: req.params.id }, function (err, crudSimple) {
    res.json(crudSimple);
  });
};

exports.update = function (req, res) {
  let crudSimple = {
    fila_1: req.body.fila_1,
    fila_2: req.body.fila_2,
    fila_3: req.body.fila_3,
  };

  CrudSimple.findByIdAndUpdate(
    req.params.id,
    { $set: crudSimple },
    function (err) {
      if (err) {
        console.error(err),
          (response.exito = false),
          (response.msg = 'Error al modificar ');
        res.json(response);
        return;
      }

      (response.exito = true), (response.msg = ' modifico correctamente');
      res.json(response);
    }
  );
};

exports.remove = function (req, res) {
  CrudSimple.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = 'Error al eliminar ');
      res.json(response);
      return;
    }

    (response.exito = true), (response.msg = ' eliminado correctamente');
    res.json(response);
  });
};
