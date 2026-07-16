const fs = require("fs");

const content = `Hello from GitHub Actions
Created at: ${new Date().toISOString()}/n
Testing the workflow/n Eric was here/n Hello from GitHub Actions/n
`;

fs.writeFileSync("output.txt", content);

console.log("Created output.txt");