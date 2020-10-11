"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
var add = function (num1, num2) { return num1 + num2; };
app.get("/", function (req, res, next) {
    console.log(add(1, 5));
    res.send("Hi There");
});
app.listen(5000, function () {
    console.log('server listening on port 5000');
});
