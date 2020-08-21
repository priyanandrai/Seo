 package com.erpo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.erpo.model.AddQuestionSurvey;
import com.erpo.model.Appointment;
import com.erpo.model.AssignSurvey;
import com.erpo.model.DoctorInfo;
import com.erpo.model.Login;
import com.erpo.model.Patient;
import com.erpo.model.PatientSurvey;
import com.erpo.model.Question;
import com.erpo.model.SignUp;
import com.erpo.model.SurveyPackege;

import com.erpo.repository.PatientRepository;
import com.erpo.repository.SignupRepository;
import com.erpo.services.IAddquestionsurveyService;
import com.erpo.services.IAppointmentService;
import com.erpo.services.IAssignSurveyService;
import com.erpo.services.IDoctorInfoService;
import com.erpo.services.ILoginServices;
import com.erpo.services.IMessageService;
import com.erpo.services.IPatientService;
import com.erpo.services.IPatientSurveyService;
import com.erpo.services.IQuestionService;
import com.erpo.services.ISurveyService;

@RestController
public class MainServices {
	
	@Autowired
	SignupRepository SignupRepository;
	
	@Autowired
	private IPatientService iPatientService;
	
	@Autowired
	private ISurveyService iSurveyService;
	
	@Autowired
	private IMessageService iMessageService;
	
	@Autowired
	private IAppointmentService iAppointmentService;
	
	@Autowired
	private IPatientSurveyService iPatientSurveyService;
	
	@Autowired
	private IAddquestionsurveyService iAddquestionsurveyService;
	
	@Autowired
	private IAssignSurveyService iAssignSurveyService ;
	
	@Autowired 
	private IDoctorInfoService iDoctorInfoService;
	
	@Autowired
	private  Environment env;
	
	@Autowired
	private IQuestionService  iQuestionSurvey;
	
	
	
		
	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public String showsignUp (@RequestBody SignUp  signup) {
		try {
			Iterator<SignUp> iterable =  SignupRepository.findAll().iterator();
			while(iterable.hasNext()) {
				SignUp signUp2 = iterable.next();
				if(signUp2.getEmail().equalsIgnoreCase(signup.getEmail())) {
					return "{\"message\":\"User already exist .Please try to login ot forget password\"}";
				}
			}		
			SignupRepository.save(signup);
		} catch (Exception e) {
			// TODO: handle exception 
		}


		  String username = env.getProperty("user.email");
		  String password = env.getProperty("user.password");
		  String welcomePage = env.getProperty("user.welcomePage");
		Session session = Session.getInstance(com.erpo.bean.Bean.getProperty(),
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
			message.setSubject("Welcome to ERPO");
			message.setText("Dear User,"
					+ "\n\n user Name:"+ signup.getEmail() + "\n\n user password :"+ signup.getPassword()
					+ "\n\n "+welcomePage+" ");

			Transport.send(message);


		} catch (MessagingException e) {
			return "{\"message\":\"regsitration is done , error is sending email Please check configuration \"}";
		}

		return "SignUP page is ready";
	}
	
