package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.AssignSurvey;

@Repository
public interface AssignSurveyRepository extends CrudRepository<AssignSurvey,Long> {

}
