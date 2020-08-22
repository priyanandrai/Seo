package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.Message;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long>{

}
