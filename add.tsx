    const addData = async () => {
        if (nom === "" || tel === "" || email === "" || pharmacie === "" || password==="") {
            Alert.alert("Erreur", "Veuillez remplir tous les champs");
            return;
        }
    
    
        try {
            await set(ref(db, 'User/' + nom), {
                nom : nom , 
                telephone : tel , 
                email : email , 
                entreprise : pharmacie , 
                mot_de_passe : password ,
                status: "enable",
            });

            Alert.alert("Succès", "Les données ont été ajoutées");
    
            setNom('');
            setTel('');
            setEmail('');
            setPharmacie('');
        } catch (error) {
            Alert.alert("Erreur", "Échec de l'ajout des données. Vérifiez votre connexion Internet et réessayez.");
        }
    }
