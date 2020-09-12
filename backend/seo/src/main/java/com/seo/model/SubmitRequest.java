package com.seo.model;

import javax.persistence.Column;
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
	@Column(name="userid")
	private Long userId;
	private String email;
	private String message;
	
	
	public SubmitRequest(Long id, Long userId, String email, String message) {
		super();
		this.id = id;
		this.userId = userId;
		this.email = email;
		this.message = message;
	}
	
	public SubmitRequest() {
		
	}
	
	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"userId\":\"" + userId + "\", \"email\":\"" + email + "\", \"message\":\"" + message + "\"}";
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
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
