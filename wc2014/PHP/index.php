<?php
/**
 * @file
 * User has successfully authenticated with Twitter. Access tokens saved to session and DB.
 */

/* Load required lib files. */
session_start();
require_once('appOnly.php');

$bearer_token = get_bearer_token();
$urlSuffix = $_GET['q'];
echo search_for_a_term($bearer_token, $_GET['q'], "recent", 100, $_GET['max_id'], $_GET['since_id']);

