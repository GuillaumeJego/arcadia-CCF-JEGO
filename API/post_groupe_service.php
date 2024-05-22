<?php

include __DIR__ . '\db_connexion.php';

try {
    if (
        $_SERVER['REQUEST_METHOD'] === 'POST' &&
        isset($_FILES['image']) && 
        isset($_POST['nom'])
    ) {
        $nom = $_POST['nom'];
        $image = file_get_contents($_FILES['image']['tmp_name']);
        error_log('Received POST request: nom=' . $nom);

        $stmt = $pdo->prepare(
            "INSERT INTO groupe_service 
            (nom, image) 
            VALUES (:nom, :image)");
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':image', $image, PDO::PARAM_LOB);

        if ($stmt->execute()) {
            echo json_encode(["message" => "L'image a été téléchargée avec succès."]);
            // error_log('Image uploaded successfully: nom=' . $nom);
        } else {
            echo json_encode(["message" => "Une erreur s'est produite lors du téléchargement de l'image."]);
            error_log('Error uploading image: ' . print_r($stmt->errorInfo(), true));
        }
    } else {
        echo json_encode(["message" => "Invalid request."]);
        error_log('Invalid request: ' . print_r($_POST, true) . ', ' . print_r($_FILES, true));
    }
} catch (PDOException $e) {
    echo json_encode(["message" => "Erreur: " . $e->getMessage()]);
    error_log('PDOException: ' . $e->getMessage());
}
?>
