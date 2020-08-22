package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.SurveyPackege;

@Repository
public interface SurveyRepository extends CrudRepository<SurveyPackege, Long> {

}
