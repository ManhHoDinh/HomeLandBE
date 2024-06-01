## NOTE
There are some services and APIS we can only use with free amount, please register these service on you own and replace the api key inside  [.env.example](.env.example)
:

* https://guides.platerecognizer.com/docs/snapshot/api-reference
* https://supabase.com
* Postgresql and Redis (we recommend using on [Render](https://render.com/)) 
  
  * Render: free, host sleeps automatically, configuration is better than heroku, host is close.

  * Heroku: free for a certain time, easy to debug, easy to deploy, remote host.

## HOW TO BUILD
```bash
# clone repository
$ git clone https://github.com/ManhHoDinh/HomeLandBE.git
$ cd HomeLandBE

# install dependencies
$ npm install

# pull necessary images
$ docker compose pull

# rename .env.example to .env
# you might change some variable if you need to connect to real redis, postgresql or supabase project
$ cp .env.example .env
```


## HOW TO RUN
```bash
# docker compose include redis and postgresql
# if your local machine have redis or postgresql, please turn off all in order to run properly
$ docker compose up -d

# start supabase local
$ npx supabase start

# start nestjs
$ npm run start:dev

# you might need to send HTTP GET to this endpoint to create empty database and S3 storage:
http://localhost:3000/seed/init
```

# HOW TO CLOSE (GRACEFULLY)

On terminal where Nestjs running press ```Ctrl + C```
```bash
# stop docker containers
$ docker compose stop

# stop supabase
$ npx supabase stop
```


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[NestJS](https://github.com/nestjs/nest) is a powerful and flexible framework built on Node.js, using TypeScript and inspired by software architectures like Angular. NestJS helps developers build efficient, scalable, and maintainable server-side applications.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

NestJS is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Key Features of NestJS
* TypeScript First: NestJS is built with TypeScript, offering strong typing and robust type safety. However, you can still use JavaScript if you prefer.

* Modular Architecture: NestJS encourages a modular architecture, organizing the code into independent, manageable logic units.

* Decorators and Metadata: NestJS leverages TypeScript decorators to define and configure application components, creating clear and understandable code.

* DI (Dependency Injection): NestJS uses a powerful Dependency Injection (DI) mechanism, making it easy to manage application dependencies.

* Easy Integration: NestJS can easily integrate with other Node.js libraries and frameworks, such as Express or Fastify.

* MVC Support: NestJS supports the MVC (Model-View-Controller) pattern, facilitating the construction of web applications with clear and structured code.

* Extensibility: NestJS can be extended using middleware, guards, pipes, and interceptors, providing control over the request/response cycle and enhancing application security.
## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/docs/vercel-platform) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
## 💕 Thanks
This project almost completed like a real estate brokerage market. However developed by developer team who is still university students and have not enough experiences, this project maybe has some problem. You can visit our deploy website for more experience. Thank you for visiting our project.

I deeply appreciate every member of this team for showing relentless effort for this project.

## Additional information

Develop by:
 [Hồ Đình Mạnh - 21522327](https://github.com/ManhHoDinh) 
 Email: 21522327@gm.uit.edu.vn

 [Nguyễn Phước Hưng - 21520252](https://github.com/phuochungus) 
 Email: 21520252@gm.uit.edu.vn

 [Võ Công Bình - 21521880](https://github.com/vocongbinh) 
 Email: 21521880@gm.uit.edu.vn

 [Đinh Đại Dương - 21521986](https://github.com/Daiduong1593572468) 
 Email: 21521986@gm.uit.edu.vn

 [Nguyễn Thị Kim Ngân - 20520915](https://github.com/Ngan1808)
 Email: 20520915@gm.uit.edu.vn

Link reference to FE: [Homeland](https://github.com/ManhHoDinh/HomeLand.git)
