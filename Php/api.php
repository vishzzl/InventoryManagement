<?php
// Allow cross-origin resource sharing (CORS)
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");

// Get JSON data from the Angular app
$data = json_decode(file_get_contents("php://input"));

// Process the data (in this example, simply echo it back)
$response = array('message' => 'Data received successfully', 'data' => $data);

// Send the JSON response back to the Angular app
echo json_encode($response);
?>
