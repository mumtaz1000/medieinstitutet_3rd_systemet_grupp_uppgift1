rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write, update : if request.auth.uid == userId || request.auth.token.admin == true;
     
    }
     match /products/{productId} {
      allow read, write, update : if request.auth.uid == userId || request.auth.token.admin == true;
     
    }
  }
}