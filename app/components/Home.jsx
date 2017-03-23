import React, { createClass } from 'react';
import Users from 'app/components/users';
import Requests from 'app/components/requests';

const Home = createClass({
    displayName: 'Home',
    
    render() {
        const { onClickUser, selectedUser, usersList } = this.props;

        return (
            <div>
                <div className="home__banner">
                    <div className="home__logo-image" />
                    <h1 className="home__banner-heading">App Name</h1>
                    <div className="home__tagline">Tagline</div>
                </div>
                <Users
                    onClickUser={onClickUser}
                    selectedUser={selectedUser}
                    usersList={usersList}
                />
                <Requests />
            </div>
        );
    }
});

export default Home;
