const http = require("node:http");

const server = http.createServer((req,res) => {
    const employee = {
        name:"kunika",
        company: "Paxcom"
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(employee));

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})