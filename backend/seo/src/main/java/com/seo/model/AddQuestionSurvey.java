package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="addquestionsurvey")
public class AddQuestionSurvey {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	private Long id;
	private String patient_id;
	private String question;
	private String answer;
	private String survey_id;
	
	
	
	public AddQuestionSurvey(Long id, String patient_id, String question, String answer, String survey_id) {
		super();
		this.id = id;
		this.patient_id = patient_id;
		this.question = question;
		this.answer = answer;
		this.survey_id = survey_id;
	}

	public AddQuestionSurvey() {
		
	}

	

	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"patient_id\":\"" + patient_id + "\", \"question\":\"" + question + "\", \"answer\":\""
				+ answer + "\", \"survey_id\":\"" + survey_id + "\"}";
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

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getSurvey_id() {
		return survey_id;
	}

	public void setSurvey_id(String survey_id) {
		this.survey_id = survey_id;
	}

	
	
	
}
