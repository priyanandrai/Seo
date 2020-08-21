package com.erpo.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Long> {

}
