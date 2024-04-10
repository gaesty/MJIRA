from faker import Faker
import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="projet_mjira"
)
cursor = connection.cursor()

fake = Faker(locale="fr_FR")

# cursor.execute("""SELECT * FROM `membre`""")
# rows = cursor.fetchall()

# for _ in range(5):
#     prenom = fake.first_name()
#     nom = fake.last_name()
#     poste = fake.job()
#     mail = fake.email()
#     passwd = fake.password()

#     # Use parameterized queries to insert data safely
#     sql = """INSERT INTO `membre` (`Mail`, `Nom`, `Prenom`, `Password`, `Poste`, `Discriminator`) 
#              VALUES (%s, %s, %s, %s, %s, %s)"""
#     val = (mail, nom, prenom, passwd, poste, '')  # Assuming 'Discriminator' is an empty string here

#     cursor.execute(sql, val)

# # Commit the transaction and close the connection
# connection.commit()
# connection.close()
        
# for i in range(4):
    # nom_projet = fake.word()
    # date_fin = fake.future_date(end_date="+30d")
    # date_debut = fake.future_date(end_date="+1d")
    # sql = "INSERT INTO `projet`( `MembreMail`, `Nom_projet`, `Date_debut`, `Date_fin`) VALUES (%s, %s, %s, %s) "
    # val = ("lucedurand@example.com", nom_projet, date_fin, date_debut)
    # cursor.execute(sql, val)

# Commit the transaction and close the connection
for u in range(10):
    nom_tache = fake.random_element(["Conception", "IHM", "Base de Données", "Test", "Programmation"])
    description = fake.text(max_nb_chars=100)
    date_fin = fake.future_date(end_date="+30d")
    date_debut = fake.future_date(end_date="+1d")
    priorite = fake.random_element(["Basse", "Moyenne", "Haute"])
    statut = fake.random_element(["A Faire", "En Cours", "Terminée"])
    sql = "INSERT INTO `tache`(`MembreMail`, `ProjetID`, `Nom_tache`, `Description_tache`, `Priorite`, `Date_debut`, `Date_fin`, `Statut`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    val = ("aurelieevrard@example.org", 5, nom_tache, description, priorite, date_debut, date_fin, statut)
    cursor.execute(sql, val)

# Commit the transaction and close the connection
connection.commit()
connection.close()