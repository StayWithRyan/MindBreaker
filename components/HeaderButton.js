import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/colors'

const CustomHeaderButton = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={35}
        color={Colors.headerTextColor} />
}

export default CustomHeaderButton;