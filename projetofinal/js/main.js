/* * Seu JavaScript customizado (ES6+)
 * * Este script é carregado em todas as páginas.
 * Usamos 'DOMContentLoaded' para garantir que o script só rode
 * depois que todo o HTML da página foi carregado.
 */

// Espera o DOM (a página) ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA A PÁGINA DE CHECKOUT ---
    
    // 1. Tenta encontrar o formulário de checkout e a mensagem de sucesso
    const formCheckout = document.getElementById('form-checkout');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    // 2. Se o formulário de checkout EXISTIR nesta página, adicione a lógica
    if (formCheckout) {
        
        // Adiciona um "ouvinte" para o evento de 'submit' (envio)
        formCheckout.addEventListener('submit', function(event) {
            
            // 3. Impede o comportamento padrão do formulário (que é recarregar a página)
            event.preventDefault(); 
            
            // 4. Verifica se o formulário é válido (o Bootstrap e o 'required' do HTML fazem o trabalho pesado)
            // Se algum campo 'required' não foi preenchido, o 'checkValidity()' retorna 'false'
            // e o próprio navegador/Bootstrap mostrará o erro.
            if (formCheckout.checkValidity()) {
                
                // Se o formulário for válido:
                // 5. Esconde o formulário
                formCheckout.style.display = 'none';
                
                // 6. Mostra a mensagem de sucesso (que estava com 'display: none')
                mensagemSucesso.style.display = 'block';

                // 7. (Opcional) Rola a página para o topo para o usuário ver a mensagem
                window.scrollTo(0, 0);

            } else {
                // 8. Se for inválido, o Bootstrap 5 já tem estilos de validação.
                // Apenas adicionamos a classe 'was-validated' para forçar a exibição
                // dos estilos de feedback (campos verdes/vermelhos).
                formCheckout.classList.add('was-validated');
            }
        });
    }


    // --- LÓGICA PARA A PÁGINA DE CONTATO ---

    // 1. Tenta encontrar o formulário de contato
    const formContato = document.getElementById('form-contato');

    // 2. Se o formulário de contato EXISTIR nesta página, adicione a lógica
    if (formContato) {
        
        formContato.addEventListener('submit', function(event) {
            
            // 3. Impede o recarregamento da página
            event.preventDefault();

            // 4. Verifica a validade
            if (formContato.checkValidity()) {
                
                // Se for válido:
                // 5. Mostra um alerta simples de sucesso
                alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
                
                // 6. Limpa os campos do formulário
                formContato.reset();
                
                // 7. Remove a classe de validação (para limpar os estilos verdes/vermelhos)
                formContato.classList.remove('was-validated');

            } else {
                // 8. Se for inválido, força a exibição dos erros
                formContato.classList.add('was-validated');
            }
        });
    }

});