const fs = require("fs");

fs.mkdirSync("./output", { recursive: true });

fs.writeFileSync("./output/hello.txt", "Hello from GitHub Actions!");

const content = `Hello from GitHub Actions
Created at: ${new Date().toISOString()}/n
Testing the workflow/n Eric was here/n Hello from GitHub Actions/n
`;

fs.writeFileSync("./output/hello.txt", content);

console.log("Created output/hello.txt");