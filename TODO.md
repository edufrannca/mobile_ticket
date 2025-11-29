# TODO – Sistema de Controle de Atendimento (Versão Inicial)

Este arquivo lista todas as tarefas pendentes, melhorias futuras e pontos opcionais de expansão do sistema de controle de atendimento.

---

## ✅ Concluído na Versão Atual
- Estruturação inicial do projeto Ionic + Angular.
- Criação das páginas principais:
  - Totem (geração de senhas)
  - Atendente (chamada de senhas)
  - Painel (exibição das últimas senhas)
- Serviço central de gerenciamento de senhas (TicketService):
  - Geração de senhas SP, SG e SE.
  - Controle de fila.
  - Emissão de ticket atual.
- Navegação básica entre páginas.
- Exibição do painel com últimas senhas chamadas.

---

## 📌 A Fazer (TO-DO)

### 1. Melhorias no TicketService
- [ ] Implementar variação de tempo médio (TM) por tipo de senha.
- [ ] Implementar regra de alternância obrigatória:  
  **SP → (SE ou SG) → SP → ...**
- [ ] Implementar descarte automático de 5% das senhas (não atendidas).
- [ ] Criar sistema interno de filas distintas para SP, SG e SE.
- [ ] Implementar lógica completa de priorização conforme requisitos.
- [ ] Implementar encerramento de expediente às 17h com descarte de senhas restantes.

### 2. Funcionalidades do Painel
- [ ] Exibir sempre as 5 últimas senhas chamadas.
- [ ] Criar animação ou alerta visual ao chamar nova senha.
- [ ] Configurar atualização automática.

### 3. Funcionalidades da Página Atendente
- [ ] Exibir fila atual de cada tipo.
- [ ] Permitir selecionar guichê do atendente.
- [ ] Mostrar resumo do último chamado.

### 4. Funcionalidades do Totem
- [ ] Criar telas mais amigáveis com imagens e ícones.
- [ ] Implementar som ao gerar senha.
- [ ] Exibir número da senha gerada na hora.

### 5. Persistência de Dados
- [ ] Salvar histórico em LocalStorage ou IndexedDB.
- [ ] Criar adaptação opcional para API backend.

### 6. Relatórios (Requisito do Projeto)
- [ ] Relatório diário (senhas emitidas, atendidas, por tipo, TM etc.).
- [ ] Relatório mensal.
- [ ] Exportar relatórios em PDF.
- [ ] Listagem detalhada com horários e guichês.

### 7. Interface e Usabilidade
- [ ] Criar design mais consistente (tema, espaçamento, cores).
- [ ] Melhor responsividade no celular.
- [ ] Adicionar modo TV para o painel.

### 8. Extras sugeridos
- [ ] Criar animação de \"chamada\" no painel.
- [ ] Criar simulação automática da fila para testes.
- [ ] Criar testes unitários (Jasmine/Karma).
- [ ] Criar testes E2E (Cypress).

---

## 💡 Possíveis Melhorias Futuras
- Integração com banco de dados real.
- Suporte a múltiplos painéis simultâneos.
- Modo administrador com dashboards.
- Gráficos de desempenho e métricas do atendimento.

---

Se quiser, posso gerar também:

📌 **ROADMAP.md**  
📌 **CHANGELOG.md**  
📌 **CONTRIBUTING.md**  
📌 **LICENSE (MIT)**

Só pedir!  
