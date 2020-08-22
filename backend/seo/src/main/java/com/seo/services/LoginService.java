package com.erpo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.erpo.model.Login;
import com.erpo.repository.LoginRepository;
import org.springframework.stereotype.Service;

@Service
public class LoginService implements ILoginServices{

    @Autowired
    private LoginRepository repository;
    
	@Override
	public List<Login> findAll() {
		// TODO Auto-generated method stub
		 return (List<Login>) repository.findAll();
	}

}
