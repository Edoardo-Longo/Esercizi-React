import react from 'react';

class DisplayLanguage extends react.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default DisplayLanguage