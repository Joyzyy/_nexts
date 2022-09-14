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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
class ProductController {
    constructor(prisma) {
        this.prisma = prisma;
        /* TODO - replace Promise<any> */
        this.GetProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const products = yield this.prisma.product.findMany();
            res.json(products);
        });
        this.GetProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const params = req.params;
            yield this.prisma.product
                .findFirst({
                where: {
                    name: params.name,
                },
            })
                .then((product) => {
                res.json(product);
            })
                .catch((err) => {
                res.json({
                    error: err,
                });
            });
        });
        this.CreateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, description, price, image, sizes, tabtype } = req.body;
            yield this.prisma.product
                .create({
                data: {
                    name,
                    description,
                    price,
                    image,
                    sizes,
                    tabtype,
                },
            })
                .then((newProduct) => {
                res.json(newProduct);
            });
        });
    }
}
class ProductRoutes extends ProductController {
    constructor(app, prisma) {
        super(prisma);
        app.get('/api/products', this.GetProducts);
        app.post('/api/products', this.CreateProduct);
        app.get('/api/products/:name', this.GetProduct);
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=ProductController.js.map