> [Home](../README.md)

### Sobre a separação do cliente e sua _API_

Quando criamos uma _SPA (Single Page Application)_, é prática comum de mercado, realizar a hospedagem do _front-end_ em um servidor diferente da _API_ consumida por esse servidor.

Aliás, uma mesma aplicação _SPA_ criada com _Vue_ pode consumir uma ou mais _API's_ criadas nas mais diversas linguagens, sejam elas _Python_, _Java_, _C#_, entre outras. O segredo dessa compatibilidade é que essas _API's_ devem seguir o padrão _REST_, um padrão fortemente baseado no protocolo _HTTP_, por isso universal.

Essa separação entre _front-end_ e _API_ permite que a mesma _API_ seja consumida por outros tipos de clientes que não sejam um navegador, como por exemplo, aplicativos feitos em _Android_ ou até mesmo uma engenhoca construída com _Arduino_ que envia dados de sensores para a _API_.

> [Home](../README.md)