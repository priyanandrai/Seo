package com.seo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userlogin")
public class SignUp {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private String phoneNumber;
	private String email;
	private String password;
	private String profession;
	private String organisation;
	
	public SignUp(long id, String name, String phoneNumber, String email, String password, String profession,
			String organisation, String role, boolean loginstatus, String submissionEmailID,
			String submissionPassword) {
		super();
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
		this.profession = profession;
		this.organisation = organisation;
		this.role = role;
		this.loginstatus = loginstatus;
		this.submissionEmailID = submissionEmailID;
		this.submissionPassword = submissionPassword;
	}

	private String role;
	private boolean loginstatus;
	private String submissionEmailID;
	

	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"name\":\"" + name + "\", \"phoneNumber\":\"" + phoneNumber +"\", \"email\":\"" + email
				+"\", \"password\":\"" + password +"\", \"profession\":\"" + profession + "\", \"organisation\":\"" + organisation + "\", \"role\":\""
				+ role + "\", \"loginstatus\":\"" + loginstatus +"\", \"submissionEmailID\":\"" + submissionEmailID
				+ "\", \"submissionPassword\":\"" + submissionPassword + "\"}";
	}

	public String getProfession() {
		return profession;
	}

	public void setProfession(String profession) {
		this.profession = profession;
	}

	public String getOrganisation() {
		return organisation;
	}

	public void setOrganisation(String organisation) {
		this.organisation = organisation;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isLoginstatus() {
		return loginstatus;
	}

	public void setLoginstatus(boolean loginstatus) {
		this.loginstatus = loginstatus;
	}

	public String getSubmissionEmailID() {
		return submissionEmailID;
	}

	public void setSubmissionEmailID(String submissionEmailID) {
		this.submissionEmailID = submissionEmailID;
	}

	public String getSubmissionPassword() {
		return submissionPassword;
	}

	public void setSubmissionPassword(String submissionPassword) {
		this.submissionPassword = submissionPassword;
	}

	private String submissionPassword;

	public SignUp() {

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
