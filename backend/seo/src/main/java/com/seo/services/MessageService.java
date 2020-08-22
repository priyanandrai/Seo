package com.erpo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.erpo.model.Message;
import com.erpo.repository.MessageRepository;


@Service
public class MessageService implements IMessageService {

	@Autowired
	private MessageRepository messagerepository;
	
	@Override
	public List<Message> findAll() {
		// TODO Auto-generated method stub
		 return (List<Message>) messagerepository.findAll();
	}

	@Override
	public Message save(Message message) {
		// TODO Auto-generated method stub
		return messagerepository.save(message);
	}

	
}
