"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const port = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Yoooooooo!');
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
