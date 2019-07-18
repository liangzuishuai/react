import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';//加工son组件，从而传入count数据

class Son extends React.Component{
    static propTypes = {
        count : PropTypes.number.isRequired
    }
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}
export default connect((state)=>{return {count:state}})(Son)