package com.erpo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.erpo.model.Patient;

import com.erpo.repository.PatientRepository;

@Service
public class PatientService implements IPatientService{

	 @Autowired
	    private PatientRepository patientRepository;

	@Override
	public <S extends Patient> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return patientRepository.saveAll(entities);
	}

	@Override
	public Optional<Patient> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Patient> findAllById(Iterable<Long> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Patient entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Patient> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Patient> findAll() {
	return (List<Patient>) patientRepository.findAll();
	}

	@Override
	public Patient save(Patient patient) {
		return patientRepository.save(patient);
	}

	
}
