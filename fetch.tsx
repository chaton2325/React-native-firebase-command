    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `User`));
      if (snapshot.exists()) {
        const users = snapshot.val();
        for (const userId in users) {
          if (
            users[userId].email === email &&
            users[userId].password === password
          ) {
            if (users[userId].status === 'enable') {
              setLoading(false);
              Alert.alert('Connexion réussie', 'Connecté avec succès');
              onLoginSuccess(email);
              ident.setEmail(email);
              ident.setpassword(password);
              ident.setname(users[userId].name);
              console.log("Voici le nom : " , users[userId].name);
              return;
            } else {
              setLoading(false);
              Alert.alert('Connexion échouée', 'Votre compte est désactivé, contactez un administrateur.');
              return;
            }
          }
        }
        setLoading(false);
        Alert.alert('Login Failed', 'Invalid email or password.');
      } else {
        setLoading(false);
        Alert.alert('Login Failed', 'No users found.');
      }
    } catch (error: any) {
      setLoading(false);
      if (error.message.includes('Network request failed')) {
        Alert.alert('Network Error', 'Unable to connect to the internet. Please check your connection and try again.');
      } else {
        Alert.alert('Login Failed', 'Error connecting to the database.');
      }
      console.error(error);
    }
  };
