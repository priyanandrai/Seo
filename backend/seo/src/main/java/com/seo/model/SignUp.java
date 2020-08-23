package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="singup")
public class SignUp {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private String phoneNumber;
	private String email;
	private String password;

	public SignUp() {

	}

	public SignUp(long id, String name, String email, String password,String phonenumber) {
		super();
		this.id = id;
		this.name= name;
		this.email = email;
		this.password = password;
		this.phoneNumber = phonenumber;
	}

	@Override
	public String toString() {
		return "{\"id\":" + id + ", \"name\":\"" + name + "\", \"email\":\"" + email + "\", \"phoneNumber\":\"" + phoneNumber
				+ "\",\"password\":\""+ password +  "\"}";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
