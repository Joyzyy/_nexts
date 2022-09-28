# ❓ Overview
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features
- 💎 Next.js **12.2**
- ⚛️ React.js **18**
- 🔮 **Chakra-UI**: *for the general styling of components*
- 🎁 **MongoDB**: *storing data in a cool way*
- ⚙️ **Amazon S3 Bucket**: *storing images*
- ⚙️ **GoLang** backend for blazing fast responses (~35ms/req)
- 🌈 .prettier for consistent code style
- ⚙️ ExpressJS - *backend*

## Motivation
I wanted to learn all about front-end development, and during this project I can confidently say that I learned the following:
- Proficiency with React.js/Next.js
- Proficiency with Typescript
- Working with REST API
- Working with SSR, SSG
- Working with databases (Firebase, but then i switched to MongoDB as i wanted to create my own backend in Golang with the [GIN framework](https://github.com/gin-gonic/gin))
- Working with AWS Services (S3 Bucket)

# 👀 Demo
The app will be hosted on VERCEL.
## Images:
![LandingPage](https://i.imgur.com/XTgaqwm.png)

# 🚀 Quickstart
In order to get started you need to run the following commands in your terminal:
```bash
git clone https://github.com/Joyzyy/NEXTS.git .
yarn install
yarn run dev
```

# 📘 Modules
## Typescript
TypeScript and Babel are pre-configured with custom module resolvers. This means you can use absolute imports with custom namespaces by default for the following modules:
```ts
import { Component } from '@/components/...'
import { Lib } from '@/lib/...'
import { Hook } from '@/hooks/...'
import { Constant } from '@/constants/...'
```
