package com.erpo.services;

import java.util.List;

import com.erpo.model.SurveyPackege;

public interface ISurveyService {

	List<SurveyPackege> findAll();

	SurveyPackege save(SurveyPackege survey);

}
