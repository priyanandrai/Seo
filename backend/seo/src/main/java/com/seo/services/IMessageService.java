package com.erpo.services;

import java.util.List;


import com.erpo.model.Message;

public interface IMessageService {
	
	List<Message> findAll();
	
	Message save(Message message);

}
