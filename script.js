document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado por entrar em contato, ${nome}! Sua mensagem foi enviada, e pretendo respondela o mais rapido possivel.`);
    
    // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário.
    
    // Limpar o formulário
    this.reset();
});