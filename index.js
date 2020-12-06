const express = require("express");
const fs = require("fs");
const app = express();

app.get("/employee/:id/:header?", function (req, res) {
  const id = req.params.id;
  const headers = req.params.header;
  fs.readFile("employees.csv", "utf8", function (err, data) {
    if (err) {
      console.error(err.message);
    }

    const keys = data.split("\n")[0].split(",");

    args = data
      .split("\n")
      .slice(1)
      .map((row) => {
        let obj = row.split(",").map((value, index) => [keys[index], value]);

        return Object.fromEntries(
          headers
            ? obj.filter((head) => [headers, "id"].includes(head[0]))
            : obj
        );
      })
      .filter((employees) => employees.id === id);

      args = args[0];

    res.json(args);
  });
});

app.listen(3000, function () {
  console.log("application started on localhost:3000");
});
