import React from 'react';

import { withFirebase} from '../Firebase';

class AdminPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            users: []
        }
    }

    componentDidMount() {
        this.setState({ loading : true })

        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val()
            
            console.log(usersObject)
            console.log(Object.keys(usersObject))
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key
            }))
            this.setState({
                users: usersList,
                loading: false
            })
        })
    }

    componentWillUnmount() {
        this.props.firebase.users().off()
    }

    render() {
        const { users, loading } = this.state
        return (
            <div>
                <h1>Admin</h1>

                {loading&& <div> Loading ...</div>}
                <UserList users={users} />
                
            </div>
        )
    }
}

const UserList = ({ users }) => {
    //console.log(users);
    return(
    <ul key={users.uid}>
        {users.map(user =>
        <li>
            <span>
                <strong>ID:</strong> {user.uid + ' '}
            </span>
            <span>
                <strong>Email:</strong> {user.email} 
            </span>
        </li>
        )}
    </ul>
)}

export default withFirebase(AdminPage);