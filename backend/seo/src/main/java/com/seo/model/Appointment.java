package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "appointment")
public class Appointment {
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	private Long id;
	
	String patientId;
	
	String date;
	
	String time;
	
	String reason;
	

	public String toString() {
		return "{'id':'" + id + "', 'patientId':'" + patientId + "','date':'" + date + "', 'time':'" + time + "','reason':'"
				+ reason + "', 'address':'" + address + "'}";
	}

	String address;

	public Appointment() {
		
	}
	public Appointment(Long id, String patientId, String date, String time, String reason, String address) {
		super();
		this.id = id;
		this.patientId = patientId;
		this.date = date;
		this.time = time;
		this.reason = reason;
		this.address = address;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPatientId() {
		return patientId;
	}

	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
}
