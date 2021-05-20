import React from 'react';
import Directory from "../../components/dirtectory/directory";
import "./homepage.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <Directory/>
            </div>
        </div>
    );
};

export default HomePage;
