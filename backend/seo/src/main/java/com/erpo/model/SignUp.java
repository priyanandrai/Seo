package com.erpo.model;

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
 private String firstname;
 private String lastname;
 private String dob;
 private String gender;
 private String email;
 private String password;
 private String Question;
 public String getRole() {
	return role;
}

public void setRole(String role) {
	this.role = role;
}

public String getGender() {
	return gender;
}

private String answer;
 private String role;
 public SignUp() {
	 
 }
  
 public SignUp(long id, String firstname, String lastname, String dob, String gender, String email, String password,
		String question, String answer,String role) {
	super();
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.dob=dob;
	this.gender = gender;
	this.email = email;
	this.password = password;
	this.Question = question;
	this.answer = answer;
	this.role = role ;
}

@Override
public String toString() {
	return "{\"id\":" + id + ", \"firstname\":\"" + firstname + "\", \"lastname\":\"" + lastname + "\", \"dob\":\"" + dob + "\",\" gender\":\""
			+ gender + "\", \"email\":\"" + email + "\",\"Question\":\"" + Question + "\", \"answer\":\"" + answer
			+ "\",\"role\":\""+ role +  "\"}";
}

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
	
}

public String getFirstname() {
	return firstname;
}

public void setFirstname(String firstname) {
	this.firstname = firstname;
}

public String getLastname() {
	return lastname;
}

public void setLastname(String lastname) {
	this.lastname = lastname ;
}

public String getDob() {
	return dob;
}

public void setDob(String dob) {
	this.dob = dob;
}

public String isGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
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

public String getQuestion() {
	return Question;
}

public void setQuestion(String question) {
	Question = question;
}

public String getAnswer() {
	return answer;
}

public void setAnswer(String answer) {
	this.answer = answer;
}
 


 
 
	
}
