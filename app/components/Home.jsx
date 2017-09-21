import React, { createClass } from 'react';
import Users from 'app/components/users';

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
                <div className="home__main-container">
                    <Users
                        onClickUser={onClickUser}
                        selectedUser={selectedUser}
                        usersList={usersList}
                    />
                </div>
            </div>
        );
    }
});

export default Home;
