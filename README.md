
# Lore

Bem-vindo ao **Lore**, um projeto desenvolvido para [emanueldsc.github.io/lore/](https://emanueldsc.github.io/lore/). Este repositório contém o código-fonte e a documentação necessários para executar e contribuir com o projeto.

## Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

O **Lore** é uma aplicação web desenvolvida com [Angular](https://angular.io/), utilizando [Sass](https://sass-lang.com/) para estilização e [Marker](https://www.npmjs.com/package/marker) para manipulação de arquivos Markdown. O objetivo do projeto é fornecer uma plataforma para exibir e gerenciar conteúdo de forma eficiente.

## Instalação

Para configurar o ambiente de desenvolvimento local, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/emanueldsc/lore.git
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd lore
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

   > **Nota**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na versão 20.11.1 ou superior, conforme as dependências do projeto.

## Uso

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

```bash
npm start
```

O aplicativo estará disponível em `http://localhost:4200/`. Qualquer alteração no código-fonte resultará em recarregamento automático da página.

## Scripts Disponíveis

No arquivo `package.json`, os seguintes scripts estão disponíveis:

- **`ng`**: Executa o Angular CLI.
- **`prestart`**: Gera links de Markdown antes de iniciar o servidor de desenvolvimento.
- **`prebuild`**: Gera links de Markdown antes de construir o projeto.
- **`start`**: Inicia o servidor de desenvolvimento.
- **`build`**: Constrói o projeto para produção.
- **`build:github`**: Constrói o projeto com a base href configurada para o GitHub Pages.
- **`watch`**: Constrói o projeto em modo de observação para desenvolvimento.
- **`test`**: Executa os testes unitários.

Para executar qualquer um desses scripts, utilize o comando `npm run <nome-do-script>`. Por exemplo:

```bash
npm run build
```

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, siga os passos abaixo:

1. **Fork o repositório**.
2. **Crie uma nova branch**:

   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

3. **Faça as alterações desejadas**.
4. **Commit suas alterações**:

   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```

5. **Envie para o repositório remoto**:

   ```bash
   git push origin feature/nova-funcionalidade
   ```

6. **Abra um Pull Request**.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). 