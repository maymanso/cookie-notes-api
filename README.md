## Cook Notes 📝 

* [Sobre](#cook-notes-📝)
* [Documentação]()
* [Requisitos](#📋-requisitos)
* [Iniciando](#🚀-iniciando)

Projeto desenvolvido como conclusão do Bootcamp Fullstack da [IronHack](https://www.ironhack.com/br). Projeto divido em duas partes: back-end e front-end. 

O cookie notes foi pensado para ser uma rede social que compartilha receitas e que você pode ter em mãos todas as receitas que você mais gosta. Você consegue criar novas ou trazer receitas de outras plataformas; procurar receitas por sabor, tipo, nivel, se é vegana ou vegetariana, por custo e datas comemorativas. Dessa maneira as receitas ficam todas em um só lugar. 

## Documentação 🗂

_Esse projeto é a parte do back-end_

Essa aplicação foi desenvolvida em Node.js, Javascript e com MongoDB.

A documentação é baseada no modelo de documentação _C4 model_ (Contexto, Container, Componentes e Código), [aqui](https://drive.google.com/file/d/1WiV5-jKWPyzHOaDLopGsXFQNceh4eaat/view?usp=sharing) você consegue visualizar os diagramas. Os diagramas somente não possuem mais detalhamaneto do código, pois não vi necessidade já que estamos falando de uma aplicação simples, por emquanto. 

* [Documentação de rotas](https://documenter.getpostman.com/view/12294332/2sA3XTeL2k)

## 🚀  Iniciando

### 📋  Requisitos

Necessário ter instalado na máquina:
* MongoDB
    * [MongoDB download](https://www.mongodb.com/docs/manual/installation/)
* node
   * rode o comando: `$ brew install node ` ou [Node download](https://nodejs.org/pt/download/package-manager)


Essas intruções permitirão que você obtenha uma cópia do projeto na sua máquina e rode a aplicação localmente. 

* clone esse diretório na sua máquina
```
git clone https://github.com/maymanso/cookie-notes-api.git && cd cookie-notes-api
```

* Instale os paotes necessários
```
npm i
```

* Iniciar service do mongodb
```
 brew services start mongodb-community
```

* Rodar localmente use:
```
$ npm run dev
```



