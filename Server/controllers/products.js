import Product from '../models/products'
// const products = [
//     {id:1,name:"Product 1"},
//     {id:2,name:"Product 2"}
// ]


// list sản phẩm
export const listProduct = async (request, response) => {
    try {
        const product = await Product.find().exec()
        response.json(product)
        // response.json(products)
    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
}


export const listProductDetail = async (request, response) => {
    const product = await Product.findById({ _id: request.params.id }).exec()
    response.json(product)
}

// thêm sản phẩm
export const createProduct = async (request, response) => {
    try {
        const product = await Product((request.body)).save()
        response.json(product)
        // response.json(products)
    } catch (error) {
        response.status(400).json({ message: "Khong the tao moi" })
    }
    // products.push(request.body)
    // response.json(products)
}

// xóa sản phẩm
export const deleteProduct = async (request, response) => {
    try {
        const product = await Product.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(product);
    } catch (error) {
        response.status(400).json({ message: "ko xóa dc" })
    }

}
export const updateProduct = async (request, response) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: request.params.id }, request.body)
        response.json(product);
    } catch (error) {
        response.status(400).json({ message: "ko sửa được" })
    }
}

export const searchProduct = async (req, res) => {
    try {
        const product = await Product.find({ 'name': new RegExp(req.params.name, 'i') }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Không thể tìm thấy Product" });
    }
}