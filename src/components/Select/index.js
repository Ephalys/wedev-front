import React, {Component} from 'react';
import ReactSelect from 'react-select'
const customStyles = {
    indicatorsContainer: () => ({
        // none of react-select's styles are passed to <Control />
        backgroundColor: '#f1f1f1',
        borderColor: 'transparent'
    }),
    control: (provided) => ({
        ...provided,
        // none of react-select's styles are passed to <Control />
        backgroundColor: '#f1f1f1',
        borderColor: 'transparent',
        cursor: 'pointer',
        '&:hover': {
            borderColor: 'transparent',
        }
    }),
};

class Select extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="">{this.props.label}</label>
                <ReactSelect
                    styles={customStyles}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: '#2ECC71',
                        },
                    })}
                    options={this.props.values}
                />
            </div>
        );
    }
}

export default Select;