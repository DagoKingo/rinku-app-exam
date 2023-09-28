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
const model_1 = __importDefault(require("./model"));
class Trabajador extends model_1.default {
    constructor(nombre = "", numero = "", id_tipo = null) {
        super();
        this.nombre = nombre;
        this.numero = numero;
        this.id_tipo = id_tipo;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.executePoolQuery('CALL sp_get_trabajadores();');
            return response;
        });
    }
    store() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.executePoolQuery('CALL sp_store_trabajador(?,?,?);', [
                this.nombre,
                this.numero,
                this.id_tipo
            ]);
            return response;
        });
    }
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.executePoolQuery('CALL sp_get_roles();');
            return response;
        });
    }
}
exports.default = Trabajador;
//# sourceMappingURL=trabajador.model.js.map