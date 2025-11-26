import connection from "./conexao.js";
import express from "express";
import cors from "cors";
import mysql from "mysql2";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import pool from "./conexao.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Pasta onde as fotos ficarão salvas
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueName + ext);
    }
});

const upload = multer({ storage: storage });

app.post('/cadastrar', upload.single('arquivo'), async (req, res) => {
    try {
        const { nome_objeto, descricao, localizacao, data_registro, contato } = req.body;
        const foto = req.file ? req.file.filename : null;

        const sql = `
            INSERT INTO objeto (nome_objeto, descricao, localizacao, data_registro, foto, contato)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        await connection.query(sql, [
            nome_objeto,
            descricao,
            localizacao,
            data_registro || null,
            foto,
            contato
        ]);

        return res.json({ mensagem: "Objeto cadastrado com sucesso!" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ erro: "Erro ao cadastrar objeto" });
    }
});

app.get('/buscar', async (req, res) => {
    try {
        const sql = "SELECT * FROM objeto ORDER BY id_objeto DESC";
        const [rows] = await connection.query(sql);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao buscar objetos" });
    }
});

app.get('/buscar/:limite', async (req, res) => {
    try {
        const limite = Number(req.params.limite);

        const sql = "SELECT * FROM objeto ORDER BY id_objeto DESC LIMIT ?";
        const [rows] = await connection.query(sql, [limite]);

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao buscar objetos" });
    }
});


app.get('/buscar-nome', async (req, res) => {
    try {
        const nome = req.query.nome;

        if (!nome) {
            return res.status(400).json({ erro: "Nome não informado" });
        }

        const sql = "SELECT * FROM objeto WHERE nome_objeto LIKE ?";
        const [rows] = await connection.query(sql, [`%${nome}%`]);

        return res.json(rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ erro: "Erro ao buscar itens" });
    }
});




app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});