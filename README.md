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

```bash
ng build
npm install http-server -g
http-server -p 8080 -c-1 dist/angular_pwa
```

## Platform info

(cdk install is weird, so I tried platform.js)

- https://github.com/bestiejs/platform.js

```bash
npm i --save platform
npm i --save-dev @types/platform
```

## qr code

need the qr code

```bash
npm i qrcodejs
npm install --save @types/qrcodejs
```

```bash
npm install @techiediaries/ngx-qrcode

# or
npm install angularx-qrcode --save
```

- https://medium.com/angular-in-depth/generate-qr-codes-with-angular-10-9305997698df
- https://www.npmjs.com/package/@techiediaries/ngx-qrcode

## Create a Version

```bash
git describe --all --long | cut -d "-" -f 3 > version.txt
```

See current version of this bash file: [git.sh](git.sh)

```bash
GIT_ID=$(git describe --all --long | cut -d "-" -f 3)
echo export const version = \{ number: \"$GIT_ID\" \} > src/app/version.ts
```

```ts
import { version } from "../version";

export class AppComponent {
  constructor() {
    console.log("MyApp version " + version.number);
  }
}
```

## update

SwUpdate service

- https://angular.io/guide/service-worker-communications#updating-to-the-latest-version
- https://www.digitalocean.com/community/tutorials/angular-service-worker-updates

## PWA assets

https://www.npmjs.com/package/pwa-asset-generator

## Resource

- https://angular.io/guide/service-worker-getting-started
- https://hackernoon.com/building-progressive-web-application-pwa-with-angular
- https://blog.briebug.com/blog/angular-progressive-web-application
- https://ionicframework.com/docs/angular/pwa (with ionic firebase)
- https://www.linkedin.com/pulse/build-simple-pwa-from-scratch-html-css-javascript-ishaan-verma/?utm_source=share&utm_medium=member_ios&utm_campaign=share_via
- https://whatpwacando.today/
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
