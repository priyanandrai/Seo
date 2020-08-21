package com.erpo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.erpo.model.SurveyPackege;
import com.erpo.repository.SurveyRepository;

@Service
public class SurveyService implements ISurveyService{
	
	@Autowired
	private SurveyRepository repository;
	
	@Override
	public List<SurveyPackege> findAll() {
		// TODO Auto-generated method stub
		 return (List<SurveyPackege>) repository.findAll();
	}

	@Override
	public SurveyPackege save(SurveyPackege survey) {
		// TODO Auto-generated method stub
		return repository.save(survey);
	}
	  
}
