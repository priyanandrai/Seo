package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="doctorinfo")
public class DoctorInfo {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String doctor_name;
	private String area;
	private String place;
	private String hospital_name;
	
	
	public DoctorInfo(Long id, String doctor_name, String area, String place, String hospital_name) {
		super();
		this.id = id;
		this.doctor_name = doctor_name;
		this.area = area;
		this.place = place;
		this.hospital_name = hospital_name;
	}


	public DoctorInfo() {
		
	}


	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"doctor_name\":\"" + doctor_name + "\", \"area\":\"" + area + "\", \"place\":\"" + place
				+ "\", \"hospital_name\":\"" + hospital_name + "\"}";
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getDoctor_name() {
		return doctor_name;
	}


	public void setDoctor_name(String doctor_name) {
		this.doctor_name = doctor_name;
	}


	public String getArea() {
		return area;
	}


	public void setArea(String area) {
		this.area = area;
	}


	public String getPlace() {
		return place;
	}


	public void setPlace(String place) {
		this.place = place;
	}


	public String getHospital_name() {
		return hospital_name;
	}


	public void setHospital_name(String hospital_name) {
		this.hospital_name = hospital_name;
	}

	
}
