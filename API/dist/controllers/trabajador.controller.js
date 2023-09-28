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
const controller_1 = __importDefault(require("./controller"));
const trabajador_model_1 = __importDefault(require("../models/trabajador.model"));
class TrabajadorController extends controller_1.default {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new trabajador_model_1.default();
            return model.get();
        });
    }
    store(nombre, numero, id_tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new trabajador_model_1.default(nombre, numero, id_tipo);
            return model.store();
        });
    }
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new trabajador_model_1.default();
            return model.getRoles();
        });
    }
}
exports.default = TrabajadorController;
//# sourceMappingURL=trabajador.controller.js.map