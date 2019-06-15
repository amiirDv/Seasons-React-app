import React from 'react';

const Spinner = props => {
    return(
        <div className="ui active dimmer">
        <div className="ui big text loader">{props.massage}</div>
        </div>
    );
};

Spinner.defaultProps = {
    massage: 'loading..'
};

export default Spinner;