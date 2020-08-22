package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private Long id;
	 private String name;
	 private Long phone;
	 private String email;
	 private String dob;
	 private String gender;
	 private String doctor_name;
	 private String doctor_id;
	
	 public Patient() {
		 super();
	 }

	public Patient(Long id, String name, Long phone, String email, String dob, String gender, String doctor_name,
			String doctor_id) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.dob = dob;
		this.gender = gender;
		this.doctor_name = doctor_name;
		this.doctor_id = doctor_id;
	}

	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"name\":\"" + name + "\", \"phone\":\"" + phone + "\", \"email\":\"" + email + "\", \"dob\":\"" + dob
				+ "\", \"gender\":\"" + gender + "\", \"doctor_name\":\"" + doctor_name + "\", \"doctor_id\":\"" + doctor_id + "\"}";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDoctor_name() {
		return doctor_name;
	}

	public void setDoctor_name(String doctor_name) {
		this.doctor_name = doctor_name;
	}

	public String getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(String doctor_id) {
		this.doctor_id = doctor_id;
	}

	
	 
	
	 
}
