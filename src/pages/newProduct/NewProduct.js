import './newProduct.css'

const NewProduct = () => {


    return (
        <div className={'newProduct'}>
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id={'newProductFile'}/>
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder={'Apple Airpods'}/>
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder={'123'}/>
                </div>
                <div className="addProductItem">
                    <select name="active" id="newProductActive">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
};

export default NewProduct