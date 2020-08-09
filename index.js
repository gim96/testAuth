function getConnection(hostName, serverUsername, serverPassword, databaseName) {
  return mysql.createConnection({
    host: hostName,
    user: serverUsername,
    password: serverPassword,
    database: databaseName,
  });
}

function insertData(username, password) {
  const sql = "insert into lo values('" + username + "','" + password + "')";

  getConnection().query(sql, (error, rows, fields) => {
    if (error) {
      console.log("Error....");
      req.sendStatus(500);
      return;
    } else {
      console.log("success..");
    }
  });
}

module.exports.testAuth = testAuth;
