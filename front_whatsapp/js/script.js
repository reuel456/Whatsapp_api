async function realizarRegistro() {
    const apelido = document.getElementById('regApelido').value;
    const senha = document.getElementById('regSenha').value;
    const telefone = document.getElementById('regTelefone').value;

    if (!apelido || !senha || !telefone) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const formData = new FormData();
    formData.append('apelido', apelido);
    formData.append('senha', senha);
    formData.append('telefone', telefone);

    try {
        const resposta = await fetch('http://localhost:3000/registrar', {
            method: 'POST',
            body: formData
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            alert('Sucesso: ' + dados.mensagem);
            document.getElementById('regApelido').value = '';
            document.getElementById('regSenha').value = '';
            document.getElementById('regTelefone').value = '';
        } else {
            alert('Atenção: ' + dados.mensagem);
        }
    } catch (erro) {
        console.error('Erro de conexão:', erro);
        alert('Não foi possível conectar ao servidor da API.');
    }
}

async function realizarLogin() {
    const telefone = document.getElementById('loginTelefone').value;
    const senha = document.getElementById('loginSenha').value;

    const url = `http://localhost:3000/auth?telefone=${telefone}&senha=${senha}`;

    try {
        const resposta = await fetch(url, {
            method: 'POST'
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            alert('Login efetuado: ' + dados.mensagem);
        } else {
            alert('Falha no login: ' + dados.mensagem);
        }
    } catch (erro) {
        console.error('Erro de conexão:', erro);
        alert('Falha ao comunicar com o servidor.');
    }
}

async function enviarMensagem() {
    const telefoneDestino = document.getElementById('destinatario').value;
    const mensagem = document.getElementById('textoMensagem').value;

    const meuTelefone = '5518999999999';
    const minhaSenhaHash = '5f4dcc3b5aa765d61d8327deb882cf99';

    const url = `http://localhost:3000/chat?telefone=${meuTelefone}&senha_hash=${minhaSenhaHash}`;

    const dadosMensagem = {
        telefone: telefoneDestino,
        mensagem: mensagem
    };

    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosMensagem)
        });

        const dadosRetorno = await resposta.json();

        if (resposta.ok) {
            alert('Status: ' + dadosRetorno.mensagem);
            document.getElementById('textoMensagem').value = '';
        } else {
            alert('Falha: ' + dadosRetorno.mensagem);
        }
    } catch (erro) {
        console.error('Erro na requisição:', erro);
        alert('Erro ao enviar mensagem.');
    }
}