import './newUser.css'

const NewUser = () => {

    return (
        <div className={'newUser'}>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder={'borysigorevich'}/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder={'Boris Kutsenko'}/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder={'boris@gmail.com'}/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder={'+380976586379'}/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder={'Kiev'}/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className={'newUserGender'}>
                        <input type="radio" name={'gender'} id={'male'} value={'male'}/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name={'gender'} id={'female'} value={'male'}/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name={'gender'} id={'other'} value={'other'}/>
                        <label htmlFor="other">Other</label>
                    </div>
                    <button className={'newUserButton'}>Create</button>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className={'newUserSelect'} name={'active'} id={'active'}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default NewUser