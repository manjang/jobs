<?php

require __DIR__ . '/db_connection.php';

/**
 * Class Job
 */
class Job
{

    /**
     * @var mysqli|PDO|string
     */
    protected $db;

    /**
     * Job constructor.
     */
    public function __construct()
    {
        $this->db = DB();
    }

    /**
     * Add new Job
     *
     * @param $job_title
     * @param $job_level
     * @param $specialization
     * @param $job_type
     * @param $min_qualification
     * @param $experience
     * @param $application_deadline
     * @param $salary
     * @param $job_location
     * @param $job_headline
     * @param $job_description
     *
     * @return string
     */
    public function Create($job_title, $job_level, $specialization, $job_type, $min_qualification, $experience, $application_deadline, $salary, $job_location, $job_headline, $job_description)
    {
        $query = $this->db->prepare("INSERT INTO jobs(job_title, job_level, specialization, job_type, min_qualification, experience, application_deadline, salary, job_location, job_headline, job_description) VALUES (:job_title, :job_level, :specialization, :job_type, :min_qualification, :experience, :application_deadline, :salary, :job_location, :job_headline, :job_description)");
        $query->bindParam("job_title", $job_title, PDO::PARAM_STR);
        $query->bindParam("job_level", $job_level, PDO::PARAM_STR);
        $query->bindParam("specialization", $specialization, PDO::PARAM_STR);
        $query->bindParam("job_type", $job_type, PDO::PARAM_STR);
        $query->bindParam("min_qualification", $min_qualification, PDO::PARAM_STR);
        $query->bindParam("experience", $experience, PDO::PARAM_STR);
        $query->bindParam("application_deadline", $application_deadline, PDO::PARAM_STR);
        $query->bindParam("salary", $salary, PDO::PARAM_STR);
        $query->bindParam("job_location", $job_location, PDO::PARAM_STR);
        $query->bindParam("job_headline", $job_headline, PDO::PARAM_STR);
        $query->bindParam("job_description", $job_description, PDO::PARAM_STR);
        $query->execute();

        return json_encode(['job' => [
            'id'          			=> $this->db->lastInsertId(),
            'job_title'   			=> $job_title,
            'job_level' 			=> $job_level,
            'specialization'		=> $specialization,
            'job_type'				=> $job_type,
            'min_qualification'		=> $min_qualification,
            'experience'			=> $experience,
            'application_deadline'	=> $application_deadline,
            'salary'				=> $salary,
            'job_location'			=> $job_location,
            'job_headline'			=> $job_headline,
            'job_description'		=> $job_description
        ]]);
    }

    /**
     * List Jobs
     *
     * @return string
     */
    public function Read()
    {
        $query = $this->db->prepare("SELECT * FROM jobs");
        $query->execute();
        $data = array();
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }

        return json_encode(['jobs' => $data]);
    }


    /**
     * Update Job
     *
     * @param $job_title
     * @param $job_level
     * @param $id
     */
    public function Update($job_title, $job_level, $specialization, $job_type, $min_qualification, $experience, $application_deadline, $salary, $job_location, $job_headline, $job_description, $id)
    {
        $query = $this->db->prepare("UPDATE jobs SET job_title = :job_title, job_level = :job_level, specialization = :specialization, job_type = :job_type, min_qualification = :min_qualification, experience = :experience, application_deadline = :application_deadline, salary = :salary, job_location = :job_location, job_headline = :job_headline, job_description = :job_description  WHERE id = :id");
        $query->bindParam("job_title", $job_title, PDO::PARAM_STR);
        $query->bindParam("job_level", $job_level, PDO::PARAM_STR);
        $query->bindParam("specialization", $specialization, PDO::PARAM_STR);
        $query->bindParam("job_type", $job_type, PDO::PARAM_STR);
        $query->bindParam("min_qualification", $min_qualification, PDO::PARAM_STR);
        $query->bindParam("experience", $experience, PDO::PARAM_STR);
        $query->bindParam("application_deadline", $application_deadline, PDO::PARAM_STR);
        $query->bindParam("salary", $salary, PDO::PARAM_STR);
        $query->bindParam("job_location", $job_location, PDO::PARAM_STR);
        $query->bindParam("job_headline", $job_headline, PDO::PARAM_STR);
        $query->bindParam("job_description", $job_description, PDO::PARAM_STR);
        $query->bindParam("id", $id, PDO::PARAM_STR);
        $query->execute();
    }

    /**
     * Delete Job
     *
     * @param $id
     */
    public function Delete($id)
    {
        $query = $this->db->prepare("DELETE FROM jobs WHERE id = :id");
        $query->bindParam("id", $id, PDO::PARAM_STR);
        $query->execute();
    }
}