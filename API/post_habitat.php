<?php

include __DIR__ . '\db_connexion.php';

try {
    if (
        $_SERVER['REQUEST_METHOD'] === 'POST' && 
        isset($_POST['nom']) && 
        isset($_POST['description']) && 
        isset($_FILES['image']) && 
        isset($_POST['continent_id'])
    ) {
        $nom = $_POST['nom'];
        $description = $_POST['description'];
        $image = file_get_contents($_FILES['image']['tmp_name']);
        $commentaire = $_POST['commentaire_habitat'] ?? null;
        $continent_id = $_POST['continent_id'];

        $stmt = $pdo->prepare(
            "INSERT INTO habitat (nom, description, image, commentaire_habitat, continent_id) 
            VALUES (:nom, :description, :image, :commentaire, :continent_id)"
        );
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':description', $description);    
        $stmt->bindParam(':image', $image, PDO::PARAM_LOB);
        $stmt->bindParam(':commentaire', $commentaire);
        $stmt->bindParam(':continent_id', $continent_id, PDO::PARAM_INT);
        
        if ($stmt->execute()) {
            echo json_encode(["message" => "L'habitat a été ajouté avec succès."]);
            error_log("Habitat ajouté avec succès: " . json_encode($_POST));
        } else {
            echo json_encode(["message" => "Une erreur s'est produite lors de l'ajout de l'habitat."]);
            error_log("Erreur lors de l'ajout de l'habitat: " . json_encode($stmt->errorInfo()));
        }
    } else {
        echo json_encode(["message" => "Invalid request."]);
        error_log("Requête invalide: " . json_encode($_POST) . " Fichiers: " . json_encode($_FILES));
    }
} catch (PDOException $e) {
    echo json_encode(["message" => "Erreur: " . $e->getMessage()]);
    error_log('PDOException: ' . $e->getMessage());
}
?>
