package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="patientsurvey")
public class PatientSurvey {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	private Long id;
	private String patient_id;
	private String assessment;
	private String area_assessment;
	private String body_part;
	private String cost;
	private String assign_survey;
	
	
	public PatientSurvey(Long id, String patient_id, String assessment, String area_assessment, String body_part,
			String cost, String assign_survey) {
		super();
		this.id = id;
		this.patient_id = patient_id;
		this.assessment = assessment;
		this.area_assessment = area_assessment;
		this.body_part = body_part;
		this.cost = cost;
		this.assign_survey = assign_survey;
	}

	public PatientSurvey() {
		
	}


	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"patient_id\":\"" + patient_id + "\", \"assessment\":\"" + assessment
				+ "\", \"area_assessment\":\"" + area_assessment + "\", \"body_part\":\"" + body_part + "\", \"cost\":\"" + cost
				+ "\", \"assign_survey\":\"" + assign_survey + "\"}";
	}




	public Long getId() {
		return id;
	}




	public void setId(Long id) {
		this.id = id;
	}




	public String getPatient_id() {
		return patient_id;
	}




	public void setPatient_id(String patient_id) {
		this.patient_id = patient_id;
	}




	public String getAssessment() {
		return assessment;
	}




	public void setAssessment(String assessment) {
		this.assessment = assessment;
	}




	public String getArea_assessment() {
		return area_assessment;
	}




	public void setArea_assessment(String area_assessment) {
		this.area_assessment = area_assessment;
	}




	public String getBody_part() {
		return body_part;
	}




	public void setBody_part(String body_part) {
		this.body_part = body_part;
	}




	public String getCost() {
		return cost;
	}




	public void setCost(String cost) {
		this.cost = cost;
	}




	public String getAssign_survey() {
		return assign_survey;
	}




	public void setAssign_survey(String assign_survey) {
		this.assign_survey = assign_survey;
	}

	
	
	
	
	
		
}
