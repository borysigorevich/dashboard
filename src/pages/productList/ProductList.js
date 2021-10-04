import './productList.css'
import {DataGrid} from "@material-ui/data-grid";
import {DeleteOutline} from '@material-ui/icons'
import {productRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {useState} from "react";

const ProductList = () => {
    const [data, setData] = useState(productRows)

    const handleDelete = id => {
        setData(data.filter(user => user.id !== id))
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'product', headerName: 'Product', width: 140, renderCell: (params) => {

                return (
                    <div className={'productListUser'}>
                        <img className={'productListImg'} src={params.row.img} alt=""/>
                        {params.row.name}
                    </div>
                )
            }
        },
        {field: 'stock', headerName: 'Stock', width: 200},
        {field: 'status', headerName: 'Status', width: 130},
        {
            field: 'price',
            headerName: 'Price',
            description: 'This column has a value getter and is not sortable.',
            width: 160
        },
        {
            field: 'actions',
            headerName: 'Action',
            width: 150,
            renderCell: params => {
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
                            <button className={'userListEdit'}>Edit</button>
                        </Link>
                        <DeleteOutline
                            className={'productListDelete'}
                            onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];

    return (
        <div className={'productList'}>
            <DataGrid columns={columns}
                      disableSelectionOnClick={true}
                      rows={data}
                      pageSize={8}
                      checkboxSelection/>
        </div>
    );
};

export default ProductList