<?php

$data = json_decode(file_get_contents('php://input'), TRUE);

if (isset($data['job'])) {

    require __DIR__ . '/library.php';

    $job_id = (isset($data['job']['id']) ? $data['job']['id'] : NULL);

    // Delete the Job
    $job = new Job();

    $job->Delete($job_id);
}

?>