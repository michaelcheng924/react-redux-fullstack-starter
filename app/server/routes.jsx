import productRoutes from 'server/products';

export default function routes(app) {
    app.use('/products', productRoutes);
}
