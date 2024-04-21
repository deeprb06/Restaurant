import React from 'react';
import { SiLinkedin, SiTwitter, SiGmail, SiGithub } from 'react-icons/si'
import { SOCIAL_URL } from '../constants/common';

class SocialProfileClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="social-media-container">
                <a
                    href={SOCIAL_URL.LINKEDIN}
                    className="icon-button linkedin"
                    target="_blank"
                >
                    <i>
                        <SiLinkedin />
                    </i>
                </a>
                <a
                    href={SOCIAL_URL.TWITTER}
                    className="icon-button twitter"
                    target="_blank"
                >
                    <i>
                        <SiTwitter />
                    </i>
                </a>
                <a
                    href={SOCIAL_URL.GITHUB}
                    className="icon-button github"
                    target="_blank"
                >
                    <i>
                        <SiGithub />
                    </i>
                </a>
                <a href={SOCIAL_URL.GMAIL} className="icon-button email">
                    <i>
                        <SiGmail />
                    </i>
                </a>
            </div>
        );
    }
}

export default SocialProfileClass
