package com.seo.services;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.seo.model.SignUp;

public interface ISignUpService extends CrudRepository<SignUp, Long> {


	SignUp findByPhoneNumber(String mobileNumber);

}
