package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.Login;

@Repository
public interface LoginRepository extends CrudRepository<Login, Long> {

}
