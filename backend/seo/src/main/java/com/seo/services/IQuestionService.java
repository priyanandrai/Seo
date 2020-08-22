package com.erpo.services;

import org.springframework.data.repository.CrudRepository;

import com.erpo.model.Question;

public interface IQuestionService extends  CrudRepository<Question,Long> {

}
