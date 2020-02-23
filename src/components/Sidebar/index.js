import React, {Component} from 'react';
import './sidebar.scss'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu : [
                'Dashboard',
                'Clients',
                'Projects',
                'Blahblah'
            ]
        };
    }
    render() {
        return (
            <div className="sidebar">
                <ul>
                    {
                        this.state.menu.map(function(item, i){
                            return <li key={i}><a href="">{item}</a></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Sidebar;