
document.addEventListener('DOMContentLoaded', function() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "your-api-key",
        authDomain: "your-auth-domain",
        projectId: "your-project-id",
        storageBucket: "your-storage-bucket",
        messagingSenderId: "your-messaging-sender-id",
        appId: "your-app-id",
        measurementId: "your-measurement-id"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    document.getElementById('searchButton').addEventListener('click', searchRecipes);

    async function searchRecipes() {
        const searchValue = document.getElementById('searchInput').value.toLowerCase();
        try {
            const recipeCollectionRef = db.collection("recipes");  // Adjust to your collection name
            const querySnapshot = await recipeCollectionRef.get();
            const filteredRecipes = [];

            querySnapshot.forEach((doc) => {
                if (doc.data().name.toLowerCase().includes(searchValue)) {
                    filteredRecipes.push(doc.data());
                }
            });

            displayRecipes(filteredRecipes);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    }

    function displayRecipes(recipes) {
        const container = document.getElementById("userRecipeCardContainer");
        container.innerHTML = "";
        recipes.forEach(recipe => {
            const recipeElement = document.createElement("div");
            recipeElement.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.ingredients}</p>`;
            container.appendChild(recipeElement);
        });
    }
});
// </script>