package com.erpo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.erpo.model.AddQuestionSurvey;
import com.erpo.repository.AddquestionsurveyRepository;

@Service
public class AddquestionsurveyService implements IAddquestionsurveyService {
	
	@Autowired
	private AddquestionsurveyRepository addquestionsurveyrepository;

	@Override
	public <S extends AddQuestionSurvey> S save(S entity) {
		// TODO Auto-generated method stub
		return addquestionsurveyrepository.save(entity);
	}

	@Override
	public <S extends AddQuestionSurvey> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<AddQuestionSurvey> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<AddQuestionSurvey> findAll() {
		// TODO Auto-generated method stub
		return addquestionsurveyrepository.findAll();
	}

	@Override
	public Iterable<AddQuestionSurvey> findAllById(Iterable<Long> ids) {
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
	public void delete(AddQuestionSurvey entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends AddQuestionSurvey> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

}
