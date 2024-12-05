<?php
$apiKey = "your_api_key_here";
$url = "https://v3.football.api-sports.io/fixtures?live=all";

$headers = [
    "x-rapidapi-host: v3.football.api-sports.io",
    "x-rapidapi-key: $apiKey"
];

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>
