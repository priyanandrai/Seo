package com.seo.bean;

import java.net.MalformedURLException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import javax.mail.Folder;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.NoSuchProviderException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Store;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class Bean {
	
	public static JSONObject ConvertXmlToJSON(String XML_String) {
		  try {
	           return XML.toJSONObject(XML_String);
	        } catch (Exception je) {
	            System.out.println(je.toString());
	            return null ;
	        }
	}

	public static ArrayList<String> getAreaOfAsssment(String Type){
		
		System.out.println("Data for fetch "+ Type);
		ArrayList<String> arrayList = new ArrayList<String>();
		
		//Observer,Performance Measure,Other,Physologiacal,Pro,Proxy
		
		String[] temp = Type.split(",");
		for (int i = 0; i < temp.length; i++) {
			
			if(temp[i].equalsIgnoreCase("Observational")) {
				arrayList.add("Activities of Daily Living");
				arrayList.add("Behavior");
				arrayList.add("Depression");
				arrayList.add("General Health");
				arrayList.add("Pain");
				arrayList.add("Hearing");
				arrayList.add("Smell");
				
			} else if(temp[i].equalsIgnoreCase("Performance Measure")) {
				arrayList.add("Strength");
				arrayList.add("Touch");
				arrayList.add("Hearing");
				
			} else if(temp[i].equalsIgnoreCase("Other")) {
				//arrayList.add("Assertiveness");
				
				arrayList.add("Eating");
				
			} else if(temp[i].equalsIgnoreCase("Emotional")) {
				arrayList.add("GAIT");
				arrayList.add("Sleep");
				arrayList.add("Mental Health");
				arrayList.add("Pain");
				
			}else if(temp[i].equalsIgnoreCase("Pro")) {
				arrayList.add("GAIT");
				arrayList.add("Sleep");
				arrayList.add("Activities of Daily Living");
				arrayList.add("Behavior");
				arrayList.add("Depression");
				arrayList.add("Self Efficiency");
				arrayList.add("Social R'ships");
				arrayList.add("Mental Health");
				arrayList.add("Eating");
				
				
			}else if(temp[i].equalsIgnoreCase("Proxy")) {
				
				
				
			}
			
		}
			
		
		return arrayList;
	}
	
	public static Properties getProperty() {
		Properties props = new Properties();
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		
		return props ;
	}

	public static void sendEmail(String to, String subject ,String messagetoSend, String userName , String passwprd) {
		Properties props = new Properties();
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props,
				new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(userName, passwprd);
			}
		});
		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(userName));
			message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(to));
			message.setSubject(subject);
			message.setText(messagetoSend);

			Transport.send(message);
		} catch (Exception e) {
			new Exception("issue in sending email ");
		}
	}

	public static String readallEmail(String user, String password) {
		try {

			String host = "pop.gmail.com";// change accordingly
			String mailStoreType = "pop3";
			try {

				//create properties field
				Properties properties = new Properties();

				properties.put("mail.pop3.host", host);
				properties.put("mail.pop3.port", "995");
				properties.put("mail.pop3.starttls.enable", "true");
				Session emailSession = Session.getDefaultInstance(properties);

				//create the POP3 store object and connect with the pop server
				Store store = emailSession.getStore("pop3s");

				store.connect(host, user, password);

				//create the folder object and open it
				Folder emailFolder = store.getFolder("Inbox");

				emailFolder.open(Folder.READ_ONLY);

				// retrieve the messages from the folder in an array and print it
				Message[] messages = emailFolder.getMessages();
				System.out.println("messages.length---" + messages.length);
				ArrayList<JSONObject> arrayList = new  ArrayList<JSONObject>();
				int n =  messages.length ; 
				if(n > 10) {
					n =10 ;
				}

				System.out.println(n);
				for (int i = 0; i < n; i++) {
					System.out.println("i "+ i);
					Message message = messages[i];

					try {
						
						Object obj = message.getContent();
						JSONObject hashMap = new JSONObject();
						
						hashMap.put("Subject",  message.getSubject());
						hashMap.put("From" , message.getFrom()[0]);
						hashMap.put("To" , message.getAllRecipients().toString());
						hashMap.put("ReceivedDate" , message.getReceivedDate());
						hashMap.put("Text" ,obj);
						
						
						arrayList.add(hashMap);
					} catch (Exception e) {
						System.out.println(e.getMessage());
					}
				}



				//close the store and folder objects
				emailFolder.close(false);
				store.close();

				return arrayList.toString();

			} catch (NoSuchProviderException e) {
				e.printStackTrace();
			} catch (MessagingException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static String readallSentEmail(String user, String password) {
		try {

			String host = "pop.gmail.com";// change accordingly
			String mailStoreType = "pop3";
			try {

				//create properties field
				Properties properties = new Properties();

				properties.put("mail.pop3.host", host);
				properties.put("mail.pop3.port", "995");
				properties.put("mail.pop3.starttls.enable", "true");
				Session emailSession = Session.getDefaultInstance(properties);

				//create the POP3 store object and connect with the pop server
				Store store = emailSession.getStore("imaps");
				//  Store store = session.getStore("imaps");

				store.connect(host, user, password);

				//create the folder object and open it
			    Folder sentMail = store.getFolder("[Gmail]/Sent Mail");
			    sentMail.open(Folder.READ_WRITE);

				// retrieve the messages from the folder in an array and print it
				Message[] messages = sentMail.getMessages();
				System.out.println("messages.length---" + messages.length);
				ArrayList<JSONObject> arrayList = new  ArrayList<JSONObject>();
				int n =  messages.length ; 
				if(n > 10) {
					n =10 ;
				}

				System.out.println(n);
				for (int i = 0; i < n; i++) {
					System.out.println("i "+ i);
					Message message = messages[i];

					Object obj = message.getContent();
					JSONObject hashMap = new JSONObject();

					hashMap.put("Subject",  message.getSubject());
					hashMap.put("From" , message.getFrom()[0]);
					hashMap.put("To" , message.getAllRecipients()[0]);
					hashMap.put("ReceivedDate" , message.getReceivedDate());
					hashMap.put("Text" ,obj);


					arrayList.add(hashMap);
				}


				//close the store and folder objects
				sentMail.close(false);
				store.close();

				return arrayList.toString();

			} catch (NoSuchProviderException e) {
				e.printStackTrace();
			} catch (MessagingException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String getquestionofsurveyforPredefine(String type) {
		// TODO Auto-generated method stub
		return null;
	}
}
