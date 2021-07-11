import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from "react-native-elements";
import Modal from '../Modal'
import ChangeUserName from '../../components/Acccount/ChangeUserName'
import ChangeUserEmail from '../../components/Acccount/ChangeUserEmail'
import ChangeUserPass from '../../components/Acccount/ChangeUserPass'
import { map } from "lodash";
export default function AccountOptins(props) {
    const [showModal, setShowModal] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null);
    const { userInfo, toastRef, setLoading, setLoadingText } = props;
    //const { photoURL, displayName, email, uid } = userInfo;

    //console.log(menuOptions);
    const selectedComponent = (key) => {
        switch (key) {
            case 'displayName':
                setRenderComponent(
                    <ChangeUserName
                        displayName={userInfo.displayName}
                        setLoading={setLoading}
                        setLoadingText={setLoadingText}
                        toastRef={toastRef}
                        setShowModal={setShowModal}
                    />)
                setShowModal(true);
                break;
            case 'email':
                setRenderComponent(<ChangeUserEmail />)
                setShowModal(true);
                break;
            case 'password':
                setRenderComponent(<ChangeUserPass />)
                setShowModal(true);
                break;
            default:
                break;
        }
    }

    const menuOptions = generateOptions(selectedComponent);

    return (
        <View style={styles.containerView}>
            <Icon
                name='cog'
                type='material-community'
                color='#000000'
                style={styles.iconStyle}
            />
            <Text style={styles.configStyle}>Configuración</Text>
            {menuOptions.map((titles, index) => (

                <ListItem key={index}
                    onPress={titles.onPress}
                    bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title
                            style={
                                { color: 'black' }
                            }

                            chevron
                        >
                            {titles.title}
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron color={'#2a9d8f'} size={20} />
                </ListItem>
            ))}
            {renderComponent && (
                <Modal isVisible={showModal} setIsVisible={setShowModal}>
                    {renderComponent}
                </Modal>)}
        </View>
    )
}
function generateOptions(selectedComponent) {
    return [
        {
            title: 'Cambiar nombre y apellido',
            onPress: () => selectedComponent('displayName')
        },
        {
            title: 'Cambiar correo electrónico',
            onPress: () => selectedComponent('email')
        },
        {
            title: 'Cambiar contraseña',
            onPress: () => selectedComponent('password')
        }
    ]

}
const styles = StyleSheet.create({
    containerView: {
        top: '-5%',
        left: '10%',
        backgroundColor: '#0000',
        height: '25%',
        width: '80%',
    },
    iconStyle: {
        paddingRight: '85%'
    },
    configStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        top: -22,
        paddingLeft: '13%'
    },
    list: {
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3',
    }
})
