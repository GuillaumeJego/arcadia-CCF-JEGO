<?php

include __DIR__ . '\db_connexion.php';

try {
    if (
        $_SERVER['REQUEST_METHOD'] === 'POST' && 
        isset($_POST['prenom']) && 
        isset($_POST['etat']) && 
        isset($_FILES['image']) && 
        isset($_POST['habitat_id'])
    ) {
        $prenom = $_POST['prenom'];
        $compteur =  $_POST['compteur'] ?? null;
        $image = file_get_contents($_FILES['image']['tmp_name']);
        $habitat_id = $_POST['habitat_id'];

        $stmt = $pdo->prepare(
            "INSERT INTO animal (prenom, etat, compteur, image, habitat_id) 
            VALUES (:prenom, :etat, :image, 0, :habitat_id)"
        );
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':etat', $etat);    
        $stmt->bindParam(':image', $image, PDO::PARAM_LOB);
        $stmt->bindParam(':habitat_id', $habitat_id, PDO::PARAM_INT);
        
        if ($stmt->execute()) {
            echo json_encode(["message" => "L'animal a été ajouté avec succès."]);
            error_log("animal ajouté avec succès: " . json_encode($_POST));
        } else {
            echo json_encode(["message" => "Une erreur s'est produite lors de l'ajout de l'animal."]);
            error_log("Erreur lors de l'ajout de l'animal: " . json_encode($stmt->errorInfo()));
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
