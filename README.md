# Angular PWA

setup

```bash
ng new angular_pwa --routing true --style scss
```

add angular pwa

```bash
ng add @angular/pwa
# ng add @angular/pwa --project angular_pwa
```

```bash
ng build
```

```bash
ng build
http-server -p 8080 -c-1 dist/angular_pwa
```

```bash
npm install @angular/cdk
```

http-server install and use

```bash
npm install http-server -g
http-server -p 8080 -c-1 dist/<project-name>
```

## Platform info

(cdk install is weird)

- https://github.com/bestiejs/platform.js

```bash
npm i --save platform
npm i --save-dev @types/platform
```

## Resource

- https://angular.io/guide/service-worker-getting-started
- https://hackernoon.com/building-progressive-web-application-pwa-with-angular
- https://blog.briebug.com/blog/angular-progressive-web-application
- https://ionicframework.com/docs/angular/pwa (with ionic firebase)
