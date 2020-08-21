package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="question")
public class Question {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String survey_id;
	private String survey_name;
	private String question;
	private String answer;
	
	
	public Question(Long id, String survey_id, String survey_name, String question, String answer) {
		super();
		this.id = id;
		this.survey_id = survey_id;
		this.survey_name = survey_name;
		this.question = question;
		this.answer = answer;
	}
	
	
	public Question() {
		
		
	}
	
	
	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"survey_id\":\"" + survey_id + "\", \"survey_name\":\"" + survey_name + "\", \"question\":\""
				+ question + "\", \"answer\"=" + answer + "\"}";
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
	
	
	
	
	
	
}
