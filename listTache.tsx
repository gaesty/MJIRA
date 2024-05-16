import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Task {
    ID: number;
    MembreMail: string;
    ProjetID: number;
    Nom_tache: string;
    Description_tache: string;
    Priorite: string;
    Date_debut: string;
    Date_fin: string;
    Statut: string;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/tache');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des tâches:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Chargement...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Text style={styles.taskTitle}>{item.Nom_tache}</Text>
                        <Text>Email: {item.MembreMail}</Text>
                        <Text>Projet ID: {item.ProjetID}</Text>
                        <Text>Description: {item.Description_tache}</Text>
                        <Text>Priorité: {item.Priorite}</Text>
                        <Text>Date de début: {new Date(item.Date_debut).toLocaleDateString()}</Text>
                        <Text>Date de fin: {new Date(item.Date_fin).toLocaleDateString()}</Text>
                        <Text>Statut: {item.Statut}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    taskContainer: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TaskList;
