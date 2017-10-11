var connector = require('./connector');

var db = connector.db;
var queryResult = connector.queryResult;




// add query functions

function getCountOutLogs(req, res, next) {
  db.func('getCountOutLogs',undefined,queryResult.one)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna a quantidade de empréstimos'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getOutLogBike(req, res, next) {
  var bkID = parseInt(req.params.id);
  db.func('getOutLogBike', bkID, queryResult.many)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna os empréstimos de uma bike'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getOutLogStation(req, res, next) {
  var stID = parseInt(req.params.id);
  db.func('getOutLogStation', stID, queryResult.many)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna os empréstimos de uma estação'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getOutLogCli(req, res, next) {
  var userID = parseInt(req.params.id);
  db.func('getOutLogCli', userID, queryResult.many)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna os empréstimos de um usuário'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCountInLogs(req, res, next) {
  db.func('getCountInLogs',undefined,queryResult.one)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna a quantidade de devoluções'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getInLogBike(req, res, next) {
  var bkID = parseInt(req.params.id);
  db.func('getInLogBike', bkID, queryResult.many)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna as devoluções de uma bike'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getInLogStation(req, res, next) {
  var stID = parseInt(req.params.id);
  db.func('getInLogStation', stID, queryResult.many)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna as devoluções de uma estação'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getInLogCli(req, res, next) {
  var userID = parseInt(req.params.id);
  db.func('getInLogCli', userID, queryResult.many)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retorna as devoluções de um usuário'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function doLoan(req, res, next) {
  db.func('add_out_log',[parseInt(req.body.idst),parseInt(req.body.idbk),parseInt(req.body.nslt)],queryResult.none)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Uma bike foi entregue'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function doReturn(req, res, next) {
  db.func('add_in_log',[parseInt(req.body.idst),parseInt(req.body.idbk),parseInt(req.body.nslt)],queryResult.none)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Uma bike foi devolvida'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getOutLogs(req, res, next) {
    db.func('getOutLogsText',undefined,queryResult.many)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retorna as devoluções'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}
function getInLogs(req, res, next) {
    db.func('getInLogsText',undefined,queryResult.many)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retorna os empréstimos'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
	getCountOutLogs: getCountOutLogs, // feito
	getOutLogs: getOutLogs, // feito
	getOutLogBike: getOutLogBike, // feito
	getOutLogStation: getOutLogStation, // feito
	getOutLogCli: getOutLogCli, // feito
	doLoan: doLoan, // feito
	getCountInLogs: getCountInLogs, // feito
	getInLogs: getInLogs, // feito
	getInLogBike: getInLogBike, // feito
	getInLogStation: getInLogStation, // feito
	getInLogCli: getInLogCli, // feito
	doReturn: doReturn // feito
};