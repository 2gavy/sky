import React from 'react';

import {
    Button,
    Icon,
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelContainer,
    PanelHeader,
    PanelFooter,
} from '@sketchpixy/rubix';

class DocIdList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h1>{this.props.docList}</h1>
            </div>
        );
    }
}

export default DocIdList