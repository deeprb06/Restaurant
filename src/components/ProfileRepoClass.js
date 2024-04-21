import React from 'react';
import SocialProfileClass from './SocialProfileClass';

class ProfileRepoClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { followers, bio } = this.props.data;
        return (
            <div className="profile-user-card">
                <p className="profile-user-bio">{bio}</p>
                <p className='profile-user-followers'>followers: {followers}</p>
                <SocialProfileClass />
            </div>
        );
    }
}

export default ProfileRepoClass;