package com.seo.Websiteanalytic;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;

import org.json.JSONObject;

import com.seo.bean.Bean;
import com.seo.dto.UserTrafficData;

public class GetDataForWebSite {
	
	public static void main(String[] args) {
		GetDataForWebSite dataForWebSite = new GetDataForWebSite();
		try {
			String data = dataForWebSite.getDataFormServer("stackoverflow.com", "ranking");
			System.out.println(data);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public String getDataFormServer(String data,String parameter)throws Exception{
		
		try {
			// this for save data in database and used for data  
			//UserTrafficData data2 = new UserTrafficData();
			String url = hashMap.get(parameter);
			System.out.println("data_from_Api   "+ url+data);
			if(url == null ) {
				return "{\"message\",\"Please provide Parameter\"}";
			}else {
				String data_from_Api =  getDatafromUrl(url+data);
				System.out.println("data_from_Api   "+ data_from_Api);
				JSONObject jsonObject = Bean.ConvertXmlToJSON(data_from_Api);
				System.out.println("dtaa from url  "+ jsonObject);
				if(jsonObject == null) {
					return null;
				}else {
					return jsonObject.toString();
				}
			}
			
			
			
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
	}
	
	private String getDatafromUrl(String urlgotgettingData) {
		try {
			System.out.println("urlgotgettingData  "+ urlgotgettingData);
			  URL url = new URL(urlgotgettingData);
		         URLConnection urlConnection = url.openConnection();
		         HttpURLConnection connection = null;
		         if(urlConnection instanceof HttpURLConnection) {
		            connection = (HttpURLConnection) urlConnection;
		         }else {
		            System.out.println("Please enter an HTTP URL.");
		            return null ;
		         }
		         
		         BufferedReader in = new BufferedReader(
		            new InputStreamReader(connection.getInputStream()));
		         String urlString = "";
		         String current;
		         
		         while((current = in.readLine()) != null) {
		            urlString += current;
		         }
		         return urlString;
		        
		} catch (Exception e) {
			return null;
		}
	}

	static HashMap< String, String> hashMap = new HashMap<>();
	
	static {
		hashMap.put("ranking", "http://data.alexa.com/data?cli=10&dat=s&url=");
	}

	
	
}