	@CrossOrigin(origins = "*")
    @PostMapping("/login")
	 String view1(@RequestBody Login login) {
		List<SignUp> signup = (List<SignUp>) SignupRepository.findAll();
		for (int i = 0; i < signup.size(); i++) {
			if(signup.get(i).getEmail().equalsIgnoreCase(login.getName()) && signup.get(i).getPassword().equals(login.getPassword()) ) {
				return signup.get(i).toString();
			}
		}
        return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";
	}
	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/addpatient")
	public String showsignUp (@RequestBody Patient  patient) {
		try {
		Iterator<Patient> iterator =  iPatientService.findAll().iterator();
		
		while (iterator.hasNext()) {
			Patient patient2 = iterator.next();
			
			if(patient2.getEmail().equalsIgnoreCase(patient.getEmail()))
				 return "{\"message\":\"Patient already exist in Records.\"}";
			
				}
		} catch (Exception e) {
			// TODO: handle exception
		}
		iPatientService.save(patient);
		String welcomePage = env.getProperty("user.welcomePage");
		String message = "Please create account on "+ welcomePage;
		final String username = env.getProperty("user.email");
		final String password = env.getProperty("user.password");
		com.erpo.bean.Bean.sendEmail(patient.getEmail(), "Dear "+ patient.getName(), message, username, password);
		  return "{\"message\":\"patient added sucessfully. Welcome link is send to his/her email ID \"}";
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getpatientlist")
	public List<Patient> showsignUp () {
		return iPatientService.findAll();
		
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getEmail")
	public String getEmail () {
		
		final String username = env.getProperty("user.email");
		final String password = env.getProperty("user.password");
		System.out.println();
		return com.erpo.bean.Bean.readallEmail(username, password);
		
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/readallSentEmail")
	public String readallSentEmail () {
		
		final String username = env.getProperty("user.email");
		final String password = env.getProperty("user.password");
		System.out.println();
		return com.erpo.bean.Bean.readallSentEmail(username, password);
		
	}
	
	
	
	@CrossOrigin(origins = "*")
    @PostMapping("/forgetpassword")
	public String forgetpassword(@RequestBody Login login) {
		List<SignUp> signup = (List<SignUp>) SignupRepository.findAll();
		
		for (int i = 0; i < signup.size(); i++) {
			if(signup.get(i).getEmail().equalsIgnoreCase(login.getName())) {
				String dearUser="Dear "+ login.getName() +"\n Your password is "+ signup.get(i).getPassword();
				final String username = env.getProperty("user.email");
				final String password = env.getProperty("user.password");
				com.erpo.bean.Bean.sendEmail(login.getName(), "Forget password", dearUser, username,password);
				return "{\"message\":\"Password is sent tp register email. Please check you email\"}";
			}
		}

        return "{\"message\":\"user Do not exist. Please signup First\"}";
	}
	
	@CrossOrigin(origins = "*")

	@PostMapping("/surveypackege")
	public String showsurvey(@RequestBody SurveyPackege  surveypackege) {
		try {
			Iterator<SurveyPackege> iterator = iSurveyService.findAll().iterator();
			while (iterator.hasNext()) {
				SurveyPackege packege = iterator.next();	
				if(packege.getName().equalsIgnoreCase(surveypackege.getName()))
					return "{\"message\":\"Survay already exist .\"}";
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		iSurveyService.save(surveypackege);
		System.out.println(surveypackege.toString());
		 return "{\"message\":\"survey added sucessfully.\"}";
	
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/surveypackegelist")
	public List<SurveyPackege> showsurvey1 () {
		return iSurveyService.findAll();
		
	}
	
	 @CrossOrigin(origins = "*")
	@PostMapping("/message")
	public String showmessage(@RequestBody com.erpo.model.Message  message) {
		System.out.println(message.toString());
		
		final String username = env.getProperty("user.email");
		final String password = env.getProperty("user.password");

        Properties props = new Properties();
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
          new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
          });
        try {

            Message message1 = new MimeMessage(session);
            message1.setFrom(new InternetAddress("sainikrishna7060@gmail.com"));
            message1.setRecipients(Message.RecipientType.TO,
                InternetAddress.parse(message.getRecipient()));
            message1.setSubject("Testing Subject");
            message1.setText("Dear User..New Message for You"+
            		 "\n\n subject::"+ message.getSubject()+ "\n\n Message::"+ message.getMessage());

            Transport.send(message1);

            System.out.println("Done");

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
        
		return "message is send";
	
	}
	
	 @CrossOrigin(origins = "*")
		@PostMapping("/appointment")
		public String showappointment (@RequestBody Appointment  appointment) {
		 iAppointmentService.save(appointment);
			System.out.println(appointment.toString());
			return "appointment added sucessfully";
		}
		
		@CrossOrigin(origins = "*")
		@GetMapping("/appointmentlist")
		public Iterable<Appointment> showappointment () {
			return iAppointmentService.findAll();
			
		}
		
		
		@CrossOrigin(origins = "*")
		@PostMapping("/patientsurvey")
		public String showsurvey (@RequestBody PatientSurvey  patientsurvey) {
			iPatientSurveyService.deleteAll();
			iPatientSurveyService.save(patientsurvey);
			System.out.println(patientsurvey.toString());
			return "patient survey added sucessfully";
		}
		
		@CrossOrigin(origins = "*")
		@GetMapping("/patientsurveylist")
		public Iterable<PatientSurvey> showsurvey () {
			return iPatientSurveyService.findAll();
			
		}
		
		@CrossOrigin(origins = "*")
		@PostMapping("/addquestionsurvey")
		public String showpatient (@RequestBody AddQuestionSurvey  addquestionsurvey) {
			iAddquestionsurveyService.save(addquestionsurvey);
			System.out.println(addquestionsurvey.toString());
			return "question survey added sucessfully";
		}
		
		@CrossOrigin(origins = "*")
		@GetMapping("/patientquestionsurvey")
		public Iterable<AddQuestionSurvey> patientquestionsurvey () {
			return iAddquestionsurveyService.findAll();
			
		}
		
		
		
		@CrossOrigin(origins = "*")
		@PostMapping("/question")
		public String showquestion (@RequestBody Question  question) {
			iQuestionSurvey.save(question);
			System.out.println(question.toString());
			return "question & its Response added sucessfully";
		}
		
		
		@CrossOrigin(origins = "*")
		@PostMapping("/assignsurvey")
		public String showassignsurvey (@RequestBody AssignSurvey  assignsurvey) {
			iAssignSurveyService.save(assignsurvey);
			System.out.println(assignsurvey.toString());
			return "Survey is asssign sucessfully";
		}
		
		
		@CrossOrigin(origins = "*")
		@GetMapping("/assignsurveylist")
		public Iterable<AssignSurvey> showassignsurvey () {
			return iAssignSurveyService.findAll();
			
		}
		
		@CrossOrigin(origins = "*")
		@PostMapping("/doctorinformation")
		public String showinformation (@RequestBody DoctorInfo  doctorinfo) {
			iDoctorInfoService.save(doctorinfo);
			System.out.println(doctorinfo.toString());
			return "Information  is added sucessfully";
		}
		
		@CrossOrigin(origins = "*")
		@GetMapping("/doctorinformationlist")
		public Iterable<DoctorInfo> showinformation () {
			return iDoctorInfoService.findAll();
			
		}
		
		@CrossOrigin(origins = "*")
		@GetMapping("/getquestionofsurvey")
		public Iterable<Question> showquestion (@RequestParam(defaultValue="") String name ) {
			ArrayList<Question> arrayList = new  ArrayList<Question>();
			Iterator<Question> iterable =  iQuestionSurvey.findAll().iterator();
				if(iterable.hasNext()) {
					Question question = iterable.next();
					if(question.getSurvey_name().equalsIgnoreCase(name)) {
						arrayList.add(question);
					}
				}
				
				if(arrayList.size() != 0) {
					return arrayList;
				}else {
					Question question = new Question(); 
					if(name.equalsIgnoreCase("Outro")) {
						question.setQuestion("Thank you for particiating in Survay ");
						arrayList.add(question);
					}else if(name.equalsIgnoreCase("Introduction")){
						question.setQuestion("Introduction Text Here");
						arrayList.add(question);
					}
					else{
						question.setQuestion("Do you have a "+ name + " issue");
						question.setAnswer("Yes,NO");
						arrayList.add(question);
					}
						return arrayList;
				}
		}
		
		@CrossOrigin(origins = "*")
		@GetMapping("/getareaofassgment")
		public Iterable<String> getareaofassgment (@RequestParam(defaultValue="") String type ) {
			return com.erpo.bean.Bean.getAreaOfAsssment(type);
		}
		
		@CrossOrigin(origins = "*")
		@GetMapping("/getquestionofsurveyforPredefine")
		public String getquestionofsurveyforPredefine (@RequestParam(defaultValue="") String type ) {
			return com.erpo.bean.Bean.getquestionofsurveyforPredefine(type);
		}
		
		
		
		}
