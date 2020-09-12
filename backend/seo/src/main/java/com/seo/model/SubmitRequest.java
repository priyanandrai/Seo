package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="request")
public class SubmitRequest {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String email;
	private String message;
	
	
	public SubmitRequest(Long id, String email, String message) {
		super();
		this.id = id;
		this.email = email;
		this.message = message;
	}


	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"email\":\"" + email + "\", \"message\":\"" + message + "\"}";
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	

}
