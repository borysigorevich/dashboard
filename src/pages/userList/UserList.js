import './userList.css'
import {DataGrid} from '@material-ui/data-grid'
import {DeleteOutline} from '@material-ui/icons'
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {useState} from "react";

const UserList = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = id => {
        setData(data.filter(user => user.id !== id))
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'user', headerName: 'Username', width: 140, renderCell: (params) => {
                return (
                    <div className={'userListUser'}>
                        <img className={'userListImg'} src={params.row.avatar} alt=""/>
                        {params.row.username}
                    </div>
                )
            }
        },
        {field: 'email', headerName: 'Email', width: 200},
        {field: 'status', headerName: 'Status', width: 130},
        {
            field: 'transaction',
            headerName: 'Transaction',
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
                        <Link to={'/user/' + params.row.id}>
                            <button className={'userListEdit'}>Edit</button>
                        </Link>
                        <DeleteOutline
                            className={'userListDelete'}
                            onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];

    return (
        <div className={'userList'}>
            <DataGrid columns={columns} disableSelectionOnClick={true} rows={data} pageSize={8} checkboxSelection/>
        </div>
    );
};

export default UserList
