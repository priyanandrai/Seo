package com.erpo.services;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.Patient;


public interface IPatientService extends CrudRepository<Patient	, Long> {
	List<Patient> findAll();
	@SuppressWarnings("unchecked")
	Patient save(Patient patient) ;
}
