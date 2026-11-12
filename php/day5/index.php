<?php
echo "Привет, это РНР";

$services = [
	['title' => 'стрижка', 'price' => 1500],
	['title' => 'окрашивание', 'price' => 4500],
	['title' => 'укладка', 'price' => 2500]
];

foreach ($services as $service) {
	echo $service['title'] . '<br>';
}

echo '<ul>';
foreach ($services as $service) {
    echo '<li>' . $service['title'] . ' — ' . $service['price'] . ' руб.</li>';
}
echo '</ul>';