package com.seo.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
import com.seo.model.SearchEngine;
import com.seo.model.SignUp;
import com.seo.services.ISignUpService;
import com.seo.services.SearchEngineservice;

@RestController
public class MainServices {

	@Autowired
	ISignUpService iSignUpService;
	@Autowired
	SearchEngineservice searchEngineService;

	@Autowired
	private Environment env;

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public String showsignUp(@RequestBody SignUp signup) {
		try {
			Iterator<SignUp> iterable = iSignUpService.findAll().iterator();
			while (iterable.hasNext()) {
				SignUp signUp2 = iterable.next();
				if (signUp2.getEmail().equalsIgnoreCase(signup.getEmail())) {
					return "{\"message\":\"User already exist .Please try to login ot forget password\"}";
				}
			}
			iSignUpService.save(signup);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "{\"message\":\"Thank you registration\"}";
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
				return signup.get(i).toString();
			}
		}
		return "{\"message\":\"User do not exist, Please create account or contact to administrator\"}";
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/getprofile")
	public String getprofile(@RequestParam("id") Long id) {
		try {
			Optional<SignUp> signup = this.iSignUpService.findById(id);
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
			String task3="Classified Submission";
			if (searchengine.getTasktype().equalsIgnoreCase(task1)) {
				if (searchengine.getName() == null) {
					return "{\"message\":\" Please enter your name\"}";
				}if (searchengine.getEmailaddress() == null) {
					return "{\"message\":\" Please enter your email address\"}";
				}if (searchengine.getSubmiturl() == null) {
					return "{\"message\":\" Please enter the URl\"}";
				}
				searchengine.setTaskstatus("In Progress");
				searchEngineService.savedatail(searchengine);
				return "{\"message\":\" Task type started successfully\"}";
			}else if (searchengine.getTasktype().equalsIgnoreCase(task2)) {
                if (searchengine.getTitle() == null) {
					return "{\"message\":\" Please enter the Title\"}";
				}if (searchengine.getKeyword() == null) {
						return "{\"message\":\" Please enter the keyword\"}";
				}if (searchengine.getDescription() == null) {
							return "{\"message\":\" Please enter the Description\"}";
				}if (searchengine.getSubmiturl() == null) {
								return "{\"message\":\" Please enter the URl\"}";
				}
				searchengine.setTaskstatus("In Progress");
				searchEngineService.savedatail(searchengine);
				return "{\"message\":\" Task type started successfully\"}";
			}else if (searchengine.getTasktype().equalsIgnoreCase(task3)){
					if (searchengine.getTitle() == null) {
		        	  return "{\"message\":\" Please enter the Title\"}";
		          }if (searchengine.getKeyword() == null) {
		        	  return "{\"message\":\" Please enter the keyword\"}";
		          }if (searchengine.getDescription() == null) {
		        	  return "{\"message\":\" Please enter the Description\"}";
		          }if (searchengine.getSubmiturl() == null) {
		        	  return "{\"message\":\" Please enter the URl\"}";
		          }if (searchengine.getEmailaddress() == null) {
						return "{\"message\":\" Please enter your email address\"}";
		          }if(searchengine.getPassword() == null) {
						return "{\"message\":\" Please enter your email address\"}";
		          }
		          searchengine.setTaskstatus("In Progress");
		          searchEngineService.savedatail(searchengine);
		          return "{\"message\":\" Task type started successfully\"}";
				}
			else {
				return "{\"message\":\" Please select a valid   Task Type\"}";
			}
									
	}catch(Exception e)
	{
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
	@GetMapping("/getinprogresstask")
	public List<SearchEngine> getInProgressTask(@RequestParam("id") Long id) {
		try {
			List<SearchEngine> list = (List<SearchEngine>) searchEngineService.findAlldetail();
			String taskstatus = "In Progress";
			List<SearchEngine> list1 = list.stream().filter(searchengine -> searchengine.getUserId() == id
					&& searchengine.getTaskstatus().equalsIgnoreCase(taskstatus)).collect(Collectors.toList());
			return list1;

		} catch (Exception e) {

			return null;
		}

	}

	@CrossOrigin(origins = "*")
	@GetMapping("/gettask")
	public List<SearchEngine> getTask(@RequestParam("id") Long id) {
		try {
			List<SearchEngine> list = (List<SearchEngine>) searchEngineService.findAlldetail();

			List<SearchEngine> list1 = list.stream().filter(searchengine -> searchengine.getUserId() == id)
					.collect(Collectors.toList());
			return list1;

		} catch (Exception e) {

			return null;
		}

	}

}
