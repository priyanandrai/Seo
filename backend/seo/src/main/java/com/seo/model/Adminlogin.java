package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="adminlogin")
public class Adminlogin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String phoneNumber="12345678";
	String password = "asdf1234";
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Adminlogin(long id, String phoneNumber, String password) {
		super();
		this.id = id;
		this.phoneNumber = phoneNumber;
		this.password = password;
	}
	@Override
	public String toString() {
		return "Adminlogin [id=" + id + ", phoneNumber=" + phoneNumber + ", password=" + password + "]";
	}
	
	
	
	
}
