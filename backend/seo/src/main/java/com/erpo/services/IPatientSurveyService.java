package com.erpo.services;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.erpo.model.PatientSurvey;

public interface IPatientSurveyService extends CrudRepository<PatientSurvey, Long> {
	
}
