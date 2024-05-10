const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "latihancrud"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM mahasiswa";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO mahasiswa (`nama`, `matkul`, `dosen`) VALUES (?)";
    const values = [
        req.body.nama,
        req.body.matkul,
        req.body.dosen,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE mahasiswa SET nama = ?, matkul = ?, dosen = ? WHERE id = ?";
    const values = [
        req.body.nama,
        req.body.matkul,
        req.body.dosen,
        req.params.id,
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.delete('/mahasiswa/:id', (req, res) => {
    const sql = "DELETE FROM mahasiswa WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening in port");
})