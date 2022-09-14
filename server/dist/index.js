"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const ProductController_1 = require("./controllers/ProductController");
const app = (0, express_1.default)();
const port = 8080;
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
new ProductController_1.ProductRoutes(app, prisma);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map