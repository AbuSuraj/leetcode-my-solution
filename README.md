# LeetCode Solutions

Welcome to my LeetCode solutions repository! Below, you'll find solutions to various problems that I've solved on LeetCode using TypeScript and JavaScript.

## LeetCode Profile

Check out my LeetCode profile: [Abu_Suraj on LeetCode](https://leetcode.com/Abu_Suraj/)

 To set up and run this project locally, follow the steps below:
1. Download typeScript from https://www.typescriptlang.org/download

2. **Initialize TypeScript Configuration**

   Run the following command to generate a `tsconfig.json` file:

   ```bash
   tsc --init
3. **Initialize npm Package**

   Run the following command to generate a `package.json` file:

   ```bash
    npm init -y
4. **Install nodemon as a Development Dependency**

  
   ```bash
   npm i -D nodemon
5. **Install ts-node-dev**
  

   ```bash
   npm i ts-node-dev

6. **Update package.json Scripts**

   Add the following line to the "scripts" section in your package.json file:

   ```bash
   "start":  "ts-node-dev --respawn --transpile-only index.ts",
7. **Run TypeScript Files Automatically**

 

   ```bash
     npx ts-node-dev --respawn src/function.ts

 
