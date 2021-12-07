import React from 'react';
import './Sidebar.css'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return(    
        <View className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/Procurements">Procurements</a></li>
            </ul>
        </View>  
    )
}

export default sideDrawer;