package com.erpo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "surveypackege")
public class SurveyPackege {
 
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	  
	private long  id;
	private String name;
    private  String invitation_sender;
    private String  invitation_subject;
    private String invitation_email;
    private String lock_survey;
    private String auto_send;
    private String allow_step;
    private String show_step;
    private String forced_step;
    private String finished_url;
    private String into_text;
    private String outrow_text;
    private String survey_selection;
   
   
 public SurveyPackege(long id, String name, String invitation_sender, String invitation_subject,
			String invitation_email, String lock_survey, String auto_send, String allow_step, String show_step,
			String forced_step, String finished_url, String into_text, String outrow_text, String survey_selection) {
		super();
		this.id = id;
		this.name = name;
		this.invitation_sender = invitation_sender;
		this.invitation_subject = invitation_subject;
		this.invitation_email = invitation_email;
		this.lock_survey = lock_survey;
		this.auto_send = auto_send;
		this.allow_step = allow_step;
		this.show_step = show_step;
		this.forced_step = forced_step;
		this.finished_url = finished_url;
		this.into_text = into_text;
		this.outrow_text = outrow_text;
		this.survey_selection = survey_selection;
	}


	public SurveyPackege() {
		 
	 }


	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\", \"name\":\"" + name + "\", \"invitation_sender\":\"" + invitation_sender
				+ "\", \"invitation_subject\":\"" + invitation_subject + "\", \"invitation_email\":\"" + invitation_email
				+ "\", \"lock_survey\":\"" + lock_survey + "\", \"auto_send\":\"" + auto_send + "\", \"allow_step\":\"" + allow_step
				+ "\", \"show_step\":\"" + show_step + "\", \"forced_step\":\"" + forced_step + "\", \"finished_url\":\"" + finished_url
				+ "\", \"into_text\":\"" + into_text + "\", \"outrow_text\":\"" + outrow_text + "\", \"survey_selection\":\"" + survey_selection
				+ "\"}";
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


	public String getInvitation_sender() {
		return invitation_sender;
	}


	public void setInvitation_sender(String invitation_sender) {
		this.invitation_sender = invitation_sender;
	}


	public String getInvitation_subject() {
		return invitation_subject;
	}


	public void setInvitation_subject(String invitation_subject) {
		this.invitation_subject = invitation_subject;
	}


	public String getInvitation_email() {
		return invitation_email;
	}


	public void setInvitation_email(String invitation_email) {
		this.invitation_email = invitation_email;
	}


	public String getLock_survey() {
		return lock_survey;
	}


	public void setLock_survey(String lock_survey) {
		this.lock_survey = lock_survey;
	}


	public String getAuto_send() {
		return auto_send;
	}


	public void setAuto_send(String auto_send) {
		this.auto_send = auto_send;
	}


	public String getAllow_step() {
		return allow_step;
	}


	public void setAllow_step(String allow_step) {
		this.allow_step = allow_step;
	}


	public String getShow_step() {
		return show_step;
	}


	public void setShow_step(String show_step) {
		this.show_step = show_step;
	}


	public String getForced_step() {
		return forced_step;
	}


	public void setForced_step(String forced_step) {
		this.forced_step = forced_step;
	}


	public String getFinished_url() {
		return finished_url;
	}


	public void setFinished_url(String finished_url) {
		this.finished_url = finished_url;
	}


	public String getInto_text() {
		return into_text;
	}


	public void setInto_text(String into_text) {
		this.into_text = into_text;
	}


	public String getOutrow_text() {
		return outrow_text;
	}


	public void setOutrow_text(String outrow_text) {
		this.outrow_text = outrow_text;
	}


	public String getSurvey_selection() {
		return survey_selection;
	}


	public void setSurvey_selection(String survey_selection) {
		this.survey_selection = survey_selection;
	}
	
}	
