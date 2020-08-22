package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="assignsurvey")
public class AssignSurvey {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String survey_id;
	private String survey_name;
	private String patient_id;
	private String patient_name;
	public AssignSurvey(Long id, String survey_id, String survey_name, String patient_id, String patient_name) {
		super();
		this.id = id;
		this.survey_id = survey_id;
		this.survey_name = survey_name;
		this.patient_id = patient_id;
		this.patient_name = patient_name;
	}
	
	public AssignSurvey() {
		
	}
	
	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"survey_id\":\"" + survey_id + "\", \"survey_name\":\"" + survey_name + "\", \"patient_id\":\""
				+ patient_id + "\", \"patient_name\":\"" + patient_name + "\"}";
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSurvey_id() {
		return survey_id;
	}
	public void setSurvey_id(String survey_id) {
		this.survey_id = survey_id;
	}
	public String getSurvey_name() {
		return survey_name;
	}
	public void setSurvey_name(String survey_name) {
		this.survey_name = survey_name;
	}
	public String getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(String patient_id) {
		this.patient_id = patient_id;
	}
	public String getPatient_name() {
		return patient_name;
	}
	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}
	
	
	
	
}
