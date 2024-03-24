import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles/style_projet.js' ;

const NavigationItem = ({ source, label, onPress }) => (
  <TouchableOpacity style={styles.navigationItemContainer} onPress={onPress}>
    <Image resizeMode="contain" source={{ uri: source }} style={styles.navItemImage} />
    <View style={styles.navigationItemLabelContainer}>
      <Text>{label}</Text>
    </View>
  </TouchableOpacity>
);

const TaskItem = ({ taskName, dueDate }) => (
  <View style={styles.taskItemContainer}>
    <View style={styles.taskCheckboxContainer} />
    <View style={styles.taskNameContainer}>
      <Text>{taskName}</Text>
    </View>
    <View style={styles.dueDateContainer}>
      <Text>{dueDate}</Text>
    </View>
  </View>
);

const ProjectScreen = () => {
  const navigationItems = [
    {
      source: 'https://cdn.builder.io/api/v1/image/assets/TEMP/47d5b569d4c3aae9bb2092a302349ac456e4e082842c4b565c64a8dd0265bf4d?apiKey=18f62052b067435492d6e194104674e5&',
      label: 'Accueil',
      onPress: () => alert('Accueil Pressed') // A changer pour une redirection à la page souhaitée

    },
    {
      source: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34016c56da58c36605882e4dd98fd72618cf6f038ad9163b05724c6563219a95?apiKey=18f62052b067435492d6e194104674e5&',
      label: 'Explorer',
      onPress: () => alert('Explorer Pressed')
    },
    {
      source: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c11025026ba665f81f24dc5319bd1225d4706633328deac7dd8d0bfca0830a1c?apiKey=18f62052b067435492d6e194104674e5&',
      label: 'Personnel',
      onPress: () => alert('Personnel Pressed')
    },
    {
      source: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2cc8ac7de54148884535aa624df66b9495e1463ec9e957a84b8d58055632ead2?apiKey=18f62052b067435492d6e194104674e5&',
      label: 'Aide',
      onPress: () => alert('Aide Pressed')
    }
  ];

  const tasks = [
    {
      name: 'Create a moodboard for the homepage',
      dueDate: 'Nov 15'
    },
    {
      name: 'Write copy for the about page',
      dueDate: 'Nov 20'
    },
    {
      name: 'Design a new logo',
      dueDate: 'Nov 25'
    },
    {
      name: 'Develop a contact form',
      dueDate: 'Nov 30'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={styles.sideNavContainer}>
          {navigationItems.map((item, index) => (
            <NavigationItem key={index} source={item.source} label={item.label} onPress={item.onPress} />
          ))}
          <TouchableOpacity style={styles.addButtonContainer} onPress={() => alert('Add Task Pressed')}>
            <Text style={styles.buttonText}>Ajouter une tâche</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createProjectButtonContainer} onPress={() => alert('Create Project Pressed')}>
            <Text style={styles.buttonText}>Créer un projet</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.containerRight}>
        <View style={styles.mainContentContainer}>
        <View style={styles.connectedPersonContainer}>
            <Text>Personne Connectée</Text>
          </View>
          <Text style={styles.projectName}>Nom Projet</Text>
          <Text style={styles.deliveryDate}>Date de livraison : </Text>
          <Text style={styles.deliveryDate}>Completion</Text>
          <View style={styles.completionBarContainer}>
            <View style={styles.completionBar} />
          </View>
          <Text>Nombre de tâches à compléter</Text>
          <br></br>
          <Text style={styles.deliveryDate}>Membres</Text>
          <View style={styles.membersContainer}>
            <Image resizeMode="contain" source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b463cd2fb9cb717b2357227483fbe271a29631ef8ae2a7684ff026e9caa57d07?apiKey=18f62052b067435492d6e194104674e5&' }} style={styles.memberImage} />
            {/* Repeat for each member as needed */}
          </View>
          <Text style={styles.deliveryDate}>Tâches</Text>
          {tasks.map((task, index) => (
            <TaskItem key={index} taskName={task.name} dueDate={task.dueDate} />
          ))}
          <View style={styles.viewMoreContainer}>
            <Text>▼ Voir plus ▼</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default ProjectScreen;