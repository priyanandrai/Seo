package com.seo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Properties;
import java.util.stream.Collectors;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.hibernate.dialect.FirebirdDialect;
import org.json.JSONArray;
import org.openqa.selenium.JavascriptExecutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seo.dto.ChangePassword;
import com.seo.dto.Login;
import com.seo.dto.ProfileDto;
import com.seo.dto.Usersearch;
import com.seo.model.Activity;
import com.seo.model.Adminlogin;
import com.seo.model.Contactus;
import com.seo.model.Emailextractor;
import com.seo.model.Mywebsite;
import com.seo.model.SearchEngine;
import com.seo.model.SignUp;
import com.seo.model.SubmitRequest;
import com.seo.model.Subsribe;
import com.seo.sendmail.Sendmail;
import com.seo.services.IActivityService;
import com.seo.services.IAdminloginService;
import com.seo.services.IContactusSrevice;
import com.seo.services.IEmailextractorService;
import com.seo.services.IMywebsiteService;
import com.seo.services.ISignUpService;
import com.seo.services.ISubmitRequestService;
import com.seo.services.ISubsribeService;
import com.seo.services.SearchEngineservice;
import com.seo.sendmail.*;

import ch.qos.logback.core.net.SyslogOutputStream;

import com.seo.MultiThread.MultiThread;
import com.seo.Process.Process;
import com.seo.Process.ProcessDTO;
@RestController
public class MainServices {

	@Autowired
	ISignUpService iSignUpService;
	@Autowired
	IAdminloginService adminloginService;
	@Autowired
	SearchEngineservice searchEngineService;
	@Autowired
	ISubmitRequestService iSubmitRequestService;
	
	@Autowired
	ISubsribeService iSubscribeService;
	@Autowired
	IContactusSrevice iContactus;
	
	@Autowired
	IMywebsiteService iMywebsiteService;
	 
	@Autowired
	IActivityService iActivityService;
	
	@Autowired
	IEmailextractorService iEmailextractorService;
	
	
	@Autowired
	private Environment env;

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public String showsignUp(@RequestBody SignUp signup) {
		try {
			Iterator<SignUp> iterable = iSignUpService.findAll().iterator();
			while (iterable.hasNext()) {
				SignUp signUp2 = iterable.next();
				if (signUp2.getPhoneNumber().equalsIgnoreCase(signup.getPhoneNumber())) {
					return "{\"message\":\"User already exist .Please try to login or forgot password\"}";
				}
			}
			iSignUpService.save(signup);
		} catch (Exception e) {
			e.printStackTrace();
		}
		String username = env.getProperty("user.email");
		  String password = env.getProperty("user.password");
		  
		
		Session session = Session.getInstance(com.seo.bean.Bean.getProperty(),
				new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		});
		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(username));
			message.setRecipients(Message.RecipientType.TO,
					InternetAddress.parse(signup.getEmail()));
			message.setSubject("Welcome to SEO");
			message.setText("Dear User,"
					+ "\n\n user Name:"+ signup.getEmail()+"\n\n user Mobile Number:"+signup.getPhoneNumber() + "\n\n user Password :"+ signup.getPassword()
					+ "\n\n ");

			Transport.send(message);


		} catch (MessagingException e) {
			return "{\"message\":\"registration is done , error is sending email Please check configuration \"}";
		}

