"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dependencias instaladas, express, tipos do express, adicionamos o typescript em modo de desenvolvimento
// e demos um yarn tsc --init para gerar o arquivo de configuração do typescript
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (request, response) {
    return response.json({ message: "Hello World!" });
});
app.listen(3333);
