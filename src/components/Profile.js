import React from 'react';
import ProfileRepoClass from './ProfileRepoClass';
import ProfileUserClass from './ProfileUserClass';
import { GITHUB, options } from '../constants/common';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: '',
                login: '',
                html_url: '',
                avatar_url: '',
                followers: ''
            },
        };
    }

    async componentDidMount() {
        const response = await fetch(
            `${GITHUB.API_URL}${GITHUB.USERNAME}`,
            options,
        );
        const data = await response.json();
        this.setState({
            userInfo: data,
        });
    }

    render() {
        const { userInfo } = this.state;
        return (
            <div className="profile-class-container">
                <div className="profile-container">
                    <h1 className="profile-title">About Me</h1>
                    <ProfileUserClass data={userInfo} />
                </div>
                <div className="repo-container">
                    <h1 className="repo-title">
                        Food<span>Five</span> App 
                    </h1>
                    <ProfileRepoClass data={userInfo} />
                </div>
            </div>
        );
    }
}

export default Profile;
