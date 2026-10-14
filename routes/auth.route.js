const { Router } = require("express");

const router = Router();

router.post("/auth", (req, res) => {
    const { telefone, senha } = req.query;

    res.json({
        mensagem: "autenticado"
    });
});

router.post("/registrar", (req, res) => {
    res.json({
        mensagem: "Conta criada com sucesso!"
    });
});

router.post("/chat", (req, res) => {
    res.json({
        mensagem: "Mensagem enviada com sucesso!"
    });
});

module.exports = router;