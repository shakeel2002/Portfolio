<?php
header('Content-Type: application/json');

// Database connection
$conn = new mysqli('localhost', 'root', '', 'contact_messages'); // Changed database name to contact_messages
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed.']);
    exit();
}

// Get POST data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Validate the input data
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit();
}

// Insert the data into the database
$stmt = $conn->prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Message saved successfully.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to save the message.']);
}

$stmt->close();
$conn->close();
?>
