import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';

/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const BasicEditConfig = {
    emptyLabel: 'Basic',

    isEmpty: function (props) {
        return !props || !props.text;
    }
};

class Basic extends Component {
    render() {
        return (
            <div>
                Test: {this.props.linkURL}
            </div>
        );
    }
}

export default MapTo('aem-react-simple-example/components/basic')(
    Basic,
    BasicEditConfig
  );
  