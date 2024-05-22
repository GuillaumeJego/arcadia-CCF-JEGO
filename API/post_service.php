<?php

include __DIR__ . '\db_connexion.php';

try {
    if (
        $_SERVER['REQUEST_METHOD'] === 'POST' && 
        isset($_POST['nom']) && 
        isset($_POST['description']) && 
        isset($_FILES['image']) && 
        isset($_POST['groupe_service_id'])
    ) {
        $nom = $_POST['nom'];
        $description = $_POST['description'];
        $image = file_get_contents($_FILES['image']['tmp_name']);
        $commentaire = $_POST['conclusion'] ?? null;
        $groupe_service_id = $_POST['groupe_service_id'];

        $stmt = $pdo->prepare(
            "INSERT INTO `service` (nom, description, image, conclusion, groupe_service_id) 
            VALUES (:nom, :description, :image, :commentaire, :groupe_service_id)"
        );
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':description', $description);    
        $stmt->bindParam(':image', $image, PDO::PARAM_LOB);
        $stmt->bindParam(':commentaire', $commentaire);
        $stmt->bindParam(':groupe_service_id', $groupe_service_id, PDO::PARAM_INT);
        
        if ($stmt->execute()) {
            echo json_encode(["message" => "Le service a été ajouté avec succès."]);
            error_log("Le service ajouté avec succès: " . json_encode($_POST));
        } else {
            echo json_encode(["message" => "Une erreur s'est produite lors de l'ajout de Le service."]);
            error_log("Erreur lors de l'ajout de Le service: " . json_encode($stmt->errorInfo()));
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
