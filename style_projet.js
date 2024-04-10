import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    containerLeft: {
      flex: 1,
      width: '25%',
      backgroundColor: '#FFF',
      minWidth: 170,
      maxWidth: 170,
    },
    containerRight: {
      flex: 3,
      backgroundColor: '#FFF',
      minWidth: 400,
    },
    sideNavContainer: {
      padding: 20,
    },
    navigationItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
      marginTop: 10,
    },
    navItemImage: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    navigationItemLabelContainer: {
      flexGrow: 1,
    },
    addButtonContainer: {
      backgroundColor: '#001787',
      alignItems: 'center',
      padding: 10,
      marginTop: 340,
      width: 130,
      borderRadius: 10,
    },
    createProjectButtonContainer: {
      backgroundColor: '#001787',
      alignItems: 'center',
      padding: 10,
      marginTop: 13,
      width: 130,
      borderRadius: 10,
    },
    buttonText: {
      color: '#FFF',
    },
    mainContentContainer: {
      padding: 20,
    },
    projectName: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    deliveryDate: {
      fontSize: 16,
      color: '#4F6696',
      marginBottom: 16,
    },
    connectedPersonContainer: {
      padding: 6,
      backgroundColor: '#E8EBF2',
      marginBottom: 16,
      alignSelf: "flex-end",
    },
    completionBarContainer: {
      backgroundColor: '#D1D6E8',
      padding: 2,
      flexDirection: 'row',
      marginBottom: 8,
    },
    completionBar: {
      backgroundColor: '#001787',
      height: 8,
      width: '50%',
    },
    membersContainer: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    memberImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginRight: 8,
    },
    taskItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    taskCheckboxContainer: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#D1D6E8',
      marginRight: 8,
    },
    taskNameContainer: {
      flexGrow: 1,
    },
    dueDateContainer: {},
    viewMoreContainer: {
      alignItems: 'center',
      marginTop: 12,
    },
  });

export default styles;