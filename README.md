# DEV PORTIFÓLIO - DEV PORTIFOLIO


## RESUMO - SUMMARY
### PT - BR
Dev portifólio é um portifólio "single page" feito em react utilizando component stateless + hooks.
O portifólio possui também uma opção de "contato", desenvolvida com nodemailer, onde todos os contatos 
enviados no seu formulário de contato serão enviados para um e-mail de sua preferência.

### EN
Dev portfolio is a "single page" portfolio made in reaction, using the stateless + hooks component.
The portfolio also has a "contact" option, developed with nodemailer, where all contacts
sent in your contact form will be sent to an email of your choice.

## Iniciando - Getting Started

## Instalando dependencias - Install dependencies

`npm install`

## Criando arquivo config.js - Creating config.js file
### PT - BR
Crie o arquivo config.js na raiz do seu projeto, ele irá conter as informações do e-mail que você
deseja receber os contatos. O código deverá ficar assim:
No arquivo server.js, a linha 42 também deve ser alterada com o seu endereço de e-mail.
<pre>
<code>
module.exports = {
    USER: 'seuemail@email.com',
    PASS: 'suasenha'
}
</code>
</pre>

### EN
Create the config.js file at the root of your project, it will contain the information from the email you
want to receive contacts. The code should look like this:
In the server.js file, line 42 must also be changed with your email address.
<pre>
<code>
module.exports = {
    USER: 'youremail@email.com',
    PASS: 'yourpassword'
}
</code>
</pre>

## RODANDO - RUN

### PT - BR
Primeiro, na raiz do projeto e depois no diretório dev/dev_portfolio, execute no terminal:
`npm start`

### EN
First, at the root of the project and then in the dev/ dev_portfolio directory, run in the terminal:
`npm start`

## SE DIVERTA - ENJOY
### PT - BR
Agora fique à vontade para personalizar o portifólio da sua maneira.
### EN 
Now feel free to customize the portfolio your way.

## CRIADO COM - BUILT WITH
- React js
- React Hooks
- NodeMailer
- express
- Materialize CSS
- axios
- sweetAlert
- chart.js
- react-router-dom

