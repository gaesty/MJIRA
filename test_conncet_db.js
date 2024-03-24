import MySqlConnection from 'react-native-my-sql-connection';

async function fetchData() {
    let config = {
        host: 'localhost',
        database: 'projet_mjira',
        user: 'root',
        password: 'root',
        // port: 3306, // optional, default 3306
        // params: '?zeroDateTimeBehavior=convertToNull' // optional
    };

    try {
        const connection = await MySqlConnection.createConnection(config);
        let res = await connection.executeQuery('SELECT * FROM tache');
        console.log(res); // Assuming you want to log the results
        connection.close();
    } catch (err) {
        console.error('Error:', err); // Properly handle or log the error
    }
}

// Call the fetchData function somewhere in your code
fetchData();
