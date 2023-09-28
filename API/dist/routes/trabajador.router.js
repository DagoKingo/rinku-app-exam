"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabajadorRouter = void 0;
const express_1 = require("express");
const trabajador_controller_1 = __importDefault(require("../controllers/trabajador.controller"));
const router = (0, express_1.Router)();
exports.TrabajadorRouter = router;
const controller = new trabajador_controller_1.default();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield controller.get();
    res.status(200).json(result);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, numero, id_tipo } = req.body;
    const result = yield controller.store(nombre, numero, id_tipo);
    res.status(200).json(result);
}));
router.get('/roles', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield controller.getRoles();
    res.status(200).json(result);
}));
//# sourceMappingURL=trabajador.router.js.map