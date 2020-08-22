package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.PatientSurvey;

@Repository
public interface PatientsurveyRepository extends CrudRepository<PatientSurvey, Long> {

}
