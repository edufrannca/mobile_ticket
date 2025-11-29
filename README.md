# Sistema de Senhas – Projeto Ionic / Angular

**Trabalho da disciplina:** Código de Alta Perfomace Mobile

**Integrantes do grupo:**

* Nome: Clailson dos santos silva             Matrícula:  01689159 
* Nome: Gabriel Antônio de Araújo e Sá        Matrícula: 01672540
* Nome: Luiz Eduardo de França Rodrigues      Matrícula: 01680699
* Nome: Matheus Pereira do Nascimento         Matrícula: 01693563

---

## 📌 Sobre o Projeto

Este projeto é um **Sistema de Gerenciamento de Senhas** desenvolvido utilizando **Ionic + Angular**, permitindo o funcionamento básico de um sistema de atendimento real, dividido em três interfaces principais:

### 🟦 1. Totem (Geração de Senhas)

* Usuário escolhe entre três tipos de senhas:

  * **SP** – Prioridade
  * **SE** – Exames
  * **SG** – Geral
* O sistema gera a senha automaticamente e a armazena.

### 🟩 2. Atendente (Chamada de Senhas)

* O atendente seleciona o tipo de senha a chamar.
* Escolhe o número do guichê.
* O sistema chama automaticamente a **próxima senha disponível** daquele tipo.

### 🟥 3. Painel (Exibição de Chamadas)

* Mostra em tempo real:

  * Última senha chamada.
  * Últimas 5 senhas chamadas.
  * Tipo da senha, número e guichê.

---

## 🧩 Arquitetura da Aplicação

O projeto utiliza:

* **Angular Standalone Components** (sem módulos)
* **Serviço central (TicketService)** para armazenar e gerenciar senhas
* **BehaviorSubject** para atualização em tempo real
* **Routing com RouterOutlet**

Estrutura básica:

```
src/
 ├── app/
 │    ├── pages/
 │    │    ├── totem/
 │    │    │     ├── totem.page.ts
 │    │    │     └── totem.page.html
 │    │    ├── atendente/
 │    │    │     ├── atendente.page.ts
 │    │    │     └── atendente.page.html
 │    │    └── painel/
 │    │          ├── painel.page.ts
 │    │          └── painel.page.html
 │    ├── services/
 │    │    └── ticket.service.ts
 │    └── app.routes.ts
 └── main.ts
```

---

## 🚀 Como Executar o Projeto

### 1. Instale as dependências

```
npm install
```

### 2. Rode o servidor de desenvolvimento

```
ionic serve
```

### 3. Acesse no navegador

```
http://localhost:8100
```

---

## 🛠️ Tecnologias Utilizadas

* **Ionic 7**
* **Angular 17**
* **TypeScript**
* **RxJS**
* **HTML / CSS**

---

## 📚 Funcionalidades Implementadas

* Geração de senhas por tipo (Totem)
* Chamada de próxima senha disponível (Atendente)
* Exibição da última e últimas 5 chamadas (Painel)
* Comunicação em tempo real via BehaviorSubject

---

## 📄 Observações Importantes

* Esta é a **primeira versão**: ainda **não possui página de histórico completo**.
* O foco desta versão é demonstrar o funcionamento básico de um sistema de senhas com três perfis.

---

## 📷 Telas Esperadas (Descrição)

### Totem

* Botões grandes e visuais para gerar senhas.

### Atendente

* Seletor de tipo de senha.
* Campo para informar o guichê.
* Botão de chamar.

### Painel

* Mostra a senha mais recente chamada.
* Lista das últimas chamadas.

---

