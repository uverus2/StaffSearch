import React from 'react';
import Example from 'Components/Example/Example';

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Example />
            </>
        );
    }
}

// OR 

const HomepageUsingHooks = () => {
    return (
        <>
            <Example />
        </>
    );
};

export default Homepage;

export { 
    Homepage, 
    HomepageUsingHooks
};