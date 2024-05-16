import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

const ModalForm: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Nom_tache, setNom] = useState('');
    const [MembreMail, setMembreMail] = useState('');
    const [Description_tache, setDescription_tache] = useState('');
    const projetID = 5;
    const [Priorite, setPriorite] = useState('Basse');
    const [Statut, setStatut] = useState('A Faire');
    const [Date_debut, setDate_debut] = useState(new Date());
    const [Date_fin, setDate_fin] = useState(new Date());
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [openEndDatePicker, setOpenEndDatePicker] = useState(false);

    const handleSubmit = async () => {
        const formData = { 
            MembreMail, 
            projetID, 
            Nom_tache, 
            Description_tache, 
            Priorite, 
            Date_debut: Date_debut.toISOString().split('T')[0], 
            Date_fin: Date_fin.toISOString().split('T')[0], 
            Statut 
        };

        try {
            const response = await fetch('http://localhost:3000/api/tache', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log('Succès:', data);
            Alert.alert('Succès', 'Données envoyées avec succès !');
            setModalVisible(false);
        } catch (error) {
            console.error('Erreur:', error);
            Alert.alert('Erreur', 'Erreur lors de l\'envoi des données.');
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Ouvrir le formulaire" onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.textStyle}>×</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalText}>Nom de la tâche :</Text>
                        <TextInput
                            style={styles.input}
                            value={Nom_tache}
                            onChangeText={setNom}
                        />
                        <Text style={styles.modalText}>Email du membre :</Text>
                        <TextInput
                            style={styles.input}
                            value={MembreMail}
                            onChangeText={setMembreMail}
                            keyboardType="email-address"
                        />
                        <Text style={styles.modalText}>Description de la tâche :</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            value={Description_tache}
                            onChangeText={setDescription_tache}
                            multiline
                            numberOfLines={4}
                        />
                        <Text style={styles.modalText}>Priorité :</Text>
                        <Picker
                            selectedValue={Priorite}
                            style={styles.picker}
                            onValueChange={(itemValue) => setPriorite(itemValue)}
                        >
                            <Picker.Item label="Basse" value="Basse" />
                            <Picker.Item label="Moyenne" value="Moyenne" />
                            <Picker.Item label="Haute" value="Haute" />
                        </Picker>
                        <Text style={styles.modalText}>Statut :</Text>
                        <Picker
                            selectedValue={Statut}
                            style={styles.picker}
                            onValueChange={(itemValue) => setStatut(itemValue)}
                        >
                            <Picker.Item label="A Faire" value="A Faire" />
                            <Picker.Item label="En cours" value="En Cours" />
                            <Picker.Item label="Terminée" value="Terminée" />
                        </Picker>
                        <Text style={styles.modalText}>Date de début :</Text>
                        <Button title="Sélectionner la date de début" onPress={() => setOpenStartDatePicker(true)} />
                        <DatePicker
                            modal
                            open={openStartDatePicker}
                            date={Date_debut}
                            mode="date"
                            onConfirm={(date) => {
                                setOpenStartDatePicker(false);
                                setDate_debut(date);
                            }}
                            onCancel={() => {
                                setOpenStartDatePicker(false);
                            }}
                        />
                        <Text style={styles.modalText}>Date de fin :</Text>
                        <Button title="Sélectionner la date de fin" onPress={() => setOpenEndDatePicker(true)} />
                        <DatePicker
                            modal
                            open={openEndDatePicker}
                            date={Date_fin}
                            mode="date"
                            onConfirm={(date) => {
                                setOpenEndDatePicker(false);
                                setDate_fin(date);
                            }}
                            onCancel={() => {
                                setOpenEndDatePicker(false);
                            }}
                        />
                        <Button title="Envoyer" onPress={handleSubmit} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 15,
        paddingLeft: 10,
    },
    textArea: {
        height: 100,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 15,
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
    },
});

export default ModalForm;