//		return "{\"message\":\"Thank you registration\"}";
		return signup.toString();
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/forgetPassword")
	public String showsignUp(@RequestBody Login login) {
		try {
			List<SignUp> signup = (List<SignUp>) iSignUpService.findAll();
			System.out.println(signup.toString());
			for (int i = 0; i < signup.size(); i++) {
				if (signup.get(i).getPhoneNumber() == null || signup.get(i).getPassword() == null) {
					continue;
				}
				if (signup.get(i).getPhoneNumber().equalsIgnoreCase(login.getMobileNumber())) {
					Activity activity = new Activity();
					activity.setTime(System.currentTimeMillis()+"");
					activity.setUsername(signup.get(i).getName());
					activity.setUser_id(signup.get(i).getId()+"");
					activity.setActivity("forgot password");
					iActivityService.save(activity);
					return "{\"message\":\"Please check your Phone for OTP\"}";
				}
			}
			return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";

		} catch (Exception e) {
			return "{\"message\":\"Error in sending message , Please try again \"}";
		}
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/validateotp")
	public String validateotp(@RequestParam(defaultValue = "") String otp) {
		try {
			return "{\"message\":\"Otp Validation done suscessfully\"}";
		} catch (Exception e) {
			return "{\"message\":\"Error in sending message , Please try again \"}";
		}
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	String view1(@RequestBody Login login) {
		List<SignUp> signup = (List<SignUp>) iSignUpService.findAll();
		System.out.println(signup.toString());
		for (int i = 0; i < signup.size(); i++) {
			if (signup.get(i).getPhoneNumber() == null || signup.get(i).getPassword() == null) {

				continue;
			}
			if (signup.get(i).getPhoneNumber().equalsIgnoreCase(login.getMobileNumber())
					&& signup.get(i).getPassword().equals(login.getPassword())) {
				Activity activity = new Activity();
				activity.setTime(System.currentTimeMillis()+"");
				activity.setUsername(signup.get(i).getName());
				activity.setUser_id(signup.get(i).getId()+"");
				activity.setActivity("USer login");
				iActivityService.save(activity);
				return signup.get(i).toString();
			}
		}
		try {
			
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";
	}
	
//	@CrossOrigin(origins = "*")
//	@PostMapping("/adminlogin")
//	String view2(@RequestBody Login login) {
//		System.out.println("I am in adminlogin");
//		System.out.println(login);
//		
//		List<Adminlogin> adminlogin = (List<Adminlogin>) adminloginService.findAll();
//		System.out.println(adminlogin.toString());
//		for (int i = 0; i < adminlogin.size(); i++) {
//			if (adminlogin.get(i).getPhoneNumber() == null || adminlogin.get(i).getPassword() == null) {
//			System.out.println("no found");
//				continue;
//			}
//			if (adminlogin.get(i).getPhoneNumber().equalsIgnoreCase(login.getMobileNumber())
//					&& adminlogin.get(i).getPassword().equals(login.getPassword())) {
//				System.out.println("I am in match");
//				System.out.println("getting phone number "+ adminlogin.get(i).getPhoneNumber());
//				return adminlogin.get(i).toString();
//			}
//		}
//		return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";
//	}
	
	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/adminutelogin")
	String view2(@RequestBody Login login) {
		System.out.println("I am in adminlogin");
		System.out.println(login);

		List<Adminlogin> adminlogin = (List<Adminlogin>) adminloginService.findAll();
		System.out.println(adminlogin.toString());
		for (int i = 0; i < adminlogin.size(); i++) {
			if (adminlogin.get(i).getAdminname() == null || adminlogin.get(i).getPassword() == null) {
			System.out.println("no found");
				continue;
			}
			if (adminlogin.get(i).getAdminname().equalsIgnoreCase(login.getAdminname())
					&& adminlogin.get(i).getPassword().equals(login.getPassword())) {
				System.out.println("I am in match");
				System.out.println("getting phone number "+ adminlogin.get(i).getAdminname());
				return adminlogin.get(i).toString();
			}
		}
		return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";
	}
	

	@CrossOrigin(origins = "*")
	@PostMapping("/searchuserprofile")
	public String searchuserprofile(@RequestBody Usersearch usersearch) {
		System.out.println("I am in searchuserprofile ");
		System.out.println(usersearch);
		try {
			if((usersearch.getUniqueid()!=null))
			{
				Optional<SignUp> signup = this.iSignUpService.findById(usersearch.getUniqueid());			
				return signup.get().toString();			
			}else {	
				SignUp signup=this.iSignUpService.findByPhoneNumber(usersearch.getMobileNumber());	
				return signup.toString();
			}
			
			}
		catch (Exception e) {
			return "no data ";
		}
		
	}
	
	

	@CrossOrigin(origins = "*")
	@GetMapping("/getprofile")
	public String getprofile(@RequestParam("id") Long id) {
		try {
			Optional<SignUp> signup = this.iSignUpService.findById(id);
			
			System.out.println(" Signup without tostring "+signup);
			
			//System.out.println("Signup without tostring"+signup);
			return signup.get().toString();
		} catch (Exception e) {

			return "no data ";
		}

	}

	@CrossOrigin(origins = "*")
	@PostMapping("/starttask")
	String starttask(@RequestBody SearchEngine searchengine) {
		try {
			String task1 = "Search Engine Submission";
			String task2 = "Social Book Marketing";
			String task3 = "Classified Submission";
			String Submiturl = searchengine.getSubmiturl();
			String EmailAddress = searchengine.getEmailaddress();
			
			if (searchengine.getTasktype().equalsIgnoreCase(task1)) {
				System.out.println("searchengine -- 1--");
				if (searchengine.getName() == null) {
					return "{\"message\":\" Please enter your name\"}";
				}
				if (searchengine.getEmailaddress() == null) {
					return "{\"message\":\" Please enter your email address\"}";
				}
				if (searchengine.getSubmiturl() == null) {
					return "{\"message\":\" Please enter the URl\"}";
				}
//				if(searchengine.getComments()==null) {
//					return "{\"message\":\" Please enter the comment\"}";
//				}
				
				searchengine.setTaskstatus("Pending");
				System.out.println("searchengine -- 2--");
				searchEngineService.savedatail(searchengine);
				
				MultiThread multiThread = new MultiThread();
				ProcessDTO processDTO = new ProcessDTO(searchengine);
				multiThread.submitTasktoThreadPool(new Process(processDTO), false);
				System.out.println("searchengine -- 3--");
					
				 return "{\"message\":\" Task type started successfully\"}";	

				
				
			} else if (searchengine.getTasktype().equalsIgnoreCase(task2)) {
				System.out.println("task2 -- 1--");
				if (searchengine.getTitle() == null) {
					return "{\"message\":\" Please enter the Title\"}";
				}
				if (searchengine.getKeyword() == null) {
					return "{\"message\":\" Please enter the keyword\"}";
				}
				if (searchengine.getDescription() == null) {
					return "{\"message\":\" Please enter the Description\"}";
				}
				if (searchengine.getSubmiturl() == null) {
					return "{\"message\":\" Please enter the URl\"}";
				}
//				if(searchengine.getComments()==null) {
//					return "{\"message\":\" Please enter the comment\"}";
//				}
				//searchengine.setTaskstatus("In Progress");
				//searchEngineService.savedatail(searchengine);
				
				System.out.println("task2 -- 2--");
				searchengine.setTaskstatus("Pending");
				searchEngineService.savedatail(searchengine);
				
				MultiThread multiThread = new MultiThread();
				ProcessDTO processDTO = new ProcessDTO(searchengine);
				multiThread.submitTasktoThreadPool(new Process(processDTO), false);
				System.out.println("task2 -- 3--");
				return "{\"message\":\" Task type started successfully\"}";
			} else if (searchengine.getTasktype().equalsIgnoreCase(task3)) {
				
				System.out.println("task3 -- 1--");
				if (searchengine.getTitle() == null) {
					return "{\"message\":\" Please enter the Title\"}";
				}
				if (searchengine.getKeyword() == null) {
					return "{\"message\":\" Please enter the keyword\"}";
				}
				if (searchengine.getDescription() == null) {
					return "{\"message\":\" Please enter the Description\"}";
				}
				if (searchengine.getSubmiturl() == null) {
					return "{\"message\":\" Please enter the URl\"}";
				}
				if (searchengine.getEmailaddress() == null) {
					return "{\"message\":\" Please enter your email address\"}";
				}
				if (searchengine.getPassword() == null) {
					return "{\"message\":\" Please enter your email address\"}";
				}
			//	MultiThread multiThread = new MultiThread();
			//	ProcessDTO processDTO = new ProcessDTO(searchengine);
			//	multiThread.submitTasktoThreadPool(new Process(processDTO), false);
			//	searchengine.setTaskstatus("In Pending will start this secnario in few time)");
			//	searchEngineService.savedatail(searchengine);
				System.out.println("task3 -- 2--");
				searchengine.setTaskstatus("Pending");
				searchEngineService.savedatail(searchengine);
				
				MultiThread multiThread = new MultiThread();
				ProcessDTO processDTO = new ProcessDTO(searchengine);
				multiThread.submitTasktoThreadPool(new Process(processDTO), false);
				System.out.println("task3 -- 3--");
				return "{\"message\":\" Task type started successfully\"}";		

			} else {
				return "{\"message\":\" Please select a valid   Task Type\"}";
			}

		} catch (Exception e) {
			System.out.println("task3 -- 4--");
			return "{\"message\":\"Error in creating task , Please try again \"}";
		}
	

	}

	@CrossOrigin(origins = "*")
	@PutMapping("/changepassword")
	String changePassword(@RequestBody ChangePassword changepassword) {
		Optional<SignUp> signup = this.iSignUpService.findById(changepassword.getUserId());

		SignUp signup1 = signup.get();

		try {

			if (signup1.getPassword().equals(changepassword.getCurrentPassword())) {
				signup1.setPassword(changepassword.getNewPassword());
				Activity activity = new Activity();
				activity.setTime(System.currentTimeMillis()+"");
				activity.setUsername(signup.get().getName());
				activity.setUser_id(signup.get().getId()+"");
				activity.setActivity("password changed");
				iActivityService.save(activity);
				iSignUpService.save(signup1);
				return "{\"message\":\"Password Successfully Changed\"}";
			} else {
				return "{\"message\":\"Please enter the correct existing password\"}";
			}

		} catch (Exception e) {

			return "{\"message\":\"Error in changing password , Please try again \"}";

		}

	}
	@CrossOrigin(origins = "*")
	@PutMapping("/editprofile")
	String editprofile(@RequestBody ProfileDto profile) {
		
		Optional<SignUp> signup = this.iSignUpService.findById(profile.getId());
		SignUp signup1 = signup.get();
		try {
			
				signup1.setName(profile.getName());
				signup1.setEmail(profile.getEmail());
				signup1.setProfession(profile.getProfession());
				signup1.setOrganisation(profile.getOrganisation());
				Activity activity = new Activity();
				activity.setTime(System.currentTimeMillis()+"");
				activity.setUsername(signup.get().getName());
				activity.setUser_id(signup.get().getId()+"");
				activity.setActivity("profile edited");
				iActivityService.save(activity);
				iSignUpService.save(signup1);
				return "{\"message\":\"Your Profile Successfully Changed\"}";
			
		} catch (Exception e) {

			return "{\"message\":\"Error in changing password , Please try again \"}";
		}
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/getinprogresstask")
	public List<SearchEngine> getInProgressTask(@RequestParam("id") Long id) {
	
		try {
			
			List<SearchEngine> list = (List<SearchEngine>) searchEngineService.findAlldetail();
			String taskstatus = "In Progress";
			String pending= "Pending";
			
			List<SearchEngine> list1 = 
					
					list.stream()
					.filter(searchengine -> searchengine.getUserId() == id
					&& ((searchengine.getTaskstatus().equalsIgnoreCase(taskstatus)) || (searchengine.getTaskstatus().equalsIgnoreCase(pending)) ))
					.collect(Collectors.toList());
			
			
			return list1;

			
//		List<SearchEngine> list = (List<SearchEngine>) searchEngineService.findAlldetail();
//
//			List<SearchEngine> list1 = list.stream().filter(searchengine -> searchengine.getUserId() == id)
//				.collect(Collectors.toList());
//		return list1;
		} catch (Exception e) {

			return null;
		}

	}

	@CrossOrigin(origins = "*")
	@GetMapping("/gettask")
	public List<SearchEngine> getTask(@RequestParam("id") Long id) {
	
		try {
			System.out.println(id);
			List<SearchEngine> searchengine = new ArrayList<SearchEngine>(); 
			List<SearchEngine> list = (List<SearchEngine>) searchEngineService.findAlldetail();
			for (int i = 0; i < list.size(); i++) {
				if(list.get(i).getUserId() == null) {
					continue;
				}			
				if(list.get(i).getUserId().longValue() == id.longValue()){
					searchengine.add(list.get(i));
				}
			}

			return searchengine;

		} catch (Exception e) {

			return null;
		}

	}
	@CrossOrigin(origins = "*")
	@GetMapping("/getlatesttask")
	public List<SearchEngine> getlatesttask(@RequestParam("id") Long id) {
	
		try {
			List<SearchEngine> list = (List<SearchEngine>) searchEngineService.findlatestdetail();

			List<SearchEngine> list1 = list.stream().filter(searchengine -> searchengine.getUserId() == id)
					.collect(Collectors.toList());
			return list1;

		} catch (Exception e) {

			return null;
		}

	}

	@CrossOrigin(origins = "*")
	@PostMapping("/submitrequest")
	public String submitrequesthere(@RequestBody SubmitRequest submitRequest) {
		iSubmitRequestService.save(submitRequest);
		System.out.println(submitRequest.toString());
		return "request is added sucessfully";
	}

	@CrossOrigin(origins = "*")
	@PutMapping("/updateprofile")
	public String updateprofile(@RequestParam(value = "id") Long id, @RequestParam(value = "name") String name,
			@RequestParam(value = "email") String email, @RequestParam(value = "profession") String profession,
			@RequestParam(value = "organisation") String organisation) {

		System.out.println("ID::" + id);
		Optional<SignUp> temp = iSignUpService.findById(id);

		SignUp signup1 = temp.get();

		signup1.setName(name);
		signup1.setEmail(email);
		signup1.setProfession(profession);
		signup1.setOrganisation(organisation);
		iSignUpService.save(signup1);
		return "update sucessfully";
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/deletedtasks")
	public String deletedtasks(@RequestParam(defaultValue = "") Long id) {
		System.out.println();
		searchEngineService.deleteById(id);
		return "deleted sucessfully";
	}
	

	@CrossOrigin(origins = "*")
	@PostMapping("/subscribe")
	public String subscribe(@RequestBody Subsribe Subsribe) {
		try {
//			Iterator<Subsribe> iterable = iSubscribeService.findAll().iterator();
//			while (iterable.hasNext()) {
//				Subsribe subsribe = iterable.next();
//				if (subsribe.getEmail().equalsIgnoreCase(subsribe.getEmail())) {
//					return "{\"message\":\"E-mail already exist \"}";
//				}
//			} 
			iSubscribeService.save(Subsribe);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println(Subsribe.toString());
		return "{\"message\":\"Subsribe sucessfully\"}";
		
	}	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/contactus")
	public String contactus(@RequestBody Contactus Contactus) {
		try {
			String body = "<p style=\"font-family:century\">hello SR consultancy services,</p>"
					+"<p style=\"margin-left:40px;font-family:century\">"+ Contactus.getName()+" is trying to connect with you on srcservicesltd.com"+"</p>"
							+"<br>"+"<b style=\"font-family:century\">Visitor Details:-</b>"+"<br>"+
					"<p style=\"margin-left:40px;font-family:century\">"+"Visitor Name:"+Contactus.getName()+"</p>"+
					"<p style=\"margin-left:40px;font-family:century\">"+"Mobile Number:"+Contactus.getNumber()+"</p>"+
					"<p style=\"margin-left:40px;font-family:century\">"+"Email Address:"+Contactus.getEmail()+"</p>"+
					"<p style=\"margin-left:40px;font-family:century\">"+"Organisation:"+Contactus.getOrganization()+"</p>"+
					"<p style=\"margin-left:40px;font-family:century\">"+"Country:"+Contactus.getCountry()+"</p>"+
					"<p style=\"margin-left:40px;font-family:century\">"+"Message:"+
					Contactus.getMessage()+"</p>"+
					"<p style=\"font-family:century\">Thank You</p>";
				
			
			String body1 = "<p style=\"font-family:century\">"+"Dear "+Contactus.getName()+","+"</p>"
					+"<p style=\"font-family:century\">Thank you to Connect us, Our representative will contact you within 24 hours.</p>"+
					"<p style=\"font-family:century\">Thanks & Regards</p>"+
					"<p style=\"font-family:century\">SR Consultancy Services<br/>91+ 8587049379<br/><b>info:</b>info@srcservicesltd.com<br/><b>Sales:</b>sales@srcservicesltd.com<br/><b>Jobs:</b>jobs@srcservicesltd.com<br/><b>HR:</b>hr@srcservicesltd.com</p>";
					
					
			Sendmail.SendMail("info@srcservicesltd.com","ujjawal.saini@srcservicesltd.com",Contactus.getName() + " is trying to contact you",body);
			Sendmail.SendMail("info@srcservicesltd.com",Contactus.getEmail(),"Thank You for contacting us",body1);
			 iContactus.save( Contactus);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println(Contactus.toString());
		return "Thank You !";
	}	
	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/mywebsite")
	public String mywebsite(@RequestBody Mywebsite mywebsite) {
		iMywebsiteService.save(mywebsite);
		System.out.println(mywebsite.toString());
		return "{\"message\":\"Url is added sucessfully\"}";
		
	}
	
	
//	@CrossOrigin(origins = "*")
//	@PostMapping("/activity")
//	public String activity(@RequestBody Activity activity) {
//		iActivityService.save(activity);
//		System.out.println(activity.toString());
//		return "Activity is added sucessfully";
//		
//	}
//	
	@CrossOrigin(origins = "*")
	@GetMapping("/activitylist")
	public Iterable<Activity> activitylist() {
		return iActivityService.findAll();
	}	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/startemailextractor")
	public String startemailextractor(@RequestBody Emailextractor emailextractor) throws IOException, InterruptedException {
		iEmailextractorService.save(emailextractor);
		JSONArray emaillist  = new JSONArray();
		try {
			String bulkemail1 = "Google.Com";
			String bulkemail2 = "Ask Me.Com";
			String bulkemail3 = "Yahoo.Com";
			String bulkemail4 = "Yippy Search";
			
			if (emailextractor.getType().equalsIgnoreCase(bulkemail1)) {
				 emaillist =  com.seo.Emailextractor.Googleemailextractor.GoogleSearchEmail(emailextractor.getQuery());
			}else if (emailextractor.getType().equalsIgnoreCase(bulkemail2)) {
				// emaillist =  com.seo.Emailextractor.Askmeemailextractor.AskmeSearchEmail(emailextractor.getQuery());
			}else if (emailextractor.getType().equalsIgnoreCase(bulkemail3)) {
			//	emaillist =  com.seo.Emailextractor.Yahooemailextractor.YahooSearchEmail(emailextractor.getQuery());
			}else if (emailextractor.getType().equalsIgnoreCase(bulkemail4)) {
			//	 emaillist =  com.seo.Emailextractor.Yippyemailextractor.YippySearchEmail(emailextractor.getQuery());
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		//System.out.println(emailextractor.toString());
	//	List<String> emaillist =  com.seo.Emailextractor.Googleemailextractor.GoogleSearchEmail(emailextractor.getQuery());
		//System.out.println(eamillist);
		return "{\"Emails\":"+emaillist.toString()+"}";
//	return "{\"message\":\"email is extracted sucessfully\"}";
		
		
	}
}
