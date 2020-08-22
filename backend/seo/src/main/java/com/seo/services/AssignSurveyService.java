package com.erpo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.erpo.model.AssignSurvey;
import com.erpo.repository.AssignSurveyRepository;

@Service
public class AssignSurveyService implements IAssignSurveyService{
	
	@Autowired
	private AssignSurveyRepository assignSurveyRepository;

	@Override
	public <S extends AssignSurvey> S save(S entity) {
		// TODO Auto-generated method stub
		return assignSurveyRepository.save(entity);
	}

	@Override
	public <S extends AssignSurvey> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<AssignSurvey> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<AssignSurvey> findAll() {
		// TODO Auto-generated method stub
		return assignSurveyRepository.findAll();
	}

	@Override
	public Iterable<AssignSurvey> findAllById(Iterable<Long> ids) {
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
	public void delete(AssignSurvey entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends AssignSurvey> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
