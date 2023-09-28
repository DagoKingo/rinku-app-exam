"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const trabajador_router_1 = require("./routes/trabajador.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use('/api/v1/trabajadores', trabajador_router_1.TrabajadorRouter);
const port = process.env.PORT || 2002;
app.listen(port, () => {
    console.log(`worker ${process.pid} listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map