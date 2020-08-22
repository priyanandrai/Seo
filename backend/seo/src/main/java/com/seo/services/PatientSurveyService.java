package com.erpo.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.erpo.model.PatientSurvey;
import com.erpo.repository.PatientsurveyRepository;

@Service
public class PatientSurveyService implements IPatientSurveyService {

		@Autowired
		private PatientsurveyRepository patientsurveyrepository;

		@Override
		public <S extends PatientSurvey> S save(S entity) {
			// TODO Auto-generated method stub
			return patientsurveyrepository.save(entity);
		}

		@Override
		public <S extends PatientSurvey> Iterable<S> saveAll(Iterable<S> entities) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public Optional<PatientSurvey> findById(Long id) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public boolean existsById(Long id) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public Iterable<PatientSurvey> findAll() {
			// TODO Auto-generated method stub
			return patientsurveyrepository.findAll();
		}

		@Override
		public Iterable<PatientSurvey> findAllById(Iterable<Long> ids) {
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
		public void delete(PatientSurvey entity) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void deleteAll(Iterable<? extends PatientSurvey> entities) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void deleteAll() {
			patientsurveyrepository.deleteAll();
			
		}
	
		
}
