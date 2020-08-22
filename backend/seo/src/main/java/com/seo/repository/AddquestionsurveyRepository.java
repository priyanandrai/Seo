package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.AddQuestionSurvey;

@Repository
public interface AddquestionsurveyRepository extends CrudRepository<AddQuestionSurvey,Long> {

}
