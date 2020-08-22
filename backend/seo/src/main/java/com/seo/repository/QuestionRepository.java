package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.Question;

@Repository
public interface QuestionRepository extends CrudRepository<Question,Long> {

}
