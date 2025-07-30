📦 API endpoints

🔐 Auth
| Méthode | Route       | Description             |
| ------- | ----------- | ----------------------- |
| POST    | `/register` | Création de compte      |
| POST    | `/login`    | Connexion, retour token |

✅ Todos (auth requis)
Token via header : Authorization: Bearer <token>
| Méthode | Route        | Description         |
| ------- | ------------ | ------------------- |
| GET     | `/todos`     | Récupère les todos  |
| POST    | `/todos`     | Crée une todo       |
| PUT     | `/todos/:id` | Met à jour une todo |
| DELETE  | `/todos/:id` | Supprime une todo   |
